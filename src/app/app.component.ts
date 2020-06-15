 import { Component, VERSION } from '@angular/core';
 import { LoginService } from './login/login.service';
 import { user } from './user';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  /**constructor(private Login: LoginService) { }
  lstusers: user[]; 
  ngOnInit() {
    this.Login.fetchUser().subscribe(
        data=>{
          this.lstusers=data;
        }
    );

    

  }*/
}
