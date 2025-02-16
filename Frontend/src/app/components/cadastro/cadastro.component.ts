import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { CadastroService } from '../../services/userGroup/cadastro/cadastro.service';
import { ValidaEmailService } from '../../services/userGroup/validarEmail/valida-email.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  service = inject(CadastroService);

  nome: string = '';
  email: string = '';
  senha: string = '';

  validaEmail = inject(ValidaEmailService);

  cadastro() {
    if(this.validaEmail.validaEmail(this.email)) {
        this.service.cadastro(this.nome, this.email, this.senha);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Digite um email válido!"
      });
    }
  }
}
