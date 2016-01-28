"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var Observable_1 = require('rxjs/Observable');
var App = (function () {
    function App() {
        this.ref = new Firebase('https://publicdata-cryptocurrency.firebaseio.com/');
    }
    App.prototype.ngOnInit = function () {
        var _this = this;
        console.log('App loaded!!');
        var sync = new Observable_1.Observable(function (o) {
            _this.ref.on('value', function (snapshot) {
                o.next(snapshot.val());
            });
        }).subscribe(function (r) { return _this.rates = r; });
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            styles: [require('./app.less')],
            templateUrl: './app/app.html'
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map