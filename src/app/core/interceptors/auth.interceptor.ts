import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const auth = inject(AuthService);

  req = req.clone({
    setHeaders:{
      token : auth.getToken() as string,
    }
  })
  return next(req);
};
