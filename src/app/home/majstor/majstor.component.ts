import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GetpopravkeService } from '../../getpopravke.service';
import { GetdeoService } from '../../getdeo.service';
import { Deo} from '../../deo';
import { VrsipopravkuService } from '../../vrsipopravku.service'
import { PopravkainfoService } from '../../popravkainfo.service'
import {MatPaginator} from '@angular/material/paginator'
import {MatSort} from '@angular/material/sort'
import {MatTableDataSource} from '@angular/material/table'


@Component({
  selector: 'app-majstor',
  templateUrl: './majstor.component.html',
  styleUrls: ['./majstor.component.css']
})
export class MajstorComponent implements OnInit {
displayedColumns = ['sifra_dela', 'ime_dela', 'cena_dela', 'opis_dela','dodaj_deo'];
dataSource: MatTableDataSource<deo>;
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;


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
      this.popinfo.popravkaInfo = popravka;
      console.log('popravka nastavljena')
    }
    this.Router.navigate(['popravka'])

  };

    applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

dodajdeo(event,deo){
  console.log(deo)
}
  
  ngOnInit() {

    this.fetchdeo.fetchDeo(this.param).subscribe(
      data=>{
        this.delovi=data;
        this.dataSource = new MatTableDataSource(this.delovi);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
      
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
export interface deo {
  sifra_dela: number;
  ime_dela: string;
  cena_dela: number;
  opis_dela: string;
}