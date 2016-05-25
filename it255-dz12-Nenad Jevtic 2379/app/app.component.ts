import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES } from 'angular2/router';
import { MainPageComponent } from './mainpage/mainpage.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { FormComponent } from './form/form.component';
import { FormComponent2 } from './form2/form2.component';
import {Sobe} from './sobe/sobe.component';
import {dodajSobu} from './dodaj/dodaj.component';

@Component({
  selector: 'moja-aplikacija',
	templateUrl: 'app/router.html',
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path:'/',    name: 'MainPage', component: MainPageComponent, useAsDefault: true},
  {path:'/aboutus', name:'AboutUs', component: AboutUsComponent},
  {path:'/form', name:'FormPage', component: FormComponent},
  {path:'/form2', name:'FormPage2', component: FormComponent2},
  {path:'/sobe', name: 'Sobe', component: Sobe},
  {path:'/dodaj', name: 'Dodaj', component: dodajSobu},

])

export class AppComponent {

  router: Router;
  isAuth: String;
  constructor(router: Router) {
  this.router = router;
   router.subscribe((val) => {
   if(localStorage.getItem('token') !== null){
  this.isAuth = "yes";
   }else{
   this.isAuth = "no";
   }
   });
  }
  onLogout(): void {
  localStorage.removeItem("token");
  this.router.navigate(['./MainPage']);
  if(localStorage.getItem('token') !== null){
  this.isAuth = "yes";
  }else{
  this.isAuth = "no";
  }
  }


}
