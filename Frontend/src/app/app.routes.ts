import { Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListaComprasComponent } from './components/ComprasGroup/lista-compras/lista-compras.component';
import { ComprasComponent } from './components/ComprasGroup/compras/compras.component';
import { CriarListaCompraComponent } from './components/ComprasGroup/criar-lista-compra/criar-lista-compra.component';

export const routes: Routes = [
    {path: 'login' , component: LoginComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: '', component: IndexComponent},
    {path: 'dashboard', component: DashboardComponent},
    {
        path: 'compras', 
        component: ComprasComponent,
        title: 'The House - Compras',
    },
    {
        path: 'compras/listacompras',
        component: ListaComprasComponent,
        title: 'The House - Lista de Compras'
    },
    {
        path: 'compras/listacompras/novo',
        component: CriarListaCompraComponent,
        title: 'The House - Lista de Compras - Novo'
    }
];


