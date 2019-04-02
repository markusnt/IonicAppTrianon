import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { ModalPage } from '../pages/modal/modal.page';
import { Grupo } from '../models/grupo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  value = 0;
public grupos: Grupo[]
  constructor(public navCtrl: NavController,
    private _api: ApiService,
    private modalCtrl: ModalController
  ) {    this._api.getAllGrupos()
    .subscribe(
      (grupos) => {
        this.grupos = grupos;
      }
    ); }

  pushPage() {
    this.navCtrl.navigateForward(`/cardapio`)
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        custom_id: this.value
      }
    })
    modal.present()
  }


}
