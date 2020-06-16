import { Injectable } from '@angular/core';

@Injectable()
export class PopravkainfoService {
  popravkaInfo:{
  id_popravke: number;
	status_popravke: string;
	broj_sasije: string;
	sifra_rm: number
  }
  constructor() { }

}