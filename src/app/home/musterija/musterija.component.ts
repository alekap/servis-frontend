import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vozilo } from '../../vozilo';
import { GetvoziloService} from '../../getvozilo.service';
import { GetpopravkeService } from '../../getpopravke.service';
import { DeletevoziloService } from '../../deletevozilo.service';
@Component({
  selector: 'app-musterija',
  templateUrl: './musterija.component.html',
  styleUrls: ['./musterija.component.css']
})
export class MusterijaComponent implements OnInit {
  flag:boolean = false;
  id =false;
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

  refresh(): void {
    window.location.reload();
}

  obrisi(event,vozilo){
    this.deletevoz.deleteVozilo(vozilo.broj_sasije).subscribe();
    this.refresh();

  }

  constructor(private fetchvozilo: GetvoziloService, private fetchpopravke: GetpopravkeService, private deletevoz: DeletevoziloService) { }

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