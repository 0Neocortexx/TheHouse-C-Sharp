import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CaminhoTelaComponent } from "../../caminho-tela/caminho-tela.component";
import { ComprasService } from '../../../services/comprasGroup/compras/compras.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule
],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent {

  userIdentify:string | null = localStorage.getItem('userIdentify');

  router = inject(Router);
  comprasService = inject(ComprasService);

  compras:any[] = [];
  
  ngOnInit() {
    if(this.userIdentify === null) {
      this.router.navigate(['/login']);
    } else {
      this.getAllCompras(this.userIdentify);
    }
  }

  getAllCompras(userIdentify:string) { 
    this.comprasService.getAllCompras(userIdentify)
      .subscribe( (data: any[]) => { 
      this.compras = data; 
      console.log(this.compras);
    }, (error) => { 
      console.error('Erro ao carregar lista de compras:', error); 
    } 
  ); 
}
}
