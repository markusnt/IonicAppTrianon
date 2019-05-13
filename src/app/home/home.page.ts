import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { ModalPage } from '../pages/modal/modal.page';
import { Grupo } from '../models/grupo';
import { Mesa } from '../models/mesa';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  value = 0;
  public grupos: Grupo[]
  public mesas: Mesa[]
  constructor(public navCtrl: NavController,
    private _api: ApiService,
    private modalCtrl: ModalController
  ) {
    this._api.getAllMesa()
    .subscribe(
      (mesas) => {
        this.mesas = mesas;
      }
    );
  }

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
