import { Component, Directive } from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import 'rxjs/Rx';
@Component({

 selector: 'Sobe',
 templateUrl: 'app/sobe/sobe.html'
})
export class Sobe {
name:String = "";
sobe: Object[];
constructor(http: Http){
http.get('http://localhost/it255/php/get.php')
.map(res => res.json())
.subscribe(sobe => this.sobe = sobe);
}
}
