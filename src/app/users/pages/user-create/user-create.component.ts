import { Component, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { SnackbarData } from '../../../shared/components/snackbar/models/snackbar-data.model';
import { SnackbarService } from '../../../shared/components/snackbar/services/snackbar.service';
import { SnackbarComponent } from '../../../shared/components/snackbar/snackbar.component';
import { ErrorSnackbarTemplate } from '../../../shared/components/snackbar/templates/error-snackbar.template';
import { SuccessSnackbarTemplate } from '../../../shared/components/snackbar/templates/success-snackbar.template';
import { CookieService } from '../../../shared/services/cookie.service';
import { UserFormComponent } from '../../components/user-form/user-form.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-create',
  imports: [UserFormComponent, SnackbarComponent],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss',
})
export class UserCreateComponent implements OnDestroy {
  public destroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly cookieService: CookieService,
    private readonly snackbarService: SnackbarService,
    private readonly userService: UserService
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public dispatchFormSubmit(form: FormGroup): void {
    this.userService
      .create(form.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.openSuccesSnackbar();
        },
        error: error => {
          const errorMessage =
            error.status === 0 ? 'Server is not available' : error.message || 'An unexpected error occurred';
          this.openErrorSnackbar(errorMessage);
        },
      });
  }

  private openSuccesSnackbar(): void {
    const snackbarData: SnackbarData = {
      ...SuccessSnackbarTemplate,
      message: 'Login successful',
    };
    this.snackbarService.snackbar$.next(snackbarData);
  }

  private openErrorSnackbar(message?: string): void {
    const snackbarData: SnackbarData = {
      ...ErrorSnackbarTemplate,
      message: message || 'Login failed! Please verify your credentials',
    };
    this.snackbarService.snackbar$.next(snackbarData);
  }
}
