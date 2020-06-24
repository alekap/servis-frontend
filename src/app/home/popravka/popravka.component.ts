import { Component, OnInit, ViewChild } from '@angular/core';
import { PopravkainfoService } from '../../popravkainfo.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { Deo } from '../../deo';

@Component({
  selector: 'app-popravka',
  templateUrl: './popravka.component.html',
  styleUrls: ['./popravka.component.css']
})
export class PopravkaComponent implements OnInit {

displayedColumns = ['sifra_dela', 'ime_dela', 'cena_dela', 'opis_dela','dodaj_deo'];
dataSource: MatTableDataSource<deo>;
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

  constructor(private popinfo: PopravkainfoService, private Router:Router, private deo: Deo) { }
 popravka:{
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
  };


  ngOnInit() {
    if(!this.popinfo.popravkaInfo){
      this.Router.navigate(['home'])
    }
    this.popravka = this.popinfo.popravkaInfo
    console.log(this.popravka)
  }

}