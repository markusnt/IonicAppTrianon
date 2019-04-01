import { Component } from '@angular/core';
import { Grupo } from '../models/grupo';
import { NavController, ModalController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { ModalPage } from '../pages/modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public grupos: Grupo[]

  value = 0

  constructor(public navCtrl: NavController, 
    private _grupoService: ApiService,
    private modalCtrl: ModalController 
    ){

      // this._grupoService.getAllGrupos()
      //   .subscribe(
      //     (grupos) => {
      //       this.grupos = grupos;
      //     }
      //   );

    }


    selecionaGrupo(grupos: Grupo){
      console.log(grupos.cd_grupo)
      this.navCtrl.navigateForward('upo')
    }

    pushPage() {
      this.navCtrl.navigateForward(`/cardapio/${this.value}`)
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