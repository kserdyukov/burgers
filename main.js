(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n    overflow: hidden;\r\n    background-image: url('main_bg.png');\r\n    background-position: top center;\r\n}\r\n\r\n.header {\r\n    padding: 40px 0;\r\n}\r\n\r\n.header .container {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.logo img {\r\n    vertical-align: bottom;\r\n}\r\n\r\n.menu {\r\n    margin-left: 191px;\r\n}\r\n\r\n.menu-list {\r\n    list-style: none;\r\n    display: flex;\r\n}\r\n\r\n.menu-item {\r\n    margin-right: 80px;\r\n}\r\n\r\n.menu-item a {\r\n    font-size: 18px;\r\n    color: #FFFFFF;\r\n    text-decoration: none;\r\n}\r\n\r\n.menu-item a:hover {\r\n    border-bottom: 2px solid white;\r\n}\r\n\r\n.currency {\r\n    border: 1px solid #FFFFFF;\r\n    border-radius: 5px;\r\n    width: 45px;\r\n    height: 45px;\r\n    padding: 6px;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    line-height: 32px;\r\n    margin-left: auto;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.main-content {\r\n    padding-top: 103px;\r\n    padding-bottom: 199px;\r\n}\r\n\r\n.main-content .container {\r\n    position: relative;\r\n}\r\n\r\n.main-info {\r\n    max-width: 608px;\r\n}\r\n\r\n.main-small-info {\r\n    background: #D3320F;\r\n    border-radius: 100px;\r\n    padding: 12px 16px;\r\n    display: inline-block;\r\n    font-size: 18px;\r\n}\r\n\r\n.main-title {\r\n    font-family: 'Merriweather', sans-serif;\r\n    font-size: 120px;\r\n    line-height: 130%;\r\n    letter-spacing: 0.03em;\r\n    text-transform: uppercase;\r\n    margin-bottom: 56px;\r\n}\r\n\r\n.main-text {\r\n    font-size: 24px;\r\n    line-height: 29px;\r\n    margin-bottom: 56px;\r\n}\r\n\r\n.main-image {\r\n    position: absolute;\r\n    top: -123px;\r\n    left: calc(100% - 991px);\r\n}\r\n\r\n.why {\r\n    background-image: url('whybg.png');\r\n    background-position: top center;\r\n    background-size: initial;\r\n    padding-bottom: 180px;\r\n}\r\n\r\n.why-items {\r\n    margin-top: 60px;\r\n    display: grid;\r\n    gap: 100px;\r\n    grid-template-columns: repeat(3, 312px);\r\n    justify-content: center;\r\n}\r\n\r\n.why-item {\r\n    text-align: center;\r\n}\r\n\r\n.why-item-title {\r\n    font-size: 24px;\r\n    line-height: normal;\r\n    padding: 24px 0;\r\n}\r\n\r\n.why-item-text {\r\n    font-size: 16px;\r\n    line-height: 140%; /* 22.4px */\r\n}\r\n\r\n.products {\r\n    background-image: url('burgers_bg.png');\r\n    background-position: top center;\r\n    background-size: 1400px;\r\n    padding-bottom: 180px;\r\n}\r\n\r\n.products-items {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 384px);\r\n    gap: 24px;\r\n    margin-top: 60px;\r\n}\r\n\r\n.products-item {\r\n    padding: 30px;\r\n    background: #211A16;\r\n    border: 1px solid #353535;\r\n    border-radius: 16px;\r\n}\r\n\r\n.products-item-image {\r\n    height: 250px;\r\n}\r\n\r\n.products-item-image img {\r\n    max-width: 100%;\r\n}\r\n\r\n.products-item-title {\r\n    font-size: 24px;\r\n    line-height: normal;\r\n    padding: 24px 0;\r\n}\r\n\r\n.products-item-text {\r\n    font-size: 16px;\r\n    line-height: 140%;\r\n    margin-bottom: 24px;\r\n}\r\n\r\n.products-item-extra {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.products-item-price {\r\n    font-size: 32px;\r\n    line-height: 39px;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.products-item-weight {\r\n    font-size: 16px;\r\n    line-height: 18px;\r\n    color: #757575;\r\n}\r\n\r\n.button.product-button {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 182px;\r\n    height: 62px;\r\n}\r\n\r\n.button.product-button span:first-child {\r\n    margin-right: 10px;\r\n}\r\n\r\n.order {\r\n    background-image: url('order_bg.png');\r\n    background-position: top center;\r\n    background-repeat: no-repeat;\r\n    padding-bottom: 180px;\r\n    overflow: hidden;\r\n}\r\n\r\n.order .container {\r\n    position: relative;\r\n}\r\n\r\n.order-image {\r\n    position: absolute;\r\n    top: 0;\r\n    right: calc(100% - 764px);\r\n    z-index: -1;\r\n}\r\n\r\n.order-form {\r\n    background: #211A16;\r\n    border: 1px solid #353535;\r\n    border-radius: 16px;\r\n    margin-top: 60px;\r\n    max-width: 426px;\r\n    box-sizing: border-box;\r\n    padding: 60px 40px;\r\n    margin-left: 674px;\r\n}\r\n\r\n.order-form-text {\r\n    font-size: 24px;\r\n    line-height: 29px;\r\n    text-align: center;\r\n}\r\n\r\n.order-form-inputs {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 40px;\r\n}\r\n\r\n.order-form-input {\r\n    background: linear-gradient(95.61deg, #DA8023 0%, #E2B438 100%);\r\n    width: 344px;\r\n    height: 62px;\r\n    border-radius: 8px;\r\n    margin-bottom: 20px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.order-form-input.error {\r\n    background: red;\r\n}\r\n\r\n.order-form-input input {\r\n    padding: 20px 10px;\r\n    background: #211A16;\r\n    border-radius: 8px;\r\n    width: 342px;\r\n    height: 60px;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    border: 1px solid transparent;\r\n    color: white;\r\n}\r\n\r\n.order-form-inputs .button {\r\n    width: 344px;\r\n    height: 62px;\r\n}\r\n\r\n.footer {\r\n    padding: 60px 0;\r\n}\r\n\r\n.footer .container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.rights {\r\n    font-size: 16px;\r\n    line-height: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIscUNBQXNEO0lBQ3RELGdDQUFnQztDQUNuQzs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSx1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksK0JBQStCO0NBQ2xDOztBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDBCQUFrQjtPQUFsQix1QkFBa0I7WUFBbEIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixnQkFBZ0I7Q0FDbkI7O0FBQ0Q7SUFDSSx3Q0FBd0M7SUFDeEMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix5QkFBeUI7Q0FDNUI7O0FBRUQ7SUFDSSxtQ0FBb0Q7SUFDcEQsZ0NBQWdDO0lBQ2hDLHlCQUF5QjtJQUN6QixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLFdBQVc7SUFDWCx3Q0FBd0M7SUFDeEMsd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCLENBQUMsWUFBWTtDQUNsQzs7QUFFRDtJQUNJLHdDQUF5RDtJQUN6RCxnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLGNBQWM7SUFDZCx3Q0FBd0M7SUFDeEMsVUFBVTtJQUNWLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksY0FBYztJQUNkLCtCQUErQjtDQUNsQzs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxzQ0FBdUQ7SUFDdkQsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLE9BQU87SUFDUCwwQkFBMEI7SUFDMUIsWUFBWTtDQUNmOztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxnRUFBZ0U7SUFDaEUsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLDhCQUE4QjtJQUM5QixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLCtCQUErQjtDQUNsQzs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL21haW5fYmcucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDA7XHJcbn1cclxuXHJcbi5oZWFkZXIgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ28gaW1nIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOTFweDtcclxufVxyXG5cclxuLm1lbnUtbGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm1lbnUtaXRlbSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW0gYSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLm1lbnUtaXRlbSBhOmhvdmVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLmN1cnJlbmN5IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDEwM3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE5OXB4O1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IC5jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWFpbi1pbmZvIHtcclxuICAgIG1heC13aWR0aDogNjA4cHg7XHJcbn1cclxuXHJcbi5tYWluLXNtYWxsLWluZm8ge1xyXG4gICAgYmFja2dyb3VuZDogI0QzMzIwRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5tYWluLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTMwJTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTZweDtcclxufVxyXG5cclxuLm1haW4tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjlweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDU2cHg7XHJcbn1cclxuXHJcbi5tYWluLWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTEyM3B4O1xyXG4gICAgbGVmdDogY2FsYygxMDAlIC0gOTkxcHgpO1xyXG59XHJcblxyXG4ud2h5IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvd2h5YmcucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogaW5pdGlhbDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxODBweDtcclxufVxyXG5cclxuLndoeS1pdGVtcyB7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdhcDogMTAwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMTJweCk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLndoeS1pdGVtIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLndoeS1pdGVtLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDA7XHJcbn1cclxuXHJcbi53aHktaXRlbS10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNDAlOyAvKiAyMi40cHggKi9cclxufVxyXG5cclxuLnByb2R1Y3RzIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvYnVyZ2Vyc19iZy5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxNDAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTgwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0cy1pdGVtcyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMzg0cHgpO1xyXG4gICAgZ2FwOiAyNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG5cclxuLnByb2R1Y3RzLWl0ZW0ge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICMyMTFBMTY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzUzNTM1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG5cclxuLnByb2R1Y3RzLWl0ZW0taW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxufVxyXG5cclxuLnByb2R1Y3RzLWl0ZW0taW1hZ2UgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnByb2R1Y3RzLWl0ZW0tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIHBhZGRpbmc6IDI0cHggMDtcclxufVxyXG5cclxuLnByb2R1Y3RzLWl0ZW0tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTQwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0cy1pdGVtLWV4dHJhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5wcm9kdWN0cy1pdGVtLXByaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzOXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdHMtaXRlbS13ZWlnaHQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxufVxyXG5cclxuLmJ1dHRvbi5wcm9kdWN0LWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDE4MnB4O1xyXG4gICAgaGVpZ2h0OiA2MnB4O1xyXG59XHJcblxyXG4uYnV0dG9uLnByb2R1Y3QtYnV0dG9uIHNwYW46Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ub3JkZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9vcmRlcl9iZy5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxODBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5vcmRlciAuY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm9yZGVyLWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiBjYWxjKDEwMCUgLSA3NjRweCk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLm9yZGVyLWZvcm0ge1xyXG4gICAgYmFja2dyb3VuZDogIzIxMUExNjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzNTM1MzU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIG1heC13aWR0aDogNDI2cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogNjBweCA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY3NHB4O1xyXG59XHJcblxyXG4ub3JkZXItZm9ybS10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ub3JkZXItZm9ybS1pbnB1dHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4ub3JkZXItZm9ybS1pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTUuNjFkZWcsICNEQTgwMjMgMCUsICNFMkI0MzggMTAwJSk7XHJcbiAgICB3aWR0aDogMzQ0cHg7XHJcbiAgICBoZWlnaHQ6IDYycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm9yZGVyLWZvcm0taW5wdXQuZXJyb3Ige1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG59XHJcblxyXG4ub3JkZXItZm9ybS1pbnB1dCBpbnB1dCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjExQTE2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgd2lkdGg6IDM0MnB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm9yZGVyLWZvcm0taW5wdXRzIC5idXR0b24ge1xyXG4gICAgd2lkdGg6IDM0NHB4O1xyXG4gICAgaGVpZ2h0OiA2MnB4O1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDYwcHggMDtcclxufVxyXG5cclxuLmZvb3RlciAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ucmlnaHRzIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"main\">\r\n\r\n    <header class=\"header\">\r\n        <div class=\"container\">\r\n            <div class=\"logo\">\r\n                <img src=\"./assets/images/LOGO.png\" alt=\"логотип\">\r\n            </div>\r\n            <nav class=\"menu\">\r\n                <ul class=\"menu-list\">\r\n                    <li class=\"menu-item\">\r\n                        <a (click)=\"scrollTo(why)\">Почему у нас</a>\r\n                    </li>\r\n                    <li class=\"menu-item\">\r\n                        <a (click)=\"scrollTo(products)\">Меню бургеров</a>\r\n                    </li>\r\n                    <li class=\"menu-item\">\r\n                        <a (click)=\"scrollTo(order)\">Оформление заказа</a>\r\n                    </li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"currency\" title=\"Изменить валюту\" id=\"change-currency\" (click)=\"changeCurrency()\">{{currency}}</div>\r\n        </div>\r\n    </header>\r\n\r\n    <section class=\"main-content\">\r\n        <div class=\"container\">\r\n            <div class=\"main-info\">\r\n                <span class=\"main-small-info\">Новое меню</span>\r\n                <h1 class=\"main-title\">бургер чеддер</h1>\r\n                <p class=\"main-text\">\r\n                    Мы обновили наше меню, спешите попробовать сезонные новинки и насладиться отличным вкусом наших\r\n                    бургеров. Готовим для вас лучшие бургеры в городе из отборной мраморной говядины.\r\n                </p>\r\n                <div class=\"main-action\">\r\n                    <button class=\"button\" id=\"main-action-button\" (click)=\"scrollTo(products)\">Смотреть меню</button>\r\n                </div>\r\n            </div>\r\n            <img src=\"./assets/images/main_burger.png\" alt=\"Big burger\" class=\"main-image\">\r\n        </div>\r\n    </section>\r\n\r\n</section>\r\n\r\n<section class=\"why\" id=\"why\" #why>\r\n    <div class=\"container\">\r\n        <div class=\"why-title common-title\">почему нас выбирают?</div>\r\n        <div class=\"why-items\">\r\n            <div class=\"why-item\">\r\n                <img src=\"./assets/images/burger.png\" alt=\"burger\" class=\"why-item-image\">\r\n                <div class=\"why-item-title\">Авторские рецепты</div>\r\n                <div class=\"why-item-text\">\r\n                    Наши бургеры обладают уникальным сочетанием вкусов и не похожи ни на какие другие. Мы тщательно\r\n                    отбираем лучшие ингредиенты и сочетания вкусов для нашего меню.\r\n                </div>\r\n            </div>\r\n            <div class=\"why-item\">\r\n              <img src=\"./assets/images/meat.png\" alt=\"meat\" class=\"why-item-image\">\r\n                <div class=\"why-item-title\">Мраморная говядина</div>\r\n                <div class=\"why-item-text\">\r\n                    Для наших бургеров мы используем отборную 100% мраморную говядину, которую закупаем исключительно\r\n                    у фермеров. Мы уверены в качестве нашего мяса.\r\n                </div>\r\n            </div>\r\n            <div class=\"why-item\">\r\n                <img src=\"./assets/images/food%20truck.png\" alt=\"food truck\" class=\"why-item-image\">\r\n                <div class=\"why-item-title\">Быстрая доставка</div>\r\n                <div class=\"why-item-text\">\r\n                    Мы доставляем в пределах МКАД за 30 минут, а если не успеем — доставка бесплатно. Мы тщательно\r\n                    упаковываем наши бургеры, чтобы по дороге они не остыли.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"products\" id=\"products\" #products>\r\n    <div class=\"container\">\r\n        <div class=\"products-title common-title\">выберите свой бургер</div>\r\n        <div class=\"products-items\">\r\n            <div class=\"products-item\" *ngFor=\"let product of productsData\">\r\n                <div class=\"products-item-image\">\r\n                    <img src=\"{{product.image}}\" alt=\"burger\">\r\n                </div>\r\n                <div class=\"products-item-title\">{{product.title}}</div>\r\n                <div class=\"products-item-text\">\r\n                  {{product.text}}\r\n                </div>\r\n                <div class=\"products-item-extra\">\r\n                    <div class=\"products-item-info\">\r\n                        <div class=\"products-item-price\">{{product.price}} {{currency}}</div>\r\n                        <div class=\"products-item-weight\">{{product.grams}} гр</div>\r\n                    </div>\r\n                    <div class=\"products-item-action\">\r\n                        <button class=\"button product-button\" (click)=\"scrollTo(order, product)\">\r\n                            <span>Заказать</span>\r\n                            <span>\r\n                            <svg width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\"\r\n                                 xmlns=\"http://www.w3.org/2000/svg\">\r\n                            <path d=\"M17 18.5C17.5304 18.5 18.0391 18.7107 18.4142 19.0858C18.7893 19.4609 19 19.9696 19 20.5C19 21.0304 18.7893 21.5391 18.4142 21.9142C18.0391 22.2893 17.5304 22.5 17 22.5C16.4696 22.5 15.9609 22.2893 15.5858 21.9142C15.2107 21.5391 15 21.0304 15 20.5C15 19.39 15.89 18.5 17 18.5ZM1 2.5H4.27L5.21 4.5H20C20.2652 4.5 20.5196 4.60536 20.7071 4.79289C20.8946 4.98043 21 5.23478 21 5.5C21 5.67 20.95 5.84 20.88 6L17.3 12.47C16.96 13.08 16.3 13.5 15.55 13.5H8.1L7.2 15.13L7.17 15.25C7.17 15.3163 7.19634 15.3799 7.24322 15.4268C7.29011 15.4737 7.3537 15.5 7.42 15.5H19V17.5H7C6.46957 17.5 5.96086 17.2893 5.58579 16.9142C5.21071 16.5391 5 16.0304 5 15.5C5 15.15 5.09 14.82 5.24 14.54L6.6 12.09L3 4.5H1V2.5ZM7 18.5C7.53043 18.5 8.03914 18.7107 8.41421 19.0858C8.78929 19.4609 9 19.9696 9 20.5C9 21.0304 8.78929 21.5391 8.41421 21.9142C8.03914 22.2893 7.53043 22.5 7 22.5C6.46957 22.5 5.96086 22.2893 5.58579 21.9142C5.21071 21.5391 5 21.0304 5 20.5C5 19.39 5.89 18.5 7 18.5ZM16 11.5L18.78 6.5H6.14L8.5 11.5H16Z\"\r\n                                  fill=\"#191411\"/>\r\n                            </svg>\r\n                        </span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"order\" id=\"order\" #order>\r\n    <div class=\"container\">\r\n        <div class=\"order-title common-title\">оформление заказа</div>\r\n        <img src=\"./assets/images/order_image.png\" alt=\"Burger in the box\" class=\"order-image\">\r\n        <div class=\"order-form\">\r\n            <div class=\"order-form-text\">Заполните все данные и наш менеджер свяжется с вами для подтверждения заказа\r\n            </div>\r\n            <div class=\"order-form-inputs\" [formGroup]=\"form\">\r\n                <div class=\"order-form-input\" [class]=\"{'error': form.get('order')?.invalid && (form.get('order')?.dirty || form.get('order')?.touched) }\">\r\n                    <input type=\"text\" placeholder=\"Выберите товар в списке\" id=\"burger\" formControlName=\"order\" readonly>\r\n                </div>\r\n                <div class=\"order-form-input\" [class]=\"{'error': form.get('name')?.invalid && (form.get('name')?.dirty || form.get('name')?.touched) }\">\r\n                    <input type=\"text\" placeholder=\"Ваше имя\" id=\"name\" formControlName=\"name\">\r\n                </div>\r\n                <div class=\"order-form-input\" [class]=\"{'error': form.get('phone')?.invalid && (form.get('phone')?.dirty || form.get('phone')?.touched) }\">\r\n                    <input type=\"text\" placeholder=\"Ваш телефон\" id=\"phone\" formControlName=\"phone\">\r\n                </div>\r\n                <button class=\"button\" id=\"order-action\" (click)=\"confirmOrder()\" [disabled]=\"!form.valid\">Оформить заказ</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<footer class=\"footer\">\r\n    <div class=\"container\">\r\n        <div class=\"logo\">\r\n            <img src=\"./assets/images/LOGO.png\" alt=\"логотип\">\r\n        </div>\r\n        <div class=\"rights\">Все права защищены</div>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(fb, appService) {
        this.fb = fb;
        this.appService = appService;
        this.currency = '$';
        this.form = this.fb.group({
            order: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    // tslint:disable-next-line:use-life-cycle-interface
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getData().subscribe(function (data) { return _this.productsData = data; });
    };
    AppComponent.prototype.scrollTo = function (target, burger) {
        target.scrollIntoView({ behavior: 'smooth' });
        if (burger) {
            this.form.patchValue({ order: burger.title + ' (' + burger.price + ' ' + this.currency + ')' });
        }
    };
    AppComponent.prototype.confirmOrder = function () {
        var _this = this;
        if (this.form.valid) {
            this.appService.sendOrder(this.form.value)
                .subscribe({
                next: function (response) {
                    alert(response.message);
                    _this.form.reset();
                },
                error: function (response) {
                    alert(response.error.message);
                },
            });
        }
    };
    AppComponent.prototype.changeCurrency = function () {
        var newCurrency = '$';
        var coefficient = 1;
        if (this.currency === '$') {
            newCurrency = '₽';
            coefficient = 80;
        }
        else if (this.currency === '₽') {
            newCurrency = 'BYN';
            coefficient = 3;
        }
        else if (this.currency === 'BYN') {
            newCurrency = '€';
            coefficient = 0.9;
        }
        else if (this.currency === '€') {
            newCurrency = '¥';
            coefficient = 6.9;
        }
        this.currency = newCurrency;
        this.productsData.forEach(function (item) {
            item.price = +(item.basePrice * coefficient).toFixed(1);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.sendOrder = function (data) {
        return this.http.post('https://testologia.site/burgers-order', data);
    };
    AppService.prototype.getData = function () {
        return this.http.get('https://testologia.site/burgers-data?extra=black');
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\webstorm\burgers\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map