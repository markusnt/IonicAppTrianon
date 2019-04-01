import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CardapioSubgrupoPage } from './cardapio-subgrupo.page';

const routes: Routes = [
  {
    path: '',
    component: CardapioSubgrupoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardapioSubgrupoPage]
})
export class CardapioSubgrupoPageModule {}
