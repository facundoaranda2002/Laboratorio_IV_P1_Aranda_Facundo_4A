import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private router: Router) {}

  canActivate: CanActivateFn = (route, state) => {
    const user = localStorage.getItem('user');

    if (user) {
      return true;
    } else {
      Swal.fire("", "Usuario no autorizado", "error");
      this.router.navigate(['/login']);
      return false;
    }
  }
}

