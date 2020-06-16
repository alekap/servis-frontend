import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vozilo } from '../../vozilo';
import { GetvoziloService} from '../../getvozilo.service'
import { GetpopravkeService } from '../../getpopravke.service';
@Component({
  selector: 'app-musterija',
  templateUrl: './musterija.component.html',
  styleUrls: ['./musterija.component.css']
})
export class MusterijaComponent implements OnInit {
  flag:boolean = false;
vozila: Vozilo[];
  popravke:{
    reg_br:string
    broj_sasije:string
    godiste: number
    klima:boolean
    id_model:string
    status_popravke:string
    naziv_rm:string
    opis:string
  }[];

  obrisi(event,vozilo){
    
  }

  constructor(private fetchvozilo: GetvoziloService, private fetchpopravke: GetpopravkeService) { }

  ngOnInit() {
        this.fetchpopravke.fetchPopravke(localStorage.getItem('id'),this.flag).subscribe(
      data=>{
        this.popravke=data;
      })
           this.fetchvozilo.fetchVozilo(localStorage.getItem('id')).subscribe(
      data=>{
        this.vozila=data;
      }) 
  }

}