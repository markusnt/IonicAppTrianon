import { Injectable } from '@angular/core';
import { Grupo } from '../models/grupo';
import { HttpClient } from '@angular/common/http';
import { Http } from "@angular/http";
import { SubGrupo } from '../models/subgrupo';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data:any
  // public grupo = new BehaviorSubject(Grupo)

  constructor(private _http: HttpClient) { 

  }

  public getAllGrupos(): Observable<any> {
    return this._http.get('http://192.168.1.179:1337/grupo')
  }

  public getAllSubGrupos(): Observable<any> {
    return this._http.get('http://192.168.1.179:1337/subgrupo')
  }

  public getSubGrupo(): Observable<any> {
    return this._http.get(`http://192.168.1.179:1337/grupoW/27`)
  }

  public getProduto(): Observable<any> {
    return this._http.get(`http://192.168.1.179:1337/subgrupoW/119`)
  }

  // public listaGrupoWsub(cd_grupo: number) {
  //   if(this.data) {
  //     return Promise.resolve(this.data)
  //   }

  // return new Promise(resolve => {
  //   this._http.get('http://192.168.1.179:1337/grupoW/${cd_grupo}').toPromise().then
  // })

  }

