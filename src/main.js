"use strict";
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var app_1 = require('./app/app');
if ('prod' === MODE) {
    core_1.enableProdMode();
}
browser_1.bootstrap(app_1.App);
//# sourceMappingURL=main.js.map