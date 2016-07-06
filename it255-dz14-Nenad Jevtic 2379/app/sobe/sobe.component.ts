import { Component, Directive } from 'angular2/core';
import {Http, HTTP_PROVIDERS , Headers} from 'angular2/http';
import {Router} from 'angular2/router';
import 'rxjs/Rx';
import {FORM_DIRECTIVES , FORM_BINDINGS} from 'angular2/common';
import {SearchPipe} from '../pipe/search';
import {SearchPipe2} from '../pipe/search2';


@Component({

 selector: 'Sobe',
 templateUrl: 'app/sobe/sobe.html',

 pipes: [SearchPipe, SearchPipe2],

})


export class Sobe {

  http: Http;
  router: Router;
  brojKreveta: String = "";
  kvadrata: String="";
  postResponse: String;

  rooms: Object[];





   constructor( http: Http, router: Router) {
  this.http = http;
  this.router = router;
  var headers = new Headers();

  http.get('http://localhost/it255/php/get.php',{headers:headers})
  .map(res => res.json())
  .subscribe(rooms => {this.rooms = rooms.rooms;
    setInterval(function(){
			$('table').DataTable();
			},200);
  });

}

public removeBook(item: Number) {

  console.log("Remove: ", item);
 var headers = new Headers();
 headers.append('Content-Type', 'application/x-www-form-urlencoded');
 headers.append('token', localStorage.getItem('token'));
 this.http.get('http://localhost/it255/php/deleteroom.php?id='+item,{headers:headers})  .subscribe( data => this.postResponse = data);
location.reload();
}

public editItem(item: any){

    	this.router.parent.navigate(['./Azuriraj',{id: item.id}])
    }
}
