import { SnackbarColorType } from '../types/snackbar-color.type';
import { SnackbarHorizontalPositionType } from '../types/snackbar-horizontal-position.type';
import { SnackbarIconPositionType } from '../types/snackbar-icon-position.type';
import { SnackbarVerticalPositionType } from '../types/snackbar-vertical-position.type';

export interface SnackbarData {
  customClass?: string;
  durationInSeconds?: number;
  horizontalPosition?: SnackbarHorizontalPositionType | string;
  iconName?: string;
  iconPosition?: SnackbarIconPositionType | string;
  message?: string;
  type?: SnackbarColorType | string;
  verticalPosition?: SnackbarVerticalPositionType | string;
}
