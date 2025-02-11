import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { SnackbarData } from '../models/snackbar-data.model';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  public snackbar$: BehaviorSubject<SnackbarData> = new BehaviorSubject<SnackbarData>({});

  constructor() {}

  public openSnackbar(snackbarData: SnackbarData): void {
    if (this.snackbarDataHasMessage(snackbarData)) {
      this.configureDefaultValues(snackbarData);
      this.snackbar$.next(snackbarData);
    }
  }

  private configureDefaultValues(snackbarData: SnackbarData): void {
    snackbarData.horizontalPosition = snackbarData.horizontalPosition || 'center';
    snackbarData.verticalPosition = snackbarData.verticalPosition || 'top';
    snackbarData.durationInSeconds = snackbarData.durationInSeconds || 5;
    snackbarData.type = snackbarData.type || 'info';
  }

  private snackbarDataHasMessage(snackbarData: SnackbarData): boolean {
    return !!snackbarData.message && snackbarData.message !== '';
  }
}
