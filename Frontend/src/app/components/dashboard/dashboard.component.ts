import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { GoogleChartsModule, ChartType } from 'angular-google-charts';
import { GastosChartsComponent } from "../graficos/gastos-charts/gastos-charts.component";
import { EntretenimentosComponent } from "../graficos/entretenimentos/entretenimentos.component";
import { GastosYearTimeLineComponent } from "../graficos/gastos-year-time-line/gastos-year-time-line.component";
import { AuthService } from '../../services/userGroup/authentication/auth.service';
import { Router } from '@angular/router';
import { CalendarioComponent } from "../graficos/calendario/calendario.component";
import { FooterComponent } from "../footer/footer.component";
import { CaminhoTelaComponent } from '../caminho-tela/caminho-tela.component';

@Component({
  selector: 'app-dashborad',
  standalone: true,
  imports: [
    NavbarComponent,
    GoogleChartsModule,
    GastosChartsComponent,
    EntretenimentosComponent,
    CalendarioComponent,
    GastosYearTimeLineComponent,
    FooterComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  auth = inject(AuthService)
  router = inject(Router);
  
  ngOnInit() {
    if(this.auth.IsLoggedIn() == false) {
      this.router.navigate(['/login']);
    }
  }
}
