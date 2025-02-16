import { inject, Injectable } from '@angular/core';
import { LoaderService } from '../../loader.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, catchError } from 'rxjs';
import Swal from 'sweetalert2';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
  })
}


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

    http = inject(HttpClient);
    router = inject(Router);
    loader = inject(LoaderService);

  private apiUrl = 'http://localhost:5043/api';

  cadastro(nome: string, email: string, senha: string) {
  
      this.loader.show();
  
      email.toLowerCase;
      
      const data = { nome, email, senha };
  
      this.http.post(this.apiUrl+'/cadastro', data, httpOptions)
      .pipe(
        catchError((error: HttpErrorResponse) => { 
          this.loader.hide(); 
          this.handleError(error); 
          return throwError(() => error); 
        }))
        .subscribe({
          next: (response) => {
            this.loader.hide();
  
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Cadastro realizado com sucesso!",
              showConfirmButton: false,
              timer: 1500,
          });
  
          },
          complete: () => {
            this.loader.hide();
            this.router.navigate(['login']);
          }
        });
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
