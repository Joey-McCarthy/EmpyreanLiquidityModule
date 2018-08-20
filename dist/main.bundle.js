webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t\n\t<div class=\"small-3 columns\">\n\t\t<h3>Scenarios</h3><select (change)=\"setScenarioNum($event.target.value)\">\n        <option value=\"0\" selected=\"selected\">Latest</option>\n\t\t<option value=\"3000\">Liquidity Stress Testing - Baseline</option>\n\t\t<option value=\"4000\">IRR/ALM - Growth Balance Sheet</option>\n\t\t<option value=\"6000\">IRR/ALM - Budget</option>\n\t\t<option value=\"3005\">Bank Specific - Moderate</option>\n\t\t<option value=\"3105\">Market Specific - Severe</option>\n\t\t<option value=\"3005\">Bank Specific - Moderate</option>\n\t\t<option value=\"2010\">DFAST Severly Adverse</option>\n\t\t<option value=\"1725\">Shock: Parallel Up500Bps - Flat</option>\n\t\t<option value=\"4125\">Shock: Parallel Up400Bps</option>\n    </select>\n\t<br><h3>Accounts</h3>\n\t\t\n\t\t<ol *ngIf=\"account\">\n\t\t\t<li *ngFor=\"let acct of account\" (click)=\"onSelect(acct)\">{{acct.Name}}</li>\n\t\t\t\n\t\t</ol>\n\n\t</div>\n\t<div class=\"small-9 columns\">\n\t\t<app-detailitem [Inputitem]=\"containeritem\"></app-detailitem>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_data_service__ = __webpack_require__("../../../../../src/app/services/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountComponent = (function () {
    function AccountComponent(dataservice, router) {
        this.dataservice = dataservice;
        this.router = router;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scenarioNum = 0;
        this.dataservice.getAccounts().subscribe(function (res) {
            var obj = JSON.parse(res);
            _this.account = obj;
        }, function (err) {
            console.log("There is an error : " + err);
        });
    };
    AccountComponent.prototype.setScenarioNum = function (val) {
        this.scenarioNum = val;
        console.log("Value : " + this.scenarioNum);
    };
    AccountComponent.prototype.onSelect = function (account) {
        var _this = this;
        if (!localStorage.getItem('currentUser')) {
            this.router.navigate(['/login']);
        }
        localStorage.setItem('currentAccount', account.Name);
        this.dataservice.getResults(account.AccountNum, this.scenarioNum).subscribe(function (res) {
            var obj = JSON.parse(res);
            _this.containeritem = obj;
        }, function (err) {
            console.log("There is an error : " + err);
        });
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/account/account.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account/account.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_data_data_service__["a" /* DataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AccountComponent);

var _a, _b;
//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-container {\r\n    margin: 0 2%;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    box-shadow: 0 0 20px #e3e3e3;\r\n}\r\n\r\n.app-header {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: 60px;\r\n    background-color: black;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.header-text {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    font-size: 30px;\r\n    font-family: 'Forza SSm A', 'Forza SSm B';\r\n    font-weight: bold;\r\n    height: 30px;\r\n    margin-top: -15px;\r\n    top: 50%;\r\n    vertical-align: middle;\r\n}\r\n\r\n.app-footer {\r\n    position: absolute;\r\n    text-align: center;\r\n    background-color: black;\r\n    color: white;\r\n    height: 60px;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.footer-text {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 50%;\r\n    margin-top: -8px;\r\n    height: 16px;\r\n    font-size: 16px;\r\n    font-family: 'Forza SSm A', 'Forza SSm B';\r\n}\r\n\r\n.body-container {\r\n    position: absolute;\r\n    top: 80px;\r\n    bottom: 60px;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.navigationBar {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    bottom: 20px;\r\n    padding: 0 10px;\r\n    width: 200px;\r\n    border-right: 2px solid #e3e3e3;\r\n}\r\n\r\n.navigationBar li {\r\n    margin-top: 0;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.componentContainer {\r\n    position: absolute;\r\n    padding: 10px;\r\n    left: 242px;\r\n    top: 0;\r\n    bottom: 20px;\r\n    right: 0;\r\n}\r\n\r\nnav a {\r\n    text-decoration: none;\r\n}\r\n\r\nnav a:visited, a:link {\r\n    color: #607D8B;\r\n}\r\n\r\nnav a:hover {\r\n    color: #039be5;\r\n    background-color: #CFD8DC;\r\n}\r\n\r\nnav a.active {\r\n    color: #039be5;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Empyrean-Solutions Liquidity';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grapecity_spread_sheets_angular__ = __webpack_require__("../../../../@grapecity/spread-sheets-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grapecity_spread_sheets_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__grapecity_spread_sheets_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directive_autofocus_directive__ = __webpack_require__("../../../../../src/app/directive/autofocus.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_authguard_authguard_service__ = __webpack_require__("../../../../../src/app/services/authguard/authguard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__account_account_component__ = __webpack_require__("../../../../../src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__spread_spread_component__ = __webpack_require__("../../../../../src/app/spread/spread.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__directive_autofocus_directive__["a" /* AutofocusDirective */],
            __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__account_account_component__["a" /* AccountComponent */],
            __WEBPACK_IMPORTED_MODULE_12__spread_spread_component__["a" /* SpreadComponent */],
            __WEBPACK_IMPORTED_MODULE_13__menu_menu_component__["a" /* MenuComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_4__grapecity_spread_sheets_angular__["SpreadSheetsModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_authguard_authguard_service__["a" /* AuthguardService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_account_component__ = __webpack_require__("../../../../../src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authguard_authguard_service__ = __webpack_require__("../../../../../src/app/services/authguard/authguard.service.ts");





var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'index', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__services_authguard_authguard_service__["a" /* AuthguardService */]],
        children: [
            { path: 'account', component: __WEBPACK_IMPORTED_MODULE_1__account_account_component__["a" /* AccountComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__services_authguard_authguard_service__["a" /* AuthguardService */]] },
            { path: '', redirectTo: 'login', pathMatch: 'full' },
        ] },
    // otherwise redirect to home
    { path: '**', redirectTo: '/login' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/directive/autofocus.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutofocusDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutofocusDirective = (function () {
    function AutofocusDirective(elementRef) {
        this.elementRef = elementRef;
        this.el = this.elementRef.nativeElement;
    }
    AutofocusDirective.prototype.ngOnInit = function () {
        this.el.focus();
    };
    return AutofocusDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], AutofocusDirective.prototype, "appAutofocus", void 0);
AutofocusDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appAutofocus]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], AutofocusDirective);

var _a;
//# sourceMappingURL=autofocus.directive.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n\t\n    <ul class=\"menu\">\n      <li class=\"is-active\"><a routerLink=\"/login\" routerLinkActive=\"active\">Logout</a></li>\n      <li class=\"nav-link router-link-active\"><a routerLink=\"./account\" routerLinkActive=\"active\">Accounts</a></li>\n      <li class=\"nav-link router-link-active\"><a target=\"_blank\" href=\"https://wijmoexcel.azurewebsites.net\" routerLinkActive=\"active\">Wijmo Excel Layout</a></li>\n    </ul>\n </nav>\n<hr>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<form [formGroup]=\"rForm\" (ngSubmit)=\"addPost(rForm.value)\">\n\t<div class=\"form-container\">\n\t\t<div class=\"row columns\">\n\t\t\t<h1>Liquidity Login</h1>\n\t\t\t<label>Email <input type=\"email\" #usernameobj appAutofocus\n\t\t\t\tformControlName=\"username\">\n\t\t\t\t<div class=\"alert\"\n\t\t\t\t\t*ngIf=\"!rForm.controls['username'].valid && rForm.controls['username'].touched\">{{\n\t\t\t\t\tusernameAlert }}</div>\n\t\t\t</label> <label>Password <input type=\"password\"\n\t\t\t\tformControlName=\"password\">\n\t\t\t\t<div class=\"alert\"\n\t\t\t\t\t*ngIf=\"!rForm.controls['password'].valid && rForm.controls['password'].touched\">{{\n\t\t\t\t\tpasswordAlert }}</div>\n\t\t\t</label>\n\t\t\t<div class=\"callout warning\" *ngIf=\"loginError\">{{ loginAlert\n\t\t\t\t}}</div>\n\t\t\t<input type=\"submit\" class=\"button expanded\" value=\"Login\"\n\t\t\t\t[disabled]=\"!rForm.valid\">\n\t\t</div>\n\t</div>\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_login_service__ = __webpack_require__("../../../../../src/app/services/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(route, fb, authenticationservice, router) {
        this.route = route;
        this.fb = fb;
        this.authenticationservice = authenticationservice;
        this.router = router;
        this.focusin = true;
        this.usernameAlert = "Please fill username";
        this.passwordAlert = "Please fill password";
        this.loginError = false;
        this.rForm = fb.group({
            'username': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authenticationservice.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/index';
    };
    LoginComponent.prototype.addPost = function (post) {
        var _this = this;
        this.authenticationservice.login(post).subscribe(function (res) {
            if (res.status == true) {
                _this.router.navigate([_this.returnUrl]);
            }
            else {
                _this.loginError = true;
                _this.loginAlert = res.message;
            }
        }, function (err) {
            return err;
        });
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('username'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], LoginComponent.prototype, "el", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_login_login_service__["a" /* LoginService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_login_login_service__["a" /* LoginService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  menu works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/authguard/authguard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthguardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthguardService = (function () {
    function AuthguardService(router) {
        this.router = router;
    }
    AuthguardService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthguardService;
}());
AuthguardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthguardService);

var _a;
//# sourceMappingURL=authguard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.url = 'http://empyreanliquidityapi20180818125654.azurewebsites.net/api/';
    }
    DataService.prototype.getAccounts = function () {
        var user = JSON.parse(localStorage.getItem('currentUser'));
        var getItemUrl = this.url + 'worker/accounts?id=' + user['user_id'];
        return this.http
            .post(getItemUrl, {})
            .map(function (res) {
            //console.log("Response: "+res.json());
            return res.json();
        }, function (err) {
            return err;
        });
    };
    DataService.prototype.getResults = function (id, scenario) {
        var getItemUrl = this.url + 'worker/results?AccountID=' + id + '&Scenario_Num=' + scenario;
        return this.http
            .post(getItemUrl, {})
            .map(function (res) {
            //console.log("Response: " + res.json());
            return res.json();
        }, function (err) {
            return err;
        });
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.url = 'http://empyreanliquidityapi20180818125654.azurewebsites.net/api/';
    }
    LoginService.prototype.login = function (post) {
        var getLoginUrl = this.url + 'Login?email=' + post['username'] + '&password=' + post['password'];
        return this.http
            .post(getLoginUrl, {})
            .map(function (res) {
            var obj = JSON.parse(res.json());
            if (obj.status == true) {
                localStorage.setItem('currentUser', JSON.stringify(obj));
            }
            return obj;
        }, function (err) {
            return err;
        });
    };
    LoginService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/spread/spread.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spread/spread.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<p>\n  {{ this.Title }}\n</p>\n<div id=\"table\" *ngIf=\"Inputitem\">\n    <table>\n\t<thead>\n\t\t<th>StartDate</th>\n\t\t<th>ScenarioNum</th>\n\t\t<th>AvgFace</th>\n\t\t<th>AvgYield</th> \n\t\t<th>Eopface</th>\n\t\t<th>MktVal</th>\n\t\t<th>FairVal</th>\n\t\t<th>IntAccr</th>\n\t\t<th>Eopbook</th>\n\t\t<th>AvgBook</th>\n\t\t<th>IntCf</th>\n\t\t<th>MatuCf</th>\n\t\t<th>AmortCf</th>\n\t\t<th>PrinCf</th>\n\t\t<th>PrepayCf</th>\n\t\t<th>PrepayMtm</th>\n\t\t<th>Dpamort</th>\n\t\t<th>EopaccrNpint</th>\n\t\t<th>MarginalFace</th>\n\t\t<th>MarginalCoupon</th>\n\t\t<th>CmpdIntAcctFlow</th>\n\t\t<th>GainLossCf</th>\n\t\t<th>RealizedGainLoss</th>\n\t\t<th>FvoprInc</th>\n\t\t<th>Fvocinc</th>\n\t\t<th>FvgainLoss</th>\n\t\t<th>ForecastVols</th>\n\t\t<th>NetCf</th>\n\t\t<th>AvgCfday</th>\n\t\t<th>AvgMgday</th>\n\t\t<th>Eoprate</th>\n\t\t<th>PrinCfrate</th>\n\t\t<th>PrepayCfrate</th>\n\t\t<th>Rpface</th>\n\t\t<th>RpfromRate</th>\n\t\t<th>RptoRate</th>\n\t\t<th>CreditLoss</th>\n\t\t<th>CreditRecovery</th>\n\t\t<th>CreditDefInt</th>\n\t\t<th>CreditDefRate</th>\n\t\t<th>CreditLossRate</th>\n\t\t<th>XferRate</th>\n\t\t<th>XferSpread</th>\n\t\t<th>XferMargin</th>\n\t\t<th>XferDrCr</th>\n\t\t<th>Rwa</th>\n\t\t<th>Duration</th>\n\t\t<th>Convexity</th>\n\t\t<th>Notional</th>\n\t\t<th>Bstarget</th>\n\t\t<th>SpreadAdj</th>\n\t\t<th>ChgId</th>\n\t\t<th>MarginalDiscPrem</th>\n\t\t<th>XferRateMg</th>\n\t\t<th>XferSpreadMg</th>\n\t\t<th>Wal</th>\n\t\t<th>IntIncExp</th>\n\t\t<th>Smm</th>\n\t\t<th>EntityNum</th>\n\t</thead>\n\t  <tr *ngFor=\"let x of Inputitem\">\n\t\t<td>{{ x.Start_Date }}</td>\n\t\t<td>{{ x.ScenarioNum }}</td>\n\t\t<td>{{ x.AvgFace }}</td>\n\t\t<td>{{ x.AvgYield }}</td> \n\t\t<td>{{ x.Eopface }}</td>\n\t\t<td>{{ x.MktVal }}</td>\n\t\t<td>{{ x.FairVal }}</td>\n\t\t<td>{{ x.IntAccr }}</td>\n\t\t<td>{{ x.Eopbook }}</td>\n\t\t<td>{{ x.AvgBook }}</td>\n\t\t<td>{{ x.IntCf }}</td>\n\t\t<td>{{ x.MatuCf }}</td>\n\t\t<td>{{ x.AmortCf }}</td>\n\t\t<td>{{ x.PrinCf }}</td>\n\t\t<td>{{ x.PrepayCf }}</td>\n\t\t<td>{{ x.PrepayMtm }}</td>\n\t\t<td>{{ x.Dpamort }}</td>\n\t\t<td>{{ x.EopaccrNpint }}</td>\n\t\t<td>{{ x.MarginalFace }}</td>\n\t\t<td>{{ x.MarginalCoupon }}</td>\n\t\t<td>{{ x.CmpdIntAcctFlow }}</td>\n\t\t<td>{{ x.GainLossCf }}</td>\n\t\t<td>{{ x.RealizedGainLoss }}</td>\n\t\t<td>{{ x.FvoprInc }}</td>\n\t\t<td>{{ x.Fvocinc }}</td>\n\t\t<td>{{ x.FvgainLoss }}</td>\n\t\t<td>{{ x.ForecastVols }}</td>\n\t\t<td>{{ x.NetCf }}</td>\n\t\t<td>{{ x.AvgCfday }}</td>\n\t\t<td>{{ x.AvgMgday }}</td>\n\t\t<td>{{ x.Eoprate }}</td>\n\t\t<td>{{ x.PrinCfrate }}</td>\n\t\t<td>{{ x.PrepayCfrate }}</td>\n\t\t<td>{{ x.Rpface }}</td>\n\t\t<td>{{ x.RpfromRate }}</td>\n\t\t<td>{{ x.RptoRate }}</td>\n\t\t<td>{{ x.CreditLoss }}</td>\n\t\t<td>{{ x.CreditRecovery }}</td>\n\t\t<td>{{ x.CreditDefInt }}</td>\n\t\t<td>{{ x.CreditDefRate }}</td>\n\t\t<td>{{ x.CreditLossRate }}</td>\n\t\t<td>{{ x.XferRate }}</td>\n\t\t<td>{{ x.XferSpread }}</td>\n\t\t<td>{{ x.XferMargin }}</td>\n\t\t<td>{{ x.XferDrCr }}</td>\n\t\t<td>{{ x.Rwa }}</td>\n\t\t<td>{{ x.Duration }}</td>\n\t\t<td>{{ x.Convexity }}</td>\n\t\t<td>{{ x.Notional }}</td>\n\t\t<td>{{ x.Bstarget }}</td>\n\t\t<td>{{ x.SpreadAdj }}</td>\n\t\t<td>{{ x.ChgId }}</td>\n\t\t<td>{{ x.MarginalDiscPrem }}</td>\n\t\t<td>{{ x.XferRateMg }}</td>\n\t\t<td>{{ x.XferSpreadMg }}</td>\n\t\t<td>{{ x.Wal }}</td>\n\t\t<td>{{ x.IntIncExp }}</td>\n\t\t<td>{{ x.Smm }}</td>\n\t\t<td>{{ x.EntityNum }}</td>\n\t  </tr>\n\t</table>\n</div>\n\n-->\n<gc-spread-sheets  [hostStyle]=\"hostStyle\" (workbookInitialized)=\"workbookInit($event)\">\n\n</gc-spread-sheets>"

/***/ }),

/***/ "../../../../../src/app/spread/spread.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpreadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grapecity_spread_sheets__ = __webpack_require__("../../../../@grapecity/spread-sheets/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grapecity_spread_sheets___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__grapecity_spread_sheets__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grapecity_spread_sheets_charts__ = __webpack_require__("../../../../@grapecity/spread-sheets-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grapecity_spread_sheets_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__grapecity_spread_sheets_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpreadComponent = (function () {
    function SpreadComponent() {
        this.hostStyle = {
            width: '1000px',
            height: '700px'
        };
    }
    Object.defineProperty(SpreadComponent.prototype, "Inputitem", {
        set: function (Inputitem) {
            if (Inputitem != null) {
                this._data = Inputitem;
                this.setupWorkBook();
            }
        },
        enumerable: true,
        configurable: true
    });
    SpreadComponent.prototype.workbookInit = function (args) {
        this.self = this;
        this.self.spread = args.spread;
    };
    SpreadComponent.prototype.setupWorkBook = function () {
        // LOAD JSON TEMPLATE FROM DESIGNER
        /*
         * var spreadJSON = '{"version":"11.2.0","sheetCount":2,"sheets":{"Sheet1":{"name":"Sheet1","activeRow":9,"activeCol":5,"colHeaderRowCount":2,"theme":"Office","data":{"dataTable":{"0":{"0":{"value":"Dec-15"}},"1":{"0":{"value":"Jan-16"}},"2":{"0":{"value":"Feb-16","style":{"hAlign":3,"vAlign":0,"themeFont":"Body","imeMode":1}}},"3":{"0":{"value":"Mar-16","style":{"hAlign":3,"vAlign":0,"themeFont":"Body","imeMode":1}}},"4":{"0":{"value":"Apr-16","style":{"hAlign":3,"vAlign":0,"themeFont":"Body","imeMode":1}}},"5":{"0":{"value":"May-16","style":{"hAlign":3,"vAlign":0,"themeFont":"Body","imeMode":1}}},"6":{"0":{"value":"June-16"}},"7":{"0":{"value":"July-16"}},"8":{"0":{"value":"Aug-16"}},"9":{"0":{"value":"Sep-16"}},"10":{"0":{"value":"Oct-16"}},"11":{"0":{"value":"Nov-16"}},"12":{"0":{"value":"Dec-16"}},"13":{"0":{"value":"Jan-17"}},"14":{"0":{"value":"Feb-17"}},"15":{"0":{"value":"Mar-17"}},"16":{"0":{"value":"Apr-17"}},"17":{"0":{"value":"May-17"}},"18":{"0":{"value":"June-17"}},"19":{"0":{"value":"July-17"}},"20":{"0":{"value":"Aug-17"}},"21":{"0":{"value":"Sep-17"}},"22":{"0":{"value":"Oct-17"}},"23":{"0":{"value":"Nov-17"}},"24":{"0":{"value":"Dec-17"}},"25":{"0":{"value":"Jan-18"}},"26":{"0":{"value":"Feb-18"}},"27":{"0":{"value":"Mar-18"}},"28":{"0":{"value":"Apr-18"}},"29":{"0":{"value":"May-18"}},"30":{"0":{"value":"Jun-18"}},"31":{"0":{"value":"July-18"}},"32":{"0":{"value":"Aug-18"}},"33":{"0":{"value":"Sep-18"}},"34":{"0":{"value":"Oct-18"}},"35":{"0":{"value":"Nov-18"}},"36":{"0":{"value":"Dec-18"}}},"defaultDataNode":{"style":{"themeFont":"Body"}}},"rowHeaderData":{"defaultDataNode":{"style":{"themeFont":"Body"}}},"colHeaderData":{"dataTable":{"0":{"0":{"value":"Date"},"1":{"value":"BSTarget"},"2":{"value":"AvgFace"},"3":{"value":"AvgYield"},"4":{"value":"EOPFace"},"5":{"value":"EOPCoupon"},"6":{"value":"MktVal"}}},"defaultDataNode":{"style":{"themeFont":"Body"}}},"rows":[{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true}],"columns":[{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":73,"visible":true,"resizable":true},{"size":78,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true},{"size":62,"visible":true,"resizable":true}],"rowHeaderColInfos":[{"size":40,"visible":true,"resizable":true}],"colHeaderRowInfos":[{"size":20,"visible":true,"resizable":true},{"size":20,"visible":true,"resizable":true}],"selections":{"0":{"row":9,"rowCount":1,"col":5,"colCount":1},"length":1},"sheetAreaOffset":{"left":0,"top":0,"_left":0,"_top":0},"index":0},"Sheet2":{"name":"Sheet2","theme":"Office","data":{"dataTable":{}},"rowHeaderData":{},"colHeaderData":{},"selections":{"0":{"row":0,"rowCount":1,"col":0,"colCount":1},"length":1},"sheetAreaOffset":{"left":0,"top":0,"_left":0,"_top":0},"index":1}}}';
         * this.self.spread.fromJSON(JSON.parse(spreadJSON));
         */
        this.Title = localStorage.getItem('currentAccount');
        this.self.spread.name = this.Title;
        this.sheet = this.self.spread.getActiveSheet();
        var spreadNS = __WEBPACK_IMPORTED_MODULE_1__grapecity_spread_sheets__["Spread"].Sheets;
        // OR SET UP SHEET MANUALLY
        this.sheet.setRowCount(2, spreadNS.SheetArea.colHeader);
        this.sheet.setRowCount(this._data.length);
        // var obj = JSON.parse(this._data);
        // console.log(Object.keys(this._data));
        console.log(this._data);
        this.sheet.autoGenerateColumns = true;
        this.sheet.setDataSource(this._data);
        this.sheet.suspendPaint();
        this.sheet.defaults.rowHeight = 40;
        this.sheet.defaults.colWidth = 110;
        this.sheet.resumePaint();
    };
    SpreadComponent.prototype.ngOnInit = function () {
    };
    return SpreadComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], SpreadComponent.prototype, "Inputitem", null);
SpreadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-detailitem',
        template: __webpack_require__("../../../../../src/app/spread/spread.component.html"),
        styles: [__webpack_require__("../../../../../src/app/spread/spread.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SpreadComponent);

//# sourceMappingURL=spread.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    isDebugMode: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map