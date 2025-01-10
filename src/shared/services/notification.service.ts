import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private _toastrService: ToastrService) { }

  show(message: string, type: string, options?: any) {

    if (!options) {
      options = {
        timeOut: 5000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
        tapToDismiss: true
      };
    }

    switch (type) {
      case 'success':
        this._toastrService.success(message, 'Success', options);
        break;
      case 'warning':
        this._toastrService.warning(message, 'Warning', options);
        break;
      case 'error':
        this._toastrService.error(message, 'Error', options);
        break;
      default:
        this._toastrService.info(message, 'Info', options);
    }
  }
}
