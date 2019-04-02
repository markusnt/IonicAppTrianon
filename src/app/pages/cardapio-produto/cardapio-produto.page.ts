import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-cardapio-produto',
  templateUrl: './cardapio-produto.page.html',
  styleUrls: ['./cardapio-produto.page.scss'],
})
export class CardapioProdutoPage implements OnInit {

  public produtos: Produto[]
  cd_subgrupo = null;

  constructor(public navCtrl: NavController,
    private activateRoute: ActivatedRoute,
    private _api: ApiService) { 
    }

  ngOnInit() {

    

    this.cd_subgrupo = this.activateRoute.snapshot.paramMap.get('cd_subgrupo')
    
    this._api.buscarProduto(this.cd_subgrupo)
      .subscribe(
        (produtos) => {
          console.log(this.cd_subgrupo)
          this.produtos = produtos
        }
      )
  }

}
