import { Injectable } from '@angular/core';

@Injectable()
export class PopravkainfoService {
  popravkaInfo:{
    id_majstora: number
    id_popravke:number
    reg_br:string
    broj_sasije:string
    godiste: number
    klima:boolean
    id_model:string
    status_popravke:string
    naziv_rm:string
    opis:string
  }
  constructor() { }

}