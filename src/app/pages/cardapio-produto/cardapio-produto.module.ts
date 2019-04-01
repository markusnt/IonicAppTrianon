import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CardapioProdutoPage } from './cardapio-produto.page';

const routes: Routes = [
  {
    path: '',
    component: CardapioProdutoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardapioProdutoPage]
})
export class CardapioProdutoPageModule {}
