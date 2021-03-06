import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UserinfoService } from './userinfo.service';
import { GetmajstorService } from './getmajstor.service';
import { LoginuserComponent } from './login/loginuser/loginuser.component';
import { GetvoziloService } from './getvozilo.service';
import { TestComponent } from './test/test.component';
import { GetmarkaService } from './getmarka.service';
import { DodajvoziloComponent } from './home/dodajvozilo/dodajvozilo.component';
import { GetmodelService } from './getmodel.service';
import { GetpopravkeService } from './getpopravke.service';
import { PutvoziloService } from './home/dodajvozilo/putvozilo.service';
import { ZakazipopravkuComponent } from './home/zakazipopravku/zakazipopravku.component';
import { PutpopravkaService } from './home/zakazipopravku/putpopravka.service';
import { MusterijaComponent } from './home/musterija/musterija.component';
import { MajstorComponent } from './home/majstor/majstor.component';
import { GetdeoService } from './getdeo.service';
import { DeletevoziloService } from './deletevozilo.service';
import { PopravkaComponent } from './home/popravka/popravka.component';
import { VrsipopravkuService } from './vrsipopravku.service';
import { PopravkainfoService } from './popravkainfo.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatSortModule} from '@angular/material/sort'
import {MatTableModule} from '@angular/material/table'
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ZavrsipopService } from './zavrsipop.service';
import { AdddeoService } from './adddeo.service';
import { GetugrdeoService } from './getugrdeo.service';




@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,BrowserAnimationsModule,MatPaginatorModule, MatSortModule, MatTableModule, MatCheckboxModule, RouterModule.forRoot([
      { path: '', component: LoginuserComponent},
      { path: 'majstor', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'popravka', component: PopravkaComponent },
      { path: 'test', component: TestComponent }
    ])],
  declarations: [ AppComponent, HelloComponent, LoginComponent, HomeComponent, LoginuserComponent, TestComponent, DodajvoziloComponent, ZakazipopravkuComponent, MusterijaComponent, MajstorComponent, PopravkaComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LoginService, UserinfoService, GetmajstorService, GetvoziloService, GetmarkaService, GetmodelService, GetpopravkeService, PutvoziloService, PutpopravkaService, GetdeoService, DeletevoziloService, VrsipopravkuService, PopravkainfoService, ZavrsipopService, AdddeoService, GetugrdeoService]
})
export class AppModule { }
