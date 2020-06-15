import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { user } from '../../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
constructor(private Login: LoginService,private Router:Router) { }
 type: string='user';
 lstusers: user; 
 flag: boolean;
  logged: string;
  ngOnInit() {
   this.logged=localStorage.getItem('loggedin')

    if(this.logged){
      this.Router.navigate(['/home'])
      
    }
    console.log(this.logged)

  }
  loginUser(event){
    const target=event.target
    const user = target.querySelector('#username').value
    const pass = target.querySelector('#password').value
        this.Login.auth(user,pass,this.type).subscribe(
        data=>{
          if(!data.toString()){
              this.flag=true
              console.log(this.flag)
          }else{
            this.Router.navigate(['/home'])
            localStorage.setItem('loggedin','true')
            localStorage.setItem('id',data[0].jmbg)
          
          }

        })
    console.log(user,pass)
    
  }
}