import { Component } from '@angular/core';
import { ChartType, GoogleChartsModule } from 'angular-google-charts';

@Component({
  selector: 'app-gastos-charts',
  standalone: true,
  imports: [GoogleChartsModule],
  templateUrl: './gastos-charts.component.html',
  styleUrl: './gastos-charts.component.css'
})
export class GastosChartsComponent {
  title = 'Browser market shares at a specific website, 2014';
  type: ChartType = ChartType.PieChart; 
  data: any[] = [
    ['Compras', 230.50],
    ['Contas Fixas', 800],
    ['Itens Avulsos', 300],
    ['Investimentos', 253.23],
    ['Gastos imprevistos', 89.90],
    ['Uber', 439.23]
  ];
  columnNames = ['Browser', 'Percentage'];
  options = {    
    textStyle:{color: '#FFFFFF'},
    width: 650,
    height: 250
  };
}
