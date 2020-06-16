import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetmarkaService } from '../../getmarka.service';
import { GetmodelService } from '../../getmodel.service';
import { PutvoziloService} from './putvozilo.service'

@Component({
  selector: 'app-dodajvozilo',
  templateUrl: './dodajvozilo.component.html',
  styleUrls: ['./dodajvozilo.component.css']
})
export class DodajvoziloComponent implements OnInit {
marke:{
  id_marke:string;
  opis:string;
}[];
modeli:{
  id_marke:string;
  id_model:string;
}[];
getmodel(){
  this.Getmodel.fetchModel(this.selectedOption).subscribe(
      data=>{
        this.modeli=data;
      })
}

  refresh(): void {
    window.location.reload();
}
  constructor(private Getmarka: GetmarkaService,private Getmodel:GetmodelService, private putvozilo:PutvoziloService) { }
dodajvozilo(event){
  const target=event.target
 const sasija = target.querySelector('#broj_sasije').value
 const model = target.querySelector('#model').value
 const reg = target.querySelector('#reg_br').value
 const god = target.querySelector('#godiste').value
 const klima = target.querySelector('#klima').value
 this.putvozilo.putVozilo(sasija,model,reg,god,klima,localStorage.getItem('id')).subscribe()
 this.refresh();


  }
  ngOnInit() {

    this.Getmarka.fetchMarka().subscribe(
      data=>{
        this.marke=data;
      })
  }

 selectedOption: string;

}