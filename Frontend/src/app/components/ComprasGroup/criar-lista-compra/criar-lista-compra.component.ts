import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CaminhoTelaComponent } from "../../caminho-tela/caminho-tela.component";

@Component({
  selector: 'app-criar-lista-compra',
  standalone: true,
  imports: [NavbarComponent, CaminhoTelaComponent],
  templateUrl: './criar-lista-compra.component.html',
  styleUrl: './criar-lista-compra.component.css'
})
export class CriarListaCompraComponent {

}
