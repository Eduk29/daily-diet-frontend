import { Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs';

import { ModalService } from './services/modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  public isOpen$: Observable<boolean>;

  constructor(private modalService: ModalService) {
    this.isOpen$ = this.modalService.isOpen$;
  }

  @HostListener('document:keydown.escape', ['$event'])
  public handleEscapeKey(): void {
    this.modalService.close();
  }

  public onBackdropClick(event: MouseEvent | Event): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal')) {
      this.modalService.close();
    }
  }

  public closeModal(): void {
    this.modalService.close();
  }
}
