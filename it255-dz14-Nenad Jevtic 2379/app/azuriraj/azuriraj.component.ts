import { Component, Directive } from 'angular2/core';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS, RouteParams} from 'angular2/router'

@Component({
  selector: 'Azuriraj',
  templateUrl: 'app/azuriraj/azuriraj.html',
  directives: [FORM_DIRECTIVES],
  viewBindings: [FORM_BINDINGS]
})
export class UpdateComponent {

  registerForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;
  itemId: Number;
  data: Object[];
  constructor(builder: FormBuilder, http: Http,  router: Router, params: RouteParams) {
      this.itemId = +params.get('id');
    this.http = http;
	this.router = router;
    this.registerForm = builder.group({
     tipSobe: ["", Validators.none],
     kvadrata: ["", Validators.none],
     brojKreveta: ["", Validators.none],
     pogledNa: ["", Validators.none]
   });
   var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.get('http://localhost/it255/php/getID.php?id='+this.itemId, { headers: headers })
      .map(res => res.json())
      .subscribe(data => {
        (<Control>this.registerForm.controls['tipSobe']).updateValue(data.room.tipSobe);
        (<Control>this.registerForm.controls['kvadrata']).updateValue(data.room.kvadrata);
        (<Control>this.registerForm.controls['brojKreveta']).updateValue(data.room.brojKreveta);
        (<Control>this.registerForm.controls['pogledNa']).updateValue(data.room.pogledNa);
      },
      err => console.log(JSON.stringify(err)))
  }

  onEditRoom():void {
	var data ="tipSobe=" + this.registerForm.value.tipSobe + "&kvadrata="
  + this.registerForm.value.kvadrata + "&brojKreveta=" + this.registerForm.value.brojKreveta
  + "&pogledNa=" + this.registerForm.value.pogledNa + "&id="+this.itemId;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
  headers.append('token', localStorage.getItem('token'));
	this.http.post('http://localhost/it255/php/updateroom.php',data, {headers:headers})
    .map(res => res)
    .subscribe( data => this.postResponse = data,
        err => alert(JSON.stringify(err)),
        () => {
            if(this.postResponse._body.indexOf("error") === -1){
                alert("Uspesno ste izmenili informacije o sobi.");
                this.router.parent.navigate(['./Sobe']);
            }else{
                alert("Greška");
            }
        }
    );

}



}
