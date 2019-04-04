import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {

  private pedido = []
  selectedItems = [];
 
  total = 0;

  constructor(private _pedido: PedidoService, private modalCtrl: ModalController ) { }

  

  ngOnInit() {

    let items = this._pedido.getPedido();
    let selected = {}
    for (let obj of items){
      if(selected[obj.cd_produto]) {
        selected[obj.cd_produto].count++
      } else {
        selected[obj.cd_produto] = {...obj, count: 1}
      }
    }

    this.selectedItems = Object.keys(selected).map(key => selected[key])
    // this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.pr_produto))
  }

}
