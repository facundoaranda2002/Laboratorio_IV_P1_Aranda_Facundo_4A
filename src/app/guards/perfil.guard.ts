import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class PerfilGuard {
  constructor(private router: Router) {}

  canActivate: CanActivateFn = (route, state) => {
    const user = localStorage.getItem('user');

    if (user) {
      let usuario = JSON.parse(user) as Usuario;

      if (usuario.perfil === 'admin') {
        return true;
      } else {
        Swal.fire("", "Usuario no autorizado", "error");
        this.router.navigate(['/home']);
        return false;
      }
    } else {
      Swal.fire("", "Usuario no autorizado", "error");
      this.router.navigate(['/login']);
      return false;
    }
  }
}
