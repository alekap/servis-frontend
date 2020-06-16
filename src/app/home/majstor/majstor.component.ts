import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetpopravkeService } from '../../getpopravke.service';
import { GetdeoService } from '../../getdeo.service';
import { Deo} from '../../deo';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { VrsipopravkuService } from '../../vrsipopravku.service'
import { PopravkainfoService } from '../../popravkainfo.service'

@Component({
  selector: 'app-majstor',
  templateUrl: './majstor.component.html',
  styleUrls: ['./majstor.component.css']
})
export class MajstorComponent implements OnInit {

  
    flag:boolean = true; /* oznacava da li se servis poziva sa majstor naloga ili sa musterija naloga */
    param:string=' '
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
  delovi:{
    sifra_dela:number;
    ime_dela:string;
    cena_dela:number;
    opis_dela:string;
  };
  zapocnipop(event, popravka){
    console.log(popravka)
       this.vrsipop.putVrsipopravku(localStorage.getItem('id'),popravka.id_popravke).subscribe(
       data=>{
       this.popinfo.popravkaInfo=data;
       console.log(this.popinfo.popravkaInfo)
      }
    )

  };

  search(event){
    const target=event.target
    this.param=target.querySelector('#search').value
    this.fetchdeo.fetchDeo(this.param).subscribe(
      data=>{
        this.delovi=data;
      })
  }

  constructor(private fetchpopravke: GetpopravkeService,private fetchdeo:GetdeoService, private vrsipop: VrsipopravkuService, private popinfo: PopravkainfoService) { }

  ngOnInit() {

    this.fetchdeo.fetchDeo(this.param).subscribe(
      data=>{
        this.delovi=data;
      })

    this.fetchpopravke.fetchPopravke(localStorage.getItem('id'),this.flag).subscribe(
      data=>{
        this.popravke=data;
      })

      
  }
    

    pageOfItems: Array<any>;
        onChangePage(event) {
        // update current page of items
        this.pageOfItems = event;
    }
}