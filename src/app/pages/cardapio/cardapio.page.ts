import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Grupo } from 'src/app/models/grupo';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})
export class CardapioPage implements OnInit {

  passedId = null;
  public grupos: Grupo[]
  

  constructor(private activateRoute: ActivatedRoute,
    private navCtrl: NavController,
    private _api: ApiService) {
  }

  pushPage(grupos: Grupo){
    console.log(grupos.cd_grupo)
    this.navCtrl.navigateForward(`cardapio-subgrupo/${this.passedId}`)
  }

  ngOnInit() {
    
    this._api.getAllGrupos()
      .subscribe(
        (grupos) => {
          this.grupos = grupos;
        }
      );
    }

}
