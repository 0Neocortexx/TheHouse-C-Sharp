import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/userGroup/authentication/auth.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CaminhoTelaComponent } from "../caminho-tela/caminho-tela.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    CaminhoTelaComponent
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  authservice = inject(AuthService);

  userName: string | null = null;

  ngOnInit() {
    this.userName = this.authservice.getUserName();  
  }

  isLoggedIn(): boolean { 
    return this.authservice.IsLoggedIn(); 
  }

  logout() { 
    this.authservice.logout(); 
    this.userName = null; 
  }
}
