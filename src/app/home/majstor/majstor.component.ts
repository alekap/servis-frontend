import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GetpopravkeService } from '../../getpopravke.service';
import { VrsipopravkuService } from '../../vrsipopravku.service';
import { PopravkainfoService } from '../../popravkainfo.service';


@Component({
  selector: 'app-majstor',
  templateUrl: './majstor.component.html',
  styleUrls: ['./majstor.component.css']
})
export class MajstorComponent implements OnInit {


  constructor(private fetchpopravke: GetpopravkeService, private vrsipop: VrsipopravkuService, private popinfo: PopravkainfoService,private Router:Router) { }
    majstor_id=localStorage.getItem('id');
    popravke:{
    id_popravke:number
    reg_br:string
    broj_sasije:string
    godiste: number
    klima:boolean
    id_model:string
    status_popravke:string
    naziv_rm:string
    opis:string
  }[];
  popravkezap:{
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
  }[];
  zapocnipop(event, popravka, flag){
    if(!flag){
       this.vrsipop.putVrsipopravku(this.majstor_id,popravka.id_popravke).subscribe()
       this.popinfo.popravkaInfo = popravka;}
    else{
      this.popinfo.popravkaInfo = popravka;
      console.log('popravka nastavljena')
    }
    this.Router.navigate(['popravka'])

  };

  
  ngOnInit() {
      
    this.fetchpopravke.fetchPopravke(this.majstor_id, 'Zakazano').subscribe(
      data=>{
        this.popravke=data;
      })

    this.fetchpopravke.fetchPopravke(this.majstor_id, 'Radi se', this.majstor_id ).subscribe(
      data=>{
        this.popravkezap=data;
        console.log(this.popravkezap)
        console.log(data)
      })   
  }
}