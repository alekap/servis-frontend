import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import { GetmajstorService } from '../getmajstor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fetch: GetmajstorService,private Router:Router, ) { }
  user: user;
  loggedin: string;
  type: string;
  
  logoutuser(event){
    localStorage.clear();
    this.Router.navigate([''])
  }

  ngOnInit() {

      
    this.loggedin=localStorage.getItem('loggedin')
    if(!this.loggedin){
       this.Router.navigate([''])
    }
    this.type=(localStorage.getItem('majstor'));
    if(this.type){
      this.fetch.fetchMajstor(localStorage.getItem('id'),'majstor').subscribe(
      data=>{
        this.user=data;

      })
    }else{
    
    this.fetch.fetchMajstor(localStorage.getItem('id'),'musterija').subscribe(
      data=>{
        this.user=data;
      })
    
      }



  }
 

}