import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiServiceRouter } from 'src/app/api.service'
import { PedidoService } from 'src/app/services/pedido.service';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Produto } from 'src/app/models/produto';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-cardapio-produto',
  templateUrl: './cardapio-produto.page.html',
  styleUrls: ['./cardapio-produto.page.scss'],
})
export class CardapioProdutoPage implements OnInit {

  public produtos: Produto[]
  cd_subgrupo = null;
  pedido = []
  items = []

  constructor(public navCtrl: NavController,
    private activateRoute: ActivatedRoute,
    private _api: ApiService,
    private _pedido: PedidoService,
    private router: Router) {
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

    this.pedido = this._pedido.getPedido()
  }

  addToPedido(produto) {
    this._pedido.addProduct(produto);
    console.log(this.pedido)
  }

  removeToPedido(produto) {
    this._pedido.removeProduct(produto);
    console.log(produto)
  }

  openPedido() {
    this.router.navigate(['pedido']);

  }

}
