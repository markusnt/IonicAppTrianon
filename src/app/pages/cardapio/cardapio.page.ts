import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})
export class CardapioPage implements OnInit {

  passedId= null;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {

    this.passedId = this.activateRoute.snapshot.paramMap.get('myid')

  }

}
