import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { SubGrupo } from 'src/app/models/subgrupo';
import { Grupo } from 'src/app/models/grupo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cardapio-subgrupo',
  templateUrl: './cardapio-subgrupo.page.html',
  styleUrls: ['./cardapio-subgrupo.page.scss'],
})
export class CardapioSubgrupoPage implements OnInit {

  passedId = null;
  public subgrupos: SubGrupo[]
  public grupo: Grupo[]
  cd_grupo =  null;
  


  constructor(public navCtrl: NavController,
    private activateRoute: ActivatedRoute,
    private _api: ApiService) {
      }


  ngOnInit() {
    

    this.cd_grupo = this.activateRoute.snapshot.paramMap.get('cd_grupo')

    this._api.buscarSubGrupo(this.cd_grupo)
      .subscribe(
        (subgrupos) => {
          console.log(this.cd_grupo)
          this.subgrupos = subgrupos;
        }
      )

  }

}
