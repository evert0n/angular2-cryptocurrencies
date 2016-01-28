webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var core_1 = __webpack_require__(6);
	var browser_1 = __webpack_require__(137);
	var app_1 = __webpack_require__(485);
	if (false) {
	    core_1.enableProdMode();
	}
	browser_1.bootstrap(app_1.App);


/***/ },

/***/ 289:
/***/ function(module, exports) {

	module.exports = ".royalblue {\n  color: royalblue;\n}\n.red {\n  color: red;\n}\n.green {\n  color: green;\n}\n"

/***/ },

/***/ 485:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var Observable_1 = __webpack_require__(2);
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
	                //console.log(snapshot.val());
	            });
	        }).subscribe(function (r) { return _this.rates = r; });
	        // let timer = new Observable(o => {
	        //   setInterval(function() {
	        //     let time = new Date();
	        //     o.next(time);
	        //     // console.log(time);
	        //   }, 1000);
	        // }).subscribe(t => this.time = t);
	    };
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            styles: [__webpack_require__(289)],
	            templateUrl: './app/app.html'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], App);
	    return App;
	})();
	exports.App = App;


/***/ }

});
//# sourceMappingURL=main.map