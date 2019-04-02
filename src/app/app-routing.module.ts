import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cardapio', loadChildren: './pages/cardapio/cardapio.module#CardapioPageModule' },
  { path: 'cardapio-subgrupo/:cd_grupo', loadChildren: './pages/cardapio-subgrupo/cardapio-subgrupo.module#CardapioSubgrupoPageModule' },
  { path: 'cardapio-produto/:cd_subgrupo', loadChildren: './pages/cardapio-produto/cardapio-produto.module#CardapioProdutoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
