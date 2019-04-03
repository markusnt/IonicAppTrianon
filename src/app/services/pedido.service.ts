import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor() { }

  private produtos: Produto[]
  private pedidos= []


 
  getPedido() {
    return this.pedidos;
  }
 
  addProduct(produto) {
    this.pedidos.push(produto);
  }

}
