import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GetpopravkeService } from '../../getpopravke.service';
import { GetdeoService } from '../../getdeo.service';
import { Deo} from '../../deo';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { VrsipopravkuService } from '../../vrsipopravku.service'
import { PopravkainfoService } from '../../popravkainfo.service'
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-majstor',
  templateUrl: './majstor.component.html',
  styleUrls: ['./majstor.component.css']
})
export class MajstorComponent implements OnInit {
displayedColumns = ['sifra', 'ime', 'cena', 'opis'];
dataSource;


  constructor(private fetchpopravke: GetpopravkeService,private fetchdeo:GetdeoService, private vrsipop: VrsipopravkuService, private popinfo: PopravkainfoService,private Router:Router) { }
    param:string=' '
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
  delovi: deo;
  zapocnipop(event, popravka, flag){
    if(!flag){
       this.vrsipop.putVrsipopravku(this.majstor_id,popravka.id_popravke).subscribe(
       data=>{
       this.popinfo.popravkaInfo = data;
      }
    )}
    else{
      this.popinfo.popravkainfo = popravka;
      console.log('popravka nastavljena')
    }
    this.Router.navigate(['popravka'])

  };

  search(event){
    const target=event.target
    this.param=target.querySelector('#search').value
    this.fetchdeo.fetchDeo(this.param).subscribe(
      data=>{
        this.delovi=data;
      })
  }
  


  ngOnInit() {

    this.fetchdeo.fetchDeo(this.param).subscribe(
      data=>{
        this.delovi=data;
      })
      this.dataSource = new MatTableDataSource(this.delovi);

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
    

    pageOfItems: Array<any>;
        onChangePage(event) {
        // update current page of items
        this.pageOfItems = event;
    }
}
export interface deo {
  sifra: number;
  ime: string;
  cena: number;
  opis: string;
}