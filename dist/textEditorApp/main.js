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

/***/ "./src/app/addform/addform.component.html":
/*!************************************************!*\
  !*** ./src/app/addform/addform.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-between m-4\">\n\t<div class=\"input-group col-4\">\n\t\t<div class=\"input-group-prepend\">\n\t\t    <label class=\"input-group-text\" for=\"inputGroupSelect01\">Choose tag</label>\n\t\t</div>\n\t\t<select class=\"custom-select col-8\" id=\"inputGroupSelect01\" (change)=\"onSelect($event.target.value)\">\n\t\t  <option *ngFor=\"let tag of tags\" value=\"{{ tag }}\">{{ tag }}</option>\n\t\t</select>\n\t</div>\n\t<div class=\"col-2\">\n\t\t<button *ngIf=\"!showForm\" (click)=\"onShowForm()\" class=\"btn btn-success text-white\">Add new note</button>\n\t</div>\n</div>\n<div *ngIf=\"showForm\">\n\t<form #t=\"ngForm\" (ngSubmit)=\"onSubmit(t)\" class=\"rounded shadow-sm m-4 p-4\">\n\t\t<div class=\"form-row justify-content-left col-12\">  \t\n\t  \t<label for=\"inputCity\" class=\"col-2\">Title:</label>\n\t    <div class=\"form-group col-6 \">\n\t      \t<input \n\t\t      \ttype=\"text\" \n\t\t      \tclass=\"form-control\"\n\t\t      \tid=\"inputTitle\" \n\t\t      \tplaceholder=\"Title\"\n\t\t      \trequired\n\t\t      \tngModel\n\t\t      \tname=\"title\"\n\t\t      \t#title=\"ngModel\"\n\t\t      \tminlength=\"3\"\n\t\t      \tmaxlength=\"25\">\n\t\t</div>\n\t\t<div class=\"alert alert-danger col-4 p-1\" *ngIf=\"title.touched && !title.valid\">\n\t      \t\t<div *ngIf=\"title.errors.required\">This field is required</div>\n\t      \t\t<div *ngIf=\"title.errors.minlength\">\n\t      \t\t\tTitle should be minimum {{ title.errors.minlength.requiredLength }} characters.\n\t      \t\t</div>\n\t      \t</div>\n\t  </div> \n\n\t  <div class=\"form-row justify-content-left col-12\">  \t\n\t  \t<label for=\"inputCity\" class=\"col-2\">Content:</label>\n\t    <div class=\"form-group col-6 \">\n\t      <textarea\n\t      \ttype=\"text\" \n\t      \tclass=\"form-control\"\n\t      \tid=\"inputContent\" \n\t      \tplaceholder=\"Text content...\"\n\t      \trequired\n\t      \tngModel\n\t      \tname=\"content\"\n\t      \t#content=\"ngModel\"\n\t      \tminlength=\"3\"\n\t      \tmaxlength=\"25\">\n\t      \t</textarea>\n\t    </div>\n\t    <div class=\"alert alert-danger col-4 p-1\" *ngIf=\"content.touched && !content.valid\">\n\t      \t\t<div *ngIf=\"content.errors.required\">This field is required</div>\n\t      \t\t<div *ngIf=\"content.errors.minlength\">\n\t      \t\t\tContent should be minimum {{ content.errors.minlength.requiredLength }} characters.\n\t      \t\t</div>\n\t    </div>\n\t  </div>\n\n\t  \t<div class=\"form-row justify-content-left col-12\">  \t\n\t  \t<label for=\"inputCity\" class=\"col-2\">Tags:</label>\n\t    <div class=\"form-group col-6 \">\n\t      <input \n\t      \ttype=\"text\" \n\t      \tclass=\"form-control\"\n\t      \tid=\"iputTag\" \n\t      \tplaceholder=\"Tags through space...\"\n\t      \tngModel\n\t      \tname=\"tag\"\n\t      \t#tag=\"ngModel\"\n\t      \tmaxlength=\"25\">\t      \t\n\t    </div>\n\t  </div>\n\t  <div class=\"form-row justify-content-end col-8\">\n\t  \t<button type=\"submit\" class=\"btn btn-success col-2\" [disabled]=\"!t.valid\">Save</button>\n\t  \t<button class=\"btn btn-primary col-2 text-white ml-2\" (click)=\"onShowForm()\">Cancel</button>  \t\n\t  </div>\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/addform/addform.component.scss":
/*!************************************************!*\
  !*** ./src/app/addform/addform.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZGZvcm0vYWRkZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/addform/addform.component.ts":
/*!**********************************************!*\
  !*** ./src/app/addform/addform.component.ts ***!
  \**********************************************/
/*! exports provided: AddformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddformComponent", function() { return AddformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddformComponent = /** @class */ (function () {
    function AddformComponent(data) {
        this.data = data;
        this.render = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tags = ["All"];
        this.showForm = false;
    }
    AddformComponent.prototype.ngOnInit = function () {
        this.importTags();
    };
    AddformComponent.prototype.onShowForm = function () {
        this.showForm = !this.showForm;
    };
    AddformComponent.prototype.onSubmit = function (form) {
        this.data.addNote({
            id: 0,
            title: form.value.title,
            content: form.value.content,
            tags: form.value.tag.split(' '),
            edit: false
        });
        this.onShowForm();
        this.render.emit();
    };
    AddformComponent.prototype.onSelect = function (str) {
        this.filter.emit(str);
    };
    AddformComponent.prototype.importTags = function () {
        var _this = this;
        var items = this.data.getData();
        items.forEach(function (e) {
            e.tags.forEach(function (a) {
                if (!~_this.tags.indexOf(a)) {
                    _this.tags.push(a);
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddformComponent.prototype, "render", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddformComponent.prototype, "filter", void 0);
    AddformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addform',
            template: __webpack_require__(/*! ./addform.component.html */ "./src/app/addform/addform.component.html"),
            styles: [__webpack_require__(/*! ./addform.component.scss */ "./src/app/addform/addform.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], AddformComponent);
    return AddformComponent;
}());



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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"wrapper\">\n    <div class=\"content\">\n      <nav class=\"navbar navbar-dark fixed-top bg-dark p-0 shadow\">\n        <a class=\"navbar-brand col-3 text-center\" routerLink=\"/\">Text Editor Application</a>       \n      </nav>\n      <main role=\"main\" class=\"col-md-12 ml-sm-auto col-lg-12 px-4\">\n        <app-main></app-main>\n      </main>\n    </div>\n\n    <footer class=\"footer text-white bg-dark footer-copyright text-center py-3\">© 2018 Copyright: \n        <a href=\"https://github.com/Supersmf\"> SuperSMF</a>\n    </footer>\n  </div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  padding: 50px;\n  position: relative;\n  min-height: 100%; }\n\n.content {\n  padding-bottom: 60px; }\n\n.footer {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXEphdmFTY3JpcHRcXHRhc2tzXFx0ZXh0RWRpdG9yQXBwL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLHFCQUFvQixFQUNyQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixRQUFPO0VBQ1AsVUFBUztFQUNULFlBQVc7RUFDWCxhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbiJdfQ== */"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'textEditorApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _addform_addform_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addform/addform.component */ "./src/app/addform/addform.component.ts");
/* harmony import */ var _listitems_listitems_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./listitems/listitems.component */ "./src/app/listitems/listitems.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                _addform_addform_component__WEBPACK_IMPORTED_MODULE_7__["AddformComponent"],
                _listitems_listitems_component__WEBPACK_IMPORTED_MODULE_8__["ListitemsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/listitems/listitems.component.html":
/*!****************************************************!*\
  !*** ./src/app/listitems/listitems.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let item of items\" class=\"row\">\n  \t<div class=\"col-10\">\n  \t\t<h4>{{ item.title }}</h4>\n  \t\t<textarea\n  \t\t\t*ngIf= \"item.edit\"\n  \t\t\tclass=\"col p-0\"\n  \t\t\trows=\"4\"\n  \t\t\t[(ngModel)]=\"item.content\">  \t\t\t\t\n  \t\t\t</textarea> \n  \t\t<p *ngIf= \"!item.edit\">{{ item.content }}</p>\n  \t</div>\n    <div class=\"col-2 text-right mt-1\">\n    \t<button class=\"btn btn-info col mt-4\" *ngIf= \"!item.edit\" (click)=\"onEdit(item)\">Edit</button>\n    \t<button class=\"btn btn-info col mt-4\" *ngIf= \"item.edit\" (click)=\"onCancel(item)\">Cancel</button>\n    \t<button class=\"btn btn-danger col mt-4\" *ngIf= \"!item.edit\" (click)=\"onRemove(item.id)\">Remove</button>\n    \t<button class=\"btn btn-success col mt-4\" *ngIf= \"item.edit\" (click)=\"onUpdate(item)\">Save</button>\n    </div>\n\n    <ul class=\"row\">\n      <li *ngFor=\"let tag of item.tags; index as index\">\n      \t<button class=\"btn btn-light mr-2 tagBtn\" [disabled]=\"!item.edit\" (click)=\"onTagRemove(item, index)\">#{{ tag }}</button>\n      </li>\n      <li ><button class=\"btn btn-success mr-2 p-1\" *ngIf= \"item.edit && !editTag\" (click)=\"editTag = !editTag\">add</button></li>\n      \n      <div class=\"form-group col-3 mr-2\" *ngIf= \"item.edit && editTag\">\n          <input \n            type=\"text\" \n            class=\"form-control\"\n            required\n            [(ngModel)]= \"newTag\"\n            minlength=\"1\"\n            maxlength=\"8\">\n      </div>\n      <li ><button class=\"btn btn-info mr-2 p-1\" *ngIf= \"item.edit && editTag\" (click)=\"editTag = !editTag\">Cancel</button></li>\n      <li ><button class=\"btn btn-success mr-2 p-1\" *ngIf= \"item.edit && editTag\" (click)=\"onTagAdd(item)\">Save</button></li>\n    </ul>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/listitems/listitems.component.scss":
/*!****************************************************!*\
  !*** ./src/app/listitems/listitems.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RpdGVtcy9saXN0aXRlbXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/listitems/listitems.component.ts":
/*!**************************************************!*\
  !*** ./src/app/listitems/listitems.component.ts ***!
  \**************************************************/
/*! exports provided: ListitemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListitemsComponent", function() { return ListitemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListitemsComponent = /** @class */ (function () {
    function ListitemsComponent(data) {
        this.data = data;
        this.moveTag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editTag = false;
    }
    ListitemsComponent.prototype.ngOnInit = function () {
        this.items = this.data.getData();
    };
    ListitemsComponent.prototype.onEdit = function (item) {
        item.edit = !item.edit;
        /*if(item.edit) {
          item.tags.forEach(e => {
            item.content = (item.content.replace(/e/g, `<span class="bg-success text-white>${e}</span>`));
          })
        }*/
    };
    ListitemsComponent.prototype.onCancel = function (item) {
        this.items = this.data.getData();
    };
    ListitemsComponent.prototype.onUpdate = function (item) {
        this.onEdit(item);
        this.data.updateItem(item);
        this.items = this.data.getData();
    };
    ListitemsComponent.prototype.onRemove = function (id) {
        this.data.removeItem(id);
        this.items = this.data.getData();
        this.moveTag.emit();
    };
    ListitemsComponent.prototype.onTagRemove = function (item, tagId) {
        item.tags.splice(tagId, 1);
        this.moveTag.emit();
    };
    ListitemsComponent.prototype.onTagAdd = function (item) {
        item.tags.push(this.newTag);
        this.newTag = '';
        this.editTag = !this.editTag;
        this.onUpdate(item);
        this.moveTag.emit();
    };
    ListitemsComponent.prototype.onFilter = function (str) {
        var temp = [];
        this.items = this.data.getData();
        if (str === 'All')
            return;
        this.items.forEach(function (e) {
            e.tags.forEach(function (a) {
                if (a === str)
                    temp.push(e);
            });
        });
        this.items = temp;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ListitemsComponent.prototype, "moveTag", void 0);
    ListitemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listitems',
            template: __webpack_require__(/*! ./listitems.component.html */ "./src/app/listitems/listitems.component.html"),
            styles: [__webpack_require__(/*! ./listitems.component.scss */ "./src/app/listitems/listitems.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ListitemsComponent);
    return ListitemsComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"container\">\n  <div class=\"col-12 text-center\" >\n    <div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n      <app-addform (render)=\"list.ngOnInit()\" (filter)=\"list.onFilter($event)\" #form></app-addform>\n    </div>\n  </div>\n  <div class=\"col-12\" id=\"content\">\n    <div class=\"tab-content\" id=\"nav-tabContent\">\n      <h1 class=\"listtitle\">List of notes</h1>\n      <app-listitems #list (moveTag)=\"form.importTags()\"></app-listitems>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".listtitle {\n  font-size: 2.1em;\n  text-decoration: none;\n  font-weight: bold;\n  color: #00A8FF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9FOlxcSmF2YVNjcmlwdFxcdGFza3NcXHRleHRFZGl0b3JBcHAvc3JjXFxhcHBcXG1haW5cXG1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBZ0I7RUFDaEIsc0JBQXFCO0VBQ3JCLGtCQUFpQjtFQUNqQixlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdHRpdGxlIHtcclxuICBmb250LXNpemU6IDIuMWVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzAwQThGRjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
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


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        if (!JSON.parse(localStorage.getItem('items'))) {
            this.setLocalStorageNotes(__webpack_require__(/*! ../../assets/data.json */ "./src/assets/data.json"));
        }
    }
    DataService.prototype.getData = function () {
        return JSON.parse(localStorage.getItem('items')).items;
    };
    DataService.prototype.removeItem = function (id) {
        var items = this.getData();
        items.forEach(function (e, i) {
            if (e.id === id) {
                items.splice(i, 1);
            }
        });
        this.setLocalStorageNotes(items);
    };
    DataService.prototype.updateItem = function (item) {
        var items = this.getData();
        items.forEach(function (e, i) {
            if (e.id === item.id) {
                items.splice(i, 1, item);
            }
        });
        this.setLocalStorageNotes(items);
    };
    DataService.prototype.addNote = function (item) {
        var data = this.getData();
        item.id = data[data.length - 1].id + 1;
        data.push(item);
        this.setLocalStorageNotes(data);
    };
    DataService.prototype.setLocalStorageNotes = function (items) {
        localStorage.setItem('items', JSON.stringify({ items: items }));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/assets/data.json":
/*!******************************!*\
  !*** ./src/assets/data.json ***!
  \******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
/***/ (function(module) {

module.exports = [{"id":1,"title":"The standard Lorem Ipsum passage, used since the 1500s","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","tags":["elit","amet","ipsum"],"edit":false},{"id":2,"title":"Section 1.10.32 of 'de Finibus Bonorum et Malorum', written by Cicero in 45 BC","content":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.","tags":["totam","laudantium","sit"],"edit":false},{"id":3,"title":"1914 translation by H. Rackham","content":"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.","tags":["must","idea","was"],"edit":false},{"id":4,"title":"What is Lorem Ipsum?","content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.","tags":["dummy","text","industry"],"edit":false},{"id":5,"title":"Where does it come from?","content":"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.","tags":["dummy","simply","roots"],"edit":false},{"id":6,"title":"Why do we use it?","content":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.","tags":["long","laudantium","text"],"edit":false},{"id":7,"title":"Where can I get some?","content":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.","tags":["long","laudantium","text"],"edit":false}];

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

module.exports = __webpack_require__(/*! E:\JavaScript\tasks\textEditorApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map