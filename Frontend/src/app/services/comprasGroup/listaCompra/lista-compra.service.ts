import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../userGroup/authentication/auth.service';
import { Observable, throwError, catchError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ListaCompraService {

  private apiUrl = 'http://localhost:5043/api';

  authService = inject(AuthService);

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${this.authService.getToken()}`
    })
  }

  http = inject(HttpClient);

  getAllListaCompra(userIdentify:string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+`/listacompra/${userIdentify}`, this.httpOptions);
  }

  deleteListaCompra(idLista: number) {
    var data = {idLista};
    return this.http.delete(this.apiUrl+`/listacompra/`+ idLista, this.httpOptions)
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
