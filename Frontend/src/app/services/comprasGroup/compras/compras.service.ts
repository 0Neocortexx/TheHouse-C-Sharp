import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../userGroup/authentication/auth.service';
import { Observable, throwError, catchError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  private apiUrl = 'http://localhost:5043/api';

  authService = inject(AuthService);
  http = inject(HttpClient);

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${this.authService.getToken()}`
    })
  }

  getAllCompras(userIdentify:string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+`/compra/${userIdentify}`, this.httpOptions);
  }

  deleteCompra(idLista: number) {
    var data = {idLista};
    return this.http.delete(this.apiUrl+`/compra/`+ idLista, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
      .subscribe({
        next: (response: any) => {
          Swal.fire({ 
            position: "center", 
            icon: "success", 
            title: "Item Removido!", 
            showConfirmButton: false, 
            timer: 1500, })
            .then(() => { 
              location.reload(); 
            });
        },
        error: (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Erro ao excluir item!"
          });
        }
    })
  }


  private handleError(error: any) {
    console.log(error);
    return throwError(() => new Error('Erro ao realizar login. Verifique as credenciais e tente novamente.'));
  }
}
