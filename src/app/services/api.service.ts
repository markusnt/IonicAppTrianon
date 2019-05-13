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

  url = 'http://192.168.1.179:1337/'
  data:any
  // public grupo = new BehaviorSubject(Grupo)

  constructor(private _http: HttpClient) { 

  }

  buscarGrupos(): Observable<any> {
    return this._http.get(`${this.url}grupo`)
  }

  buscarMesa(): Observable<any> {
    return this._http.get(`${this.url}mesa`)
  }

  buscarSubGrupo(cd_grupo): Observable<any> {
    return this._http.get(`${this.url}subgrupoS/${cd_grupo}`)
  }

  buscarProduto(cd_subgrupo): Observable<any> {
    return this._http.get(`${this.url}produtoS/${cd_subgrupo}`)
  }

  public getAllGrupos(): Observable<any> {
    return this._http.get('http://192.168.1.179:1337/grupo')
  }

  public getAllMesa(): Observable<any> {
    return this._http.get('http://192.168.1.179:1337/mesa')
  }

  public getAllSubGrupos(): Observable<any> {
    return this._http.get('http://192.168.1.179:1337/subgrupo')
  }

  public getSubGrupo(cd_grupo: number): Observable<any> {
    return this._http.get(`http://192.168.1.179:1337/subgrupoS/28`)
  }

  public getProduto(): Observable<any> {
    return this._http.get(`http://192.168.1.179:1337/produtoS/119`)
  }

  }

