import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LoadingComponent } from "./components/loading/loading.component";
import { LoaderService } from './services/loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SweetAlert2Module, LoadingComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'The House';

  isLoading: boolean = false;

  loaderService = inject(LoaderService);

  ngOnInit(): void { 
    this.loaderService.loaderState.subscribe((state: boolean) => {
       this.isLoading = state; 
      }); 
    }
}
