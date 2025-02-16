import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, catchError } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoaderService } from '../../loader.service';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  http = inject(HttpClient);
  router = inject(Router);
  loader = inject(LoaderService);


  private apiUrl = 'http://localhost:5043/api';

  //nome: string, email: string, senha: string
  getListaDeCompras() {
    return this.http.get(this.apiUrl+'/listacompra');
  }
  getListaDeComprasById(id:number) {
    return this.http.get(this.apiUrl+'/listacompra/'+id);
  }

  login(email: string, senha: string ) {
    this.loader.show();
    const data = {email, senha};
    this.http.post(this.apiUrl+'/login', data, httpOptions) 
      
    .pipe(catchError((error: HttpErrorResponse) => { 
      this.loader.hide(); 
      this.handleError(error); 
      return throwError(() => error); 
    }))
    .subscribe({
      next: (response: any) => {

        this.loader.hide();

        localStorage.setItem("email", response.email);
        localStorage.setItem("token", response.token);
        localStorage.setItem("nome", response.nome);
        localStorage.setItem("userIdentify", response.id);
          
        Swal.fire({
            position: "center",
            icon: "success",
            title: `Bem Vindo ${response.nome} !`,
            showConfirmButton: false,
            timer: 1500,
        });

      },
      complete: () => {
        this.loader.hide();
        this.router.navigate(['/dashboard']);
      }
    })
  }

  handleError(error: HttpErrorResponse) {
    this.loader.hide();
    switch(error.status) {
      case 0:
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Serviço indisponível!"
        });
        break;
      case 401: 
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email ou senha inválidos"
      });
      break;
      case 500: 
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.error
        })
        break;
      default:
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocorreu um erro inesperado!"
        });
        break;
    }
  }
}
