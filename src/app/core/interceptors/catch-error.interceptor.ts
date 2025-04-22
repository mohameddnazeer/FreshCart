import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const catchErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const toaster = inject(ToastrService);
  return next(req).pipe(
    catchError((err) => {

      if (err.status === 401) {
        toaster.error('Unauthorized access!');
      } else if (err.status === 500) {
        toaster.error('Server error!');
      } else {
        toaster.error('Unexpected error occurred.');
      }
    toaster.error(err.message)

    
    return throwError( () => err)
  })
);
};