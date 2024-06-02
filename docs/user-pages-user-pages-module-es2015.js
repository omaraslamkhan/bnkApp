(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-pages-user-pages-module"],{

/***/ "6Lnt":
/*!*****************************************************!*\
  !*** ./src/app/user-pages/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "R9St");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "TOj0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var dummyData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dummyData */ "LrwG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");





 // Import Router
let LoginComponent = class LoginComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    login() {
        this.router.navigate(['/dashboard']); // Adjust the URL as necessary
        // Perform authentication logic here
        if (this.exampleInputEmail1 === dummyData__WEBPACK_IMPORTED_MODULE_4__["loginData"].email && this.exampleInputPassword1 === dummyData__WEBPACK_IMPORTED_MODULE_4__["loginData"].password) {
            // Authentication successful, redirect to dashboard or perform other actions
            console.log('Authentication successful');
            // Redirect to dashboard or perform other actions upon successful authentication
        }
        else {
            // Authentication failed, display error message or perform other actions
            console.log('Invalid email or password');
            // Display error message or perform other actions upon failed authentication
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginComponent);



/***/ }),

/***/ "C7eg":
/*!***********************************************************!*\
  !*** ./src/app/user-pages/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "dM7b");
/* harmony import */ var _register_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.scss */ "hgSw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RegisterComponent = class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
};
RegisterComponent.ctorParameters = () => [];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterComponent);



/***/ }),

/***/ "R9St":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-pages/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex align-items-center auth px-0\">\n  <div class=\"row w-100 mx-0\">\n    <div class=\"col-lg-4 mx-auto\">\n      <div class=\"auth-form-light text-left py-5 px-4 px-sm-5\">\n        <div class=\"brand-logo\">\n          <img src=\"assets/images/bnk.png\" style=\"width: 90%!important;\" alt=\"logo\">\n        </div>\n        <h4>Hello! let's get started</h4>\n        <h6 class=\"font-weight-light\">Sign in to continue.</h6>\n        <form class=\"pt-3\">\n          <div class=\"form-group\">\n            <input [ngModelOptions]=\"{ standalone: true }\" [(ngModel)]=\"exampleInputEmail1\" type=\"text\" class=\"form-control form-control-lg\"  placeholder=\"Username\">\n          </div>\n          <div class=\"form-group\">\n            <input [ngModelOptions]=\"{ standalone: true }\" [(ngModel)]=\"exampleInputPassword1\" type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Password\">\n          </div>\n          <div class=\"mt-3\">\n            <a class=\"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn\" (click)=\"login()\">SIGN IN</a>\n          </div>\n      \n      \n        </form>\n      </div>\n    </div>\n  </div>\n</div>  ");

/***/ }),

/***/ "TOj0":
/*!*******************************************************!*\
  !*** ./src/app/user-pages/login/login.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "bN4V":
/*!*************************************************!*\
  !*** ./src/app/user-pages/user-pages.module.ts ***!
  \*************************************************/
/*! exports provided: UserPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPagesModule", function() { return UserPagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "6Lnt");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "C7eg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
];
let UserPagesModule = class UserPagesModule {
};
UserPagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ]
    })
], UserPagesModule);



/***/ }),

/***/ "dM7b":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-pages/register/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex align-items-center auth px-0\">\n  <div class=\"row w-100 mx-0\">\n    <div class=\"col-lg-4 mx-auto\">\n      <div class=\"auth-form-light text-left py-5 px-4 px-sm-5\">\n        <div class=\"brand-logo\">\n          <img src=\"assets/images/logo.svg\" alt=\"logo\">\n        </div>\n        <h4>New here?</h4>\n        <h6 class=\"font-weight-light\">Signing up is easy. It only takes a few steps</h6>\n        <form class=\"pt-3\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control form-control-lg\" id=\"exampleInputUsername1\" placeholder=\"Username\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"email\" class=\"form-control form-control-lg\" id=\"exampleInputEmail1\" placeholder=\"Email\">\n          </div>\n          <div class=\"form-group\">\n            <select class=\"form-control form-control-lg\" id=\"exampleFormControlSelect2\">\n              <option>Country</option>\n              <option>United States of America</option>\n              <option>United Kingdom</option>\n              <option>India</option>\n              <option>Germany</option>\n              <option>Argentina</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control form-control-lg\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n          </div>\n          <div class=\"mb-4\">\n            <div class=\"form-check\">\n              <label class=\"form-check-label text-muted\">\n                <input type=\"checkbox\" class=\"form-check-input\">\n                <i class=\"input-helper\"></i>\n                I agree to all Terms & Conditions\n              </label>\n            </div>\n          </div>\n          <div class=\"mt-3\">\n            <a class=\"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn\" routerLink=\"/dashboard\">SIGN UP</a>\n          </div>\n          <div class=\"text-center mt-4 font-weight-light\">\n            Already have an account? <a routerLink=\"/login\" class=\"text-primary\">Login</a>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "hgSw":
/*!*************************************************************!*\
  !*** ./src/app/user-pages/register/register.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=user-pages-user-pages-module-es2015.js.map