import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'mesas', loadChildren: './mesas/mesas.module#MesasPageModule' },
  { path: 'grupos', loadChildren: './pedido/grupos/grupos.module#GruposPageModule' },
  { path: 'subgrupos', loadChildren: './pedido/subgrupos/subgrupos.module#SubgruposPageModule' },
  { path: 'produtos', loadChildren: './pedido/produtos/produtos.module#ProdutosPageModule' },
  { path: 'env-pedido', loadChildren: './env-pedido/env-pedido.module#EnvPedidoPageModule' },
  { path: 'pre-conta', loadChildren: './pre-conta/pre-conta.module#PreContaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
