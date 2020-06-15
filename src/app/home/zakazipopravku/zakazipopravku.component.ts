import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vozilo } from '../../vozilo';
import { GetvoziloService} from '../../getvozilo.service'
import { PutpopravkaService} from './putpopravka.service'
@Component({
  selector: 'app-zakazipopravku',
  templateUrl: './zakazipopravku.component.html',
  styleUrls: ['./zakazipopravku.component.css']
})
export class ZakazipopravkuComponent implements OnInit {

  constructor(private fetchvozilo: GetvoziloService, private putpopravka: PutpopravkaService) { }
  vozila: Vozilo[];
  zakazipopravku(event){
    const target=event.target
     const sasija = target.querySelector('#sasija').value
     const rm = target.querySelector('#rm').value
     const opis = target.querySelector('#opis').value
    this.putpopravka.putPopravku(sasija,rm,opis).subscribe()
  }
  ngOnInit() {
    this.fetchvozilo.fetchVozilo(localStorage.getItem('id')).subscribe(
      data=>{
        this.vozila=data;
      })
  }

}