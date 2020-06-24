import { Component, OnInit } from '@angular/core';
import { PopravkainfoService } from '../../popravkainfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popravka',
  templateUrl: './popravka.component.html',
  styleUrls: ['./popravka.component.css']
})
export class PopravkaComponent implements OnInit {

  constructor(private popinfo: PopravkainfoService, private Router:Router) { }
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