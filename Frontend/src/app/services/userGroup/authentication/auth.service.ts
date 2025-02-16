import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  router = inject(Router);

  IsLoggedIn() : boolean {
    return !!localStorage.getItem('token');
  }

  getUserName(): string | null { 
    return localStorage.getItem('nome'); 
  } 

  getToken() : string | null {
    return localStorage.getItem('token');
  }
  
  logout(): void { 
    localStorage.removeItem('token'); 
    localStorage.removeItem('email'); 
    localStorage.removeItem('nome');
    localStorage.removeItem('userIdentify');
    
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Até Logo!",
      showConfirmButton: false,
      timer: 1500
    });

    this.router.navigate(['']);

  }
}
