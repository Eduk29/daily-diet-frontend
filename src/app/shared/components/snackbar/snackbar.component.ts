import { Component, ElementRef, OnInit } from '@angular/core';
import { tap } from 'rxjs';

import { SnackbarData } from './models/snackbar-data.model';
import { SnackbarService } from './services/snackbar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-snackbar',
  imports: [CommonModule],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss',
})
export class SnackbarComponent implements OnInit {
  public snackbarData!: SnackbarData;

  constructor(
    private eleRef: ElementRef,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit() {
    this.snackbarService.snackbar$
      .pipe(
        tap((snackbarData: SnackbarData) => {
          this.snackbarData = snackbarData;
          this.configureHorizontalPosition();
          this.configureVerticalPosition();
          this.configureTypeClass();
          return snackbarData;
        })
      )
      .subscribe((snackbarData: SnackbarData) => this.open(snackbarData));
  }

  private configureHorizontalPosition(): void {
    if (this.snackbarData.horizontalPosition) {
      const position = this.snackbarData.horizontalPosition;
      this.eleRef.nativeElement.children[0].classList.add(`horizontal-${position}`);
    }
  }

  private configureTypeClass(): void {
    if (this.snackbarData.type) {
      const classElement = this.eleRef.nativeElement.children[0].classList;
      const customClass = this.snackbarData.type;
      if (classElement.length > 1) {
        this.resetSnackbar(this.eleRef);
      }
      this.eleRef.nativeElement.children[0].classList.add(`snackbar-${customClass}`);
    }
  }

  private configureVerticalPosition(): void {
    if (this.snackbarData.verticalPosition) {
      const position = this.snackbarData.verticalPosition;
      this.eleRef.nativeElement.children[0].classList.add(`vertical-${position}`);
    }
  }

  private open(snackbarData: SnackbarData) {
    if (snackbarData.message && snackbarData.message !== '') {
      setTimeout(() => {
        this.eleRef.nativeElement.children[0].classList.add('show');
        this.eleRef.nativeElement.children[0].classList.remove('hide');
      }, 10);

      setTimeout(
        () => {
          this.eleRef.nativeElement.children[0].classList.remove('show');
          this.eleRef.nativeElement.children[0].classList.add('hide');
        },
        (snackbarData.durationInSeconds as number) * 1000
      );
    }
  }

  private resetSnackbar(element: ElementRef): void {
    element.nativeElement.children[0].classList.remove('snackbar-error');
    element.nativeElement.children[0].classList.remove('snackbar-info');
    element.nativeElement.children[0].classList.remove('snackbar-success');
  }
}
