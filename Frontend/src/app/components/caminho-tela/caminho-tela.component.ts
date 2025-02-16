import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-caminho-tela',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './caminho-tela.component.html',
  styleUrl: './caminho-tela.component.css'
})
export class CaminhoTelaComponent {
  path: string = window.location.pathname;
}
