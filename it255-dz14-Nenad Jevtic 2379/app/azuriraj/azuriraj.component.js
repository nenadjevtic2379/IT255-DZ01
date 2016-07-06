System.register(['angular2/core', 'angular2/common', 'angular2/http', 'rxjs/Rx', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, http_1, router_1;
    var UpdateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            UpdateComponent = (function () {
                function UpdateComponent(builder, http, router, params) {
                    var _this = this;
                    this.itemId = +params.get('id');
                    this.http = http;
                    this.router = router;
                    this.registerForm = builder.group({
                        tipSobe: ["", common_1.Validators.none],
                        kvadrata: ["", common_1.Validators.none],
                        brojKreveta: ["", common_1.Validators.none],
                        pogledNa: ["", common_1.Validators.none]
                    });
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.get('http://localhost/it255/php/getID.php?id=' + this.itemId, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this.registerForm.controls['tipSobe'].updateValue(data.room.tipSobe);
                        _this.registerForm.controls['kvadrata'].updateValue(data.room.kvadrata);
                        _this.registerForm.controls['brojKreveta'].updateValue(data.room.brojKreveta);
                        _this.registerForm.controls['pogledNa'].updateValue(data.room.pogledNa);
                    }, function (err) { return console.log(JSON.stringify(err)); });
                }
                UpdateComponent.prototype.onEditRoom = function () {
                    var _this = this;
                    var data = "tipSobe=" + this.registerForm.value.tipSobe + "&kvadrata="
                        + this.registerForm.value.kvadrata + "&brojKreveta=" + this.registerForm.value.brojKreveta
                        + "&pogledNa=" + this.registerForm.value.pogledNa + "&id=" + this.itemId;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    headers.append('token', localStorage.getItem('token'));
                    this.http.post('http://localhost/it255/php/updateroom.php', data, { headers: headers })
                        .map(function (res) { return res; })
                        .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
                        if (_this.postResponse._body.indexOf("error") === -1) {
                            alert("Uspesno ste izmenili informacije o sobi.");
                            _this.router.parent.navigate(['./Sobe']);
                        }
                        else {
                            alert("Greška");
                        }
                    });
                };
                UpdateComponent = __decorate([
                    core_1.Component({
                        selector: 'Azuriraj',
                        templateUrl: 'app/azuriraj/azuriraj.html',
                        directives: [common_1.FORM_DIRECTIVES],
                        viewBindings: [common_1.FORM_BINDINGS]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_1.Router, router_1.RouteParams])
                ], UpdateComponent);
                return UpdateComponent;
            }());
            exports_1("UpdateComponent", UpdateComponent);
        }
    }
});
//# sourceMappingURL=azuriraj.component.js.map