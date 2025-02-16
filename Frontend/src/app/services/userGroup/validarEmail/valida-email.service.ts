import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidaEmailService {

  validaEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Cria o regex para validar o email
    var test = emailRegex.test(email);
    return !test ? false : true;
  }
  
}
