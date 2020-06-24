import { Component, OnInit, ViewChild } from '@angular/core';
import { PopravkainfoService } from '../../popravkainfo.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { GetdeoService } from '../../getdeo.service';
import { Deo } from '../../deo';
import { ZavrsipopService } from '../../zavrsipop.service';
import { AdddeoService } from '../../adddeo.service';


@Component({
  selector: 'app-popravka',
  templateUrl: './popravka.component.html',
  styleUrls: ['./popravka.component.css']
})
export class PopravkaComponent implements OnInit {

displayedColumns = ['sifra_dela', 'ime_dela', 'cena_dela', 'opis_dela','dodaj_deo'];
dataSource: MatTableDataSource<Deo>;
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
delovi: Deo;
param:string=' '
ugrdelovi:{
  sifra_dela:number
  ime_dela:string
  cena_dela:number
  kolicina:number

}[];

  constructor(private popinfo: PopravkainfoService, private Router:Router, private fetchdeo:GetdeoService, private zavrsipopr: ZavrsipopService, private addeo: AdddeoService) { }
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
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

dodajdeo(event,deo){
  this.addeo.addDeo(deo.sifra_dela,this.popravka.id_popravke).subscribe()
}
  logoutuser(event){
    localStorage.clear();
    this.Router.navigate([''])
  }
  zavrsipop(event, popravka){
       this.zavrsipopr.Zavrsipopravku(popravka.id_popravke).subscribe()
    this.Router.navigate(['home'])

  };


  ngOnInit() {
    if(!this.popinfo.popravkaInfo){
      this.Router.navigate(['home'])
    }
    this.popravka = this.popinfo.popravkaInfo
    console.log(this.popravka)
        this.fetchdeo.fetchDeo(this.param).subscribe(
      data=>{
        this.delovi=data;
        console.log(this.delovi)
        this.dataSource = new MatTableDataSource(this.delovi);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })

  }

}