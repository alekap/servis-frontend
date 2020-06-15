import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetpopravkeService } from '../../getpopravke.service';
import { GetdeoService } from '../../getdeo.service';
import { Deo} from '../../deo'
import {JwPaginationComponent} from 'jw-angular-pagination'

@Component({
  selector: 'app-majstor',
  templateUrl: './majstor.component.html',
  styleUrls: ['./majstor.component.css']
})
export class MajstorComponent implements OnInit {

  
    flag:boolean = true; /* oznacava da li se servis poziva sa majstor naloga ili sa musterija naloga */
    param:string=' '
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
  delovi:{
    sifra_dela:number;
    ime_dela:string;
    cena_dela:number;
    opis_dela:string;
  };
  search(){
    const target=event.target
    this.param=target.querySelector('#search').value
    this.fetchdeo.fetchDeo(this.param).subscribe(
      data=>{
        this.delovi=data;
      })
  }

  constructor(private fetchpopravke: GetpopravkeService,private fetchdeo:GetdeoService) { }

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