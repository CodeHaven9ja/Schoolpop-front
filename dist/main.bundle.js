webpackJsonp([1,5],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__full_calendar_full_calendar_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__top_nav_top_nav_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__widgets_widgets_module__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__toggle_button_toggle_button_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_mail_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_7__widgets_widgets_module__["a" /* WidgetsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__full_calendar_full_calendar_component__["a" /* FullCalendarComponent */], __WEBPACK_IMPORTED_MODULE_4__top_nav_top_nav_component__["a" /* TopNavComponent */], __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["a" /* SidebarComponent */], __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_8__toggle_button_toggle_button_component__["a" /* ToggleButtonComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__full_calendar_full_calendar_component__["a" /* FullCalendarComponent */], __WEBPACK_IMPORTED_MODULE_4__top_nav_top_nav_component__["a" /* TopNavComponent */], __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["a" /* SidebarComponent */], __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_10__services_mail_service__["a" /* MailService */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticatedGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthenticatedGuard = (function () {
    function AuthenticatedGuard() {
    }
    AuthenticatedGuard.prototype.canActivate = function (next, state) {
        return true;
    };
    return AuthenticatedGuard;
}());
AuthenticatedGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AuthenticatedGuard);

//# sourceMappingURL=authenticated.guard.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicComponent = (function () {
    function BasicComponent() {
    }
    BasicComponent.prototype.ngOnInit = function () {
    };
    return BasicComponent;
}());
BasicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-basic',
        template: __webpack_require__(474),
        styles: [__webpack_require__(429)]
    }),
    __metadata("design:paramtypes", [])
], BasicComponent);

//# sourceMappingURL=basic.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlankComponent = (function () {
    function BlankComponent() {
    }
    BlankComponent.prototype.ngOnInit = function () {
    };
    return BlankComponent;
}());
BlankComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-blank',
        template: __webpack_require__(475),
        styles: [__webpack_require__(430)]
    }),
    __metadata("design:paramtypes", [])
], BlankComponent);

//# sourceMappingURL=blank.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_mail_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InboxResolve = (function () {
    function InboxResolve(ms) {
        this.ms = ms;
    }
    InboxResolve.prototype.resolve = function (route) {
        return this.ms.getMails();
    };
    return InboxResolve;
}());
InboxResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_mail_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_mail_service__["a" /* MailService */]) === "function" && _a || Object])
], InboxResolve);

var _a;
//# sourceMappingURL=inbox-resolver.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_mail_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailItemResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MailItemResolve = (function () {
    function MailItemResolve(ms) {
        this.ms = ms;
    }
    MailItemResolve.prototype.resolve = function (route) {
        var id = route.params['id'];
        return this.ms.getMail(id);
    };
    return MailItemResolve;
}());
MailItemResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_mail_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_mail_service__["a" /* MailService */]) === "function" && _a || Object])
], MailItemResolve);

var _a;
//# sourceMappingURL=mail-item-resolver.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_mail_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutboxResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OutboxResolve = (function () {
    function OutboxResolve(ms) {
        this.ms = ms;
    }
    OutboxResolve.prototype.resolve = function (route) {
        return this.ms.getSentMails();
    };
    return OutboxResolve;
}());
OutboxResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_mail_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_mail_service__["a" /* MailService */]) === "function" && _a || Object])
], OutboxResolve);

var _a;
//# sourceMappingURL=outbox-resolver.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_services_route_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_services_user_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthComponent = (function () {
    function AuthComponent(rs, router, us, fb, toastr, vRef) {
        this.rs = rs;
        this.router = router;
        this.us = us;
        this.fb = fb;
        this.toastr = toastr;
        this.isLoading = false;
        this.toastr.setRootViewContainerRef(vRef);
        this.createForm();
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.rs.setBc("login-body");
    };
    AuthComponent.prototype.createForm = function () {
        this.authForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    AuthComponent.prototype.onSubmit = function () {
        var _this = this;
        // console.log(this.authForm.value)
        this.isLoading = true;
        var cred = this.authForm.value;
        this.us.login(cred).subscribe(function (user) {
            _this.isLoading = false;
            _this.us.setCurrentUser(user);
            _this.router.navigate(['/dashboard']);
        }, function (err) {
            var e = err.json();
            // console.log(e.error);
            _this.toastr.error(e.error, 'Oops!');
            _this.isLoading = false;
        }, function () { return console.log("Complete"); });
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-auth',
        template: __webpack_require__(476),
        styles: [__webpack_require__(431)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__common_services_route_service__["a" /* RouteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_services_route_service__["a" /* RouteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__common_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _f || Object])
], AuthComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_route_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(rs) {
        this.rs = rs;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.rs.setBc("sticky-header");
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(477),
        styles: [__webpack_require__(432)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_services_route_service__["a" /* RouteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_services_route_service__["a" /* RouteService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_route_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingComponent = (function () {
    function LandingComponent(rs) {
        this.rs = rs;
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.rs.setBc("sticky-header");
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__(478),
        styles: [__webpack_require__(433)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_services_route_service__["a" /* RouteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_services_route_service__["a" /* RouteService */]) === "function" && _a || Object])
], LandingComponent);

var _a;
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_validators_userid_validator__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_services_route_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_services_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_services_mail_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComposeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ComposeComponent = (function () {
    function ComposeComponent(rs, us, ms, router) {
        this.rs = rs;
        this.us = us;
        this.ms = ms;
        this.router = router;
        this.ckeditorContent = "";
        this.itemsAsObjects = [];
        this.subject = "";
        this.v = new __WEBPACK_IMPORTED_MODULE_1__common_validators_userid_validator__["a" /* AsyncUserIdValidator */](this.us);
        this.ckeditorContent = "<p>Write message here.</p>";
    }
    ComposeComponent.prototype.ngOnInit = function () {
        this.rs.setBc("sticky-header");
    };
    ComposeComponent.prototype.onAdd = function (item) {
        console.log('tag added: value is ' + JSON.stringify(item));
    };
    // TODO: do Async tag verification
    // validateTag(control: FormControl) {
    //   this.v.validate(control).subscribe(
    //     (good) => 
    //   );
    // }
    ComposeComponent.prototype.onAdding = function (tag) {
        console.log('tag adding: ' + JSON.stringify(tag));
        var confirm = window.confirm('Do you really want to add this tag?');
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"]
            .of(undefined)
            .filter(function () { return confirm; })
            .mapTo(tag);
    };
    ComposeComponent.prototype.focusOut = function () {
        var ne = jQuery(this.subjectWrapper.nativeElement);
        ne.removeClass("tag-input--focused");
    };
    ComposeComponent.prototype.focus = function () {
        var ne = jQuery(this.subjectWrapper.nativeElement);
        ne.addClass("tag-input--focused");
    };
    ComposeComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.ckeditorContent, JSON.stringify(this.itemsAsObjects), this.subject);
        var message = {};
        message.users = [];
        for (var i = 0; i < this.itemsAsObjects.length; i++) {
            var u = this.itemsAsObjects[i].objectId;
            message.users.push(u);
        }
        message.message = {
            subject: this.subject,
            text: this.ckeditorContent
        };
        this.ms.sendMail(message).subscribe(function (res) {
            _this.router.navigate(['/mail']);
        }, function (err) { return console.log(err.json()); });
    };
    return ComposeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('subjectWrapper'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"]) === "function" && _a || Object)
], ComposeComponent.prototype, "subjectWrapper", void 0);
ComposeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-compose',
        template: __webpack_require__(479),
        styles: [__webpack_require__(434)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__common_services_route_service__["a" /* RouteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__common_services_route_service__["a" /* RouteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__common_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__common_services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__common_services_mail_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__common_services_mail_service__["a" /* MailService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _e || Object])
], ComposeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=compose.component.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_route_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InboxComponent = (function () {
    function InboxComponent(rs, route, router) {
        this.rs = rs;
        this.route = route;
        this.router = router;
        this.mails = [];
        // sub:Subscription;
        this.unReadCount = 0;
    }
    InboxComponent.prototype.ngOnInit = function () {
        this.rs.setBc("sticky-header");
        this.mails = this.route.snapshot.data['mails'];
        // console.log(this.route.snapshot.data['mails']);
    };
    InboxComponent.prototype.navigateToMail = function (objectId) {
        this.router.navigate(['/mail', objectId]);
    };
    InboxComponent.prototype.ngOnDestroy = function () {
        // this.sub.unsubscribe();
    };
    return InboxComponent;
}());
InboxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inbox',
        template: __webpack_require__(480),
        styles: [__webpack_require__(435)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_services_route_service__["a" /* RouteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_services_route_service__["a" /* RouteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], InboxComponent);

var _a, _b, _c;
//# sourceMappingURL=inbox.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_mail_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MailComponent = (function () {
    function MailComponent(ms) {
        this.ms = ms;
        this.unReadCount = 0;
    }
    MailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.ms.getUnreadMails().subscribe(function (m) { return _this.unReadCount = m.length; });
    };
    MailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return MailComponent;
}());
MailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-mail',
        template: __webpack_require__(481),
        styles: [__webpack_require__(436)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_services_mail_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_services_mail_service__["a" /* MailService */]) === "function" && _a || Object])
], MailComponent);

var _a;
//# sourceMappingURL=mail.component.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_route_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OutboxComponent = (function () {
    function OutboxComponent(rs, route, router) {
        this.rs = rs;
        this.route = route;
        this.router = router;
        this.mails = [];
        this.unReadCount = 0;
    }
    OutboxComponent.prototype.ngOnInit = function () {
        this.rs.setBc("sticky-header");
        this.mails = this.route.snapshot.data['mails'];
    };
    OutboxComponent.prototype.navigateToMail = function (objectId) {
        this.router.navigate(['/mail', objectId]);
    };
    return OutboxComponent;
}());
OutboxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-outbox',
        template: __webpack_require__(482),
        styles: [__webpack_require__(437)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_services_route_service__["a" /* RouteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_services_route_service__["a" /* RouteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], OutboxComponent);

var _a, _b, _c;
//# sourceMappingURL=outbox.component.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__moment_util__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_mail_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_services_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_services_route_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadMailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReadMailComponent = (function () {
    function ReadMailComponent(rs, route, us, ms) {
        this.rs = rs;
        this.route = route;
        this.us = us;
        this.ms = ms;
        this.mail = {};
        this.moment = new __WEBPACK_IMPORTED_MODULE_2__moment_util__["a" /* MomentUtil */]();
        this.currentUser = us.getCurrentUser();
    }
    ReadMailComponent.prototype.ngOnInit = function () {
        this.rs.setBc("sticky-header");
        this.mail = this.route.snapshot.data['mail'];
        if (this.mail.to.objectId == this.currentUser.objectId) {
            this.ms.markAsRead(this.mail.objectId).subscribe();
        }
    };
    ReadMailComponent.prototype.getCreatedAt = function (date) {
        return this.moment.timeDateAgo(date);
    };
    ReadMailComponent.prototype.getDateFormatted = function (date) {
        var format = "MM/DD/YYYY";
        return this.moment.format(date, format);
    };
    return ReadMailComponent;
}());
ReadMailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-read-mail',
        template: __webpack_require__(483),
        styles: [__webpack_require__(438)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__common_services_route_service__["a" /* RouteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_services_route_service__["a" /* RouteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__common_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__common_services_mail_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_services_mail_service__["a" /* MailService */]) === "function" && _d || Object])
], ReadMailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=read-mail.component.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteService = (function () {
    function RouteService() {
        this.bodyClassSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.bc = this.bodyClassSubject.asObservable();
    }
    RouteService.prototype.setBc = function (bc) {
        this.bodyClassSubject.next(bc);
    };
    return RouteService;
}());
RouteService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], RouteService);

//# sourceMappingURL=route.service.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = "http://api.schoolpop.ng/1";
    }
    UserService.prototype.getUser = function (id) {
        var options = this.getOptions(this.getCurrentUser().sessionToken);
        return this.http.get(this.baseUrl + "/classes/_User/" + id, options)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.getCurrentUser = function () {
        return JSON.parse(localStorage.getItem("currentUser"));
    };
    UserService.prototype.setCurrentUser = function (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
    };
    UserService.prototype.isAdmin = function () {
        var user = this.getCurrentUser();
        return user && user.role && user.role == "admin";
    };
    UserService.prototype.login = function (cred) {
        cred.username = cred.username.trim();
        return this.http.get(this.baseUrl + "/login?username=" + cred.username + "&password=" + cred.password, this.getOptions()).map(function (res) { return res.json(); });
    };
    UserService.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/']);
    };
    UserService.prototype.getOptions = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('X-Parse-Application-Id', '9o87s1WOIyPgoTEGv0PSp9GXT1En9cwC');
        if (this.getCurrentUser()) {
            var user = this.getCurrentUser();
            headers.append('X-Parse-Session-Token', user.sessionToken);
        }
        else if (token) {
            headers.append('X-Parse-Session-Token', token);
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    UserService.prototype.getUserPointer = function (user) {
        return {
            "__type": "Pointer",
            "className": "_User",
            "objectId": user.objectId
        };
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ObservableUtil__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MailService = (function () {
    function MailService(us, http) {
        this.us = us;
        this.http = http;
        this.baseUrl = "http://api.schoolpop.ng/1";
        this.currentUser = us.getCurrentUser();
        this.opts = us.getOptions(this.currentUser.sessionToken);
    }
    MailService.prototype.getUnreadMails = function () {
        var _this = this;
        var ticker = new __WEBPACK_IMPORTED_MODULE_0__ObservableUtil__["a" /* ObservableUtil */]().getTicker(0, 1000 * 30);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: this.opts.headers,
            params: {
                "where": {
                    "to": this.us.getUserPointer(this.currentUser),
                    "isRead": false
                },
                include: ['message', 'from'],
                order: "-createdAt"
            }
        });
        return ticker.flatMap(function () { return _this.http.get(_this.baseUrl + "/classes/Mail", options); })
            .map(function (res) { return res.json().results; });
    };
    MailService.prototype.getMail = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: this.opts.headers,
            params: {
                include: ['message', 'from', 'to']
            }
        });
        return this.http.get(this.baseUrl + "/classes/Mail/" + id, options)
            .map(function (res) { return res.json(); });
    };
    MailService.prototype.sendMail = function (message) {
        console.log(message);
        return this.http.post(this.baseUrl + "/functions/loopSend", { message: message }, this.opts).map(function (res) { return res.json(); });
    };
    MailService.prototype.getMails = function (limit, skip) {
        if (limit === void 0) { limit = 10; }
        if (skip === void 0) { skip = 0; }
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: this.opts.headers,
            params: {
                "where": {
                    "to": this.us.getUserPointer(this.currentUser)
                },
                include: ['message', 'from'],
                limit: limit,
                order: "-createdAt"
            }
        });
        return this.http.get(this.baseUrl + "/classes/Mail", options)
            .map(function (res) { return res.json().results; });
    };
    MailService.prototype.getSentMails = function (limit, skip) {
        if (limit === void 0) { limit = 10; }
        if (skip === void 0) { skip = 0; }
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: this.opts.headers,
            params: {
                "where": {
                    "from": this.us.getUserPointer(this.currentUser)
                },
                include: ['message', 'to', 'from'],
                limit: limit,
                order: "-createdAt"
            }
        });
        return this.http.get(this.baseUrl + "/classes/Mail", options)
            .map(function (res) { return res.json().results; });
    };
    MailService.prototype.markAsRead = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: this.opts.headers
        });
        return this.http.put(this.baseUrl + "/classes/Mail/" + id, { isRead: true }, options);
    };
    return MailService;
}());
MailService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], MailService);

var _a, _b;
//# sourceMappingURL=mail.service.js.map

/***/ }),

/***/ 314:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 314;


/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(351);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObservableUtil; });

var ObservableUtil = (function () {
    function ObservableUtil() {
    }
    ObservableUtil.prototype.getTicker = function (delay, interval) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].timer(delay, interval);
    };
    return ObservableUtil;
}());

//# sourceMappingURL=ObservableUtil.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_js_helpers__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_route_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(rs, router, ngZone, renderer) {
        var _this = this;
        this.rs = rs;
        this.router = router;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.title = 'app works!';
        this.bc = "sticky-header";
        this.color = 'primary';
        this.sub = router.events.subscribe(function (event) {
            _this._navigationInterceptor(event);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.rs.bc.subscribe(function (c) {
            var body = jQuery("body");
            body.attr("class", "");
            body.addClass(c);
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_js_helpers__["d" /* adjustMainContentHeight */])();
    };
    AppComponent.prototype._navigationInterceptor = function (event) {
        var _this = this;
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationStart */]) {
            // We wanna run this function outside of Angular's zone to
            // bypass change detection
            this.ngZone.runOutsideAngular(function () {
                var ne = jQuery(_this.spinnerElement.nativeElement);
                ne.removeClass("loading-overlay-off").addClass("loading-overlay");
            });
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* NavigationEnd */]) {
            this._hideSpinner();
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* NavigationCancel */]) {
            this._hideSpinner();
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* NavigationError */]) {
            this._hideSpinner();
        }
    };
    AppComponent.prototype._hideSpinner = function () {
        var _this = this;
        // We wanna run this function outside of Angular's zone to
        // bypass change detection, 
        this.ngZone.runOutsideAngular(function () {
            var ne = jQuery(_this.spinnerElement.nativeElement);
            ne.removeClass("loading-overlay").addClass("loading-overlay-off");
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('spinnerElement'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], AppComponent.prototype, "spinnerElement", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'body',
        template: __webpack_require__(465),
        styles: [__webpack_require__(420)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__common_services_route_service__["a" /* RouteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_services_route_service__["a" /* RouteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_views_module__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_services_route_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__(328);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* ROUTES */]),
            __WEBPACK_IMPORTED_MODULE_8__views_views_module__["a" /* ViewsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MdProgressSpinnerModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__common_services_route_service__["a" /* RouteService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_mail_read_mail_read_mail_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_mail_outbox_outbox_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_layouts_basic_basic_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_layouts_blank_blank_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_landing_landing_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_guards_authenticated_guard__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_auth_auth_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_dashboard_dashboard_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_mail_mail_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_mail_inbox_inbox_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_resolvers_inbox_resolver__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_resolvers_mail_item_resolver__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_resolvers_outbox_resolver__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_mail_compose_compose_component__ = __webpack_require__(120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });














var ROUTES = [
    {
        "path": '',
        component: __WEBPACK_IMPORTED_MODULE_4__views_landing_landing_component__["a" /* LandingComponent */],
        pathMatch: 'full',
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_5__common_guards_authenticated_guard__["a" /* AuthenticatedGuard */]
        ]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__common_layouts_blank_blank_component__["a" /* BlankComponent */],
        children: [
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_6__views_auth_auth_component__["a" /* AuthComponent */]
            }
        ]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__common_layouts_basic_basic_component__["a" /* BasicComponent */],
        children: [
            {
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_7__views_dashboard_dashboard_component__["a" /* DashboardComponent */]
                // resolve: {
                //   m: MailResolver
                // }
            },
            {
                path: 'mail',
                redirectTo: 'mail/inbox'
            },
            {
                path: 'mail',
                component: __WEBPACK_IMPORTED_MODULE_8__views_mail_mail_component__["a" /* MailComponent */],
                children: [
                    {
                        path: 'compose',
                        component: __WEBPACK_IMPORTED_MODULE_13__views_mail_compose_compose_component__["a" /* ComposeComponent */]
                    },
                    {
                        path: 'inbox',
                        component: __WEBPACK_IMPORTED_MODULE_9__views_mail_inbox_inbox_component__["a" /* InboxComponent */],
                        resolve: {
                            mails: __WEBPACK_IMPORTED_MODULE_10__common_resolvers_inbox_resolver__["a" /* InboxResolve */]
                        }
                    },
                    {
                        path: 'outbox',
                        component: __WEBPACK_IMPORTED_MODULE_1__views_mail_outbox_outbox_component__["a" /* OutboxComponent */],
                        resolve: {
                            mails: __WEBPACK_IMPORTED_MODULE_12__common_resolvers_outbox_resolver__["a" /* OutboxResolve */]
                        }
                    },
                    {
                        path: ':id',
                        component: __WEBPACK_IMPORTED_MODULE_0__views_mail_read_mail_read_mail_component__["a" /* ReadMailComponent */],
                        resolve: {
                            mail: __WEBPACK_IMPORTED_MODULE_11__common_resolvers_mail_item_resolver__["a" /* MailItemResolve */]
                        }
                    }
                ]
            }
        ]
    }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(466),
        styles: [__webpack_require__(421)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullCalendarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullCalendarComponent = (function () {
    function FullCalendarComponent() {
    }
    FullCalendarComponent.prototype.ngOnInit = function () {
    };
    return FullCalendarComponent;
}());
FullCalendarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-full-calendar',
        template: __webpack_require__(467),
        styles: [__webpack_require__(422)]
    }),
    __metadata("design:paramtypes", [])
], FullCalendarComponent);

//# sourceMappingURL=full-calendar.component.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_js_helpers__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_js_helpers__["a" /* visibleSubMenuClose */])();
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_js_helpers__["b" /* toggleSidebar */])();
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_js_helpers__["c" /* hover */])();
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(468),
        styles: [__webpack_require__(423)]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToggleButtonComponent = (function () {
    function ToggleButtonComponent() {
    }
    ToggleButtonComponent.prototype.ngOnInit = function () {
    };
    return ToggleButtonComponent;
}());
ToggleButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-toggle-button',
        template: __webpack_require__(469),
        styles: [__webpack_require__(424)]
    }),
    __metadata("design:paramtypes", [])
], ToggleButtonComponent);

//# sourceMappingURL=toggle-button.component.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moment_util__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_js_helpers__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widgets_single_mail_single_mail_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_mail_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TopNavComponent = (function () {
    function TopNavComponent(us, ms) {
        this.us = us;
        this.ms = ms;
        this.mails = [];
        this.m = [];
        this.mailMapping = { '=0': 'No unread mails.', '=1': 'One unread mail.', 'other': '# unread mails.' };
    }
    TopNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.us.getCurrentUser();
        this.ms.getUnreadMails().subscribe(function (mails) {
            _this.m = [];
            _this.mails = [];
            _this.m = mails;
            var momentUtil = new __WEBPACK_IMPORTED_MODULE_0__moment_util__["a" /* MomentUtil */]();
            for (var i = 0; i < _this.m.length; i++) {
                var mm = _this.m[i];
                var m = new __WEBPACK_IMPORTED_MODULE_3__widgets_single_mail_single_mail_component__["b" /* SingleMail */]();
                m.from = mm.from.firstName;
                m.excerpt = mm.subject;
                m.objectId = mm.objectId;
                m.createdAt = momentUtil.timeDateAgo(mm.createdAt);
                _this.mails.push(m);
            }
        }, function (err) { return console.log(err.json()); });
    };
    TopNavComponent.prototype.logout = function () {
        this.us.logout();
    };
    TopNavComponent.prototype.toggle = function () {
        var body = jQuery('body');
        var bodyposition = body.css('position');
        if (bodyposition != 'relative') {
            if (!body.hasClass('sidebar-collapsed')) {
                body.addClass('sidebar-collapsed');
                jQuery('.side-navigation ul').attr('style', '');
            }
            else {
                body.removeClass('sidebar-collapsed chat-view');
                jQuery('.side-navigation li.active ul').css({ display: 'block' });
            }
        }
        else {
            if (body.hasClass('sidebar-open'))
                body.removeClass('sidebar-open');
            else
                body.addClass('sidebar-open');
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_js_helpers__["d" /* adjustMainContentHeight */])();
        }
    };
    return TopNavComponent;
}());
TopNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-top-nav',
        template: __webpack_require__(470),
        styles: [__webpack_require__(425)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_mail_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_mail_service__["a" /* MailService */]) === "function" && _b || Object])
], TopNavComponent);

var _a, _b;
//# sourceMappingURL=top-nav.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(342);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GravatarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GravatarComponent = (function () {
    function GravatarComponent(us) {
        this.us = us;
    }
    GravatarComponent.prototype.ngOnInit = function () {
    };
    return GravatarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]) === "function" && _a || Object)
], GravatarComponent.prototype, "user", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], GravatarComponent.prototype, "userId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], GravatarComponent.prototype, "width", void 0);
GravatarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-gravatar',
        template: __webpack_require__(471),
        styles: [__webpack_require__(426)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], GravatarComponent);

var _a, _b;
//# sourceMappingURL=gravatar.component.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__single_mail_single_mail_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__moment_util__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailBoxItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MailBoxItemComponent = (function () {
    function MailBoxItemComponent(us) {
        this.us = us;
        this.class = "";
        this.momentUtil = new __WEBPACK_IMPORTED_MODULE_2__moment_util__["a" /* MomentUtil */]();
        this.currentUser = us.getCurrentUser();
    }
    MailBoxItemComponent.prototype.getCreatedAt = function (date) {
        return this.momentUtil.timeDateAgo(date);
    };
    MailBoxItemComponent.prototype.ngOnInit = function () {
        // console.log(this.mail);
    };
    return MailBoxItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__single_mail_single_mail_component__["b" /* SingleMail */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__single_mail_single_mail_component__["b" /* SingleMail */]) === "function" && _a || Object)
], MailBoxItemComponent.prototype, "mail", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("avi-width"),
    __metadata("design:type", Number)
], MailBoxItemComponent.prototype, "avatarWidth", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MailBoxItemComponent.prototype, "class", void 0);
MailBoxItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tr',
        template: __webpack_require__(472),
        styles: [__webpack_require__(427)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], MailBoxItemComponent);

var _a, _b;
//# sourceMappingURL=mail-box-item.component.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blank_blank_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basic_basic_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LayoutsModule = (function () {
    function LayoutsModule() {
    }
    return LayoutsModule;
}());
LayoutsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__blank_blank_component__["a" /* BlankComponent */], __WEBPACK_IMPORTED_MODULE_3__basic_basic_component__["a" /* BasicComponent */]]
    })
], LayoutsModule);

//# sourceMappingURL=layouts.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_mail_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MailResolver = (function () {
    function MailResolver(ms) {
        this.ms = ms;
    }
    MailResolver.prototype.resolve = function (route) {
        return this.ms.getUnreadMails();
    };
    return MailResolver;
}());
MailResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_mail_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_mail_service__["a" /* MailService */]) === "function" && _a || Object])
], MailResolver);

var _a;
//# sourceMappingURL=mail-resolver.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncUserIdValidator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AsyncUserIdValidator = (function () {
    function AsyncUserIdValidator(us) {
        this.us = us;
    }
    AsyncUserIdValidator.prototype.validate = function (c) {
        console.log(c.value);
        throw new Error('Method not implemented.');
    };
    return AsyncUserIdValidator;
}());
AsyncUserIdValidator = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], AsyncUserIdValidator);

var _a;
//# sourceMappingURL=userid-validator.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomOption; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CustomOption = (function (_super) {
    __extends(CustomOption, _super);
    function CustomOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animate = 'flyRight'; // you can pass any options to override defaults
        _this.newestOnTop = false;
        _this.showCloseButton = true;
        _this.dismiss = 'auto';
        return _this;
    }
    return CustomOption;
}(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__["ToastOptions"]));

//# sourceMappingURL=toastr.options.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_services_route_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_services_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__toastr_options__ = __webpack_require__(345);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_toastr__["ToastModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot()
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_8__auth_component__["a" /* AuthComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_9__common_services_route_service__["a" /* RouteService */], __WEBPACK_IMPORTED_MODULE_10__common_services_user_service__["a" /* UserService */], { provide: __WEBPACK_IMPORTED_MODULE_6_ng2_toastr__["ToastOptions"], useClass: __WEBPACK_IMPORTED_MODULE_11__toastr_options__["a" /* CustomOption */] }]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_guards_authenticated_guard__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_components_components_module__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_services_route_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_services_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_resolvers_mail_resolver__ = __webpack_require__(343);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__common_components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__common_guards_authenticated_guard__["a" /* AuthenticatedGuard */], __WEBPACK_IMPORTED_MODULE_6__common_services_route_service__["a" /* RouteService */], __WEBPACK_IMPORTED_MODULE_7__common_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_8__common_resolvers_mail_resolver__["a" /* MailResolver */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_route_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LandingModule = (function () {
    function LandingModule() {
    }
    return LandingModule;
}());
LandingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__landing_component__["a" /* LandingComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__common_services_route_service__["a" /* RouteService */]]
    })
], LandingModule);

//# sourceMappingURL=landing.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_tag_input__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_tag_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_tag_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mail_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inbox_inbox_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__outbox_outbox_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__read_mail_read_mail_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_services_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_services_mail_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_services_route_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_resolvers_inbox_resolver__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__common_resolvers_mail_item_resolver__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__common_resolvers_outbox_resolver__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__common_components_widgets_widgets_module__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__compose_compose_component__ = __webpack_require__(120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var MailModule = (function () {
    function MailModule() {
    }
    return MailModule;
}());
MailModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_17__common_components_widgets_widgets_module__["a" /* WidgetsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_tag_input__["TagInputModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__["CKEditorModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_7__mail_component__["a" /* MailComponent */], __WEBPACK_IMPORTED_MODULE_8__inbox_inbox_component__["a" /* InboxComponent */], __WEBPACK_IMPORTED_MODULE_9__outbox_outbox_component__["a" /* OutboxComponent */], __WEBPACK_IMPORTED_MODULE_10__read_mail_read_mail_component__["a" /* ReadMailComponent */], __WEBPACK_IMPORTED_MODULE_18__compose_compose_component__["a" /* ComposeComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_12__common_services_mail_service__["a" /* MailService */], __WEBPACK_IMPORTED_MODULE_11__common_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_13__common_services_route_service__["a" /* RouteService */], __WEBPACK_IMPORTED_MODULE_14__common_resolvers_inbox_resolver__["a" /* InboxResolve */], __WEBPACK_IMPORTED_MODULE_16__common_resolvers_outbox_resolver__["a" /* OutboxResolve */], __WEBPACK_IMPORTED_MODULE_15__common_resolvers_mail_item_resolver__["a" /* MailItemResolve */]]
    })
], MailModule);

//# sourceMappingURL=mail.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_layouts_layouts_module__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_module__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__landing_landing_module__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mail_mail_module__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_components_widgets_widgets_module__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ViewsModule = (function () {
    function ViewsModule() {
    }
    return ViewsModule;
}());
ViewsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__common_layouts_layouts_module__["a" /* LayoutsModule */],
            __WEBPACK_IMPORTED_MODULE_2__auth_auth_module__["a" /* AuthModule */],
            __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_module__["a" /* DashboardModule */],
            __WEBPACK_IMPORTED_MODULE_5__landing_landing_module__["a" /* LandingModule */],
            __WEBPACK_IMPORTED_MODULE_6__mail_mail_module__["a" /* MailModule */],
            __WEBPACK_IMPORTED_MODULE_7__common_components_widgets_widgets_module__["a" /* WidgetsModule */]
        ],
        declarations: []
    })
], ViewsModule);

//# sourceMappingURL=views.module.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = adjustMainContentHeight;
/* harmony export (immutable) */ __webpack_exports__["a"] = visibleSubMenuClose;
/* harmony export (immutable) */ __webpack_exports__["b"] = toggleSidebar;
/* harmony export (immutable) */ __webpack_exports__["c"] = hover;
function adjustMainContentHeight() {
    // console.log("Did something");
    // Adjust main content height
    var docHeight = jQuery(document).height();
    if (docHeight > jQuery('.body-content').height())
        jQuery('.body-content').height(docHeight);
}
function visibleSubMenuClose() {
    jQuery('.menu-list').each(function () {
        var t = jQuery(this);
        if (t.hasClass('nav-active')) {
            t.find('> ul').slideUp(300, function () {
                t.removeClass('nav-active');
            });
        }
    });
}
function toggleSidebar() {
    jQuery('.menu-list > a').click(function () {
        var parent = jQuery(this).parent();
        var sub = parent.find('> ul');
        if (!jQuery('body').hasClass('sidebar-collapsed')) {
            if (sub.is(':visible')) {
                sub.slideUp(300, function () {
                    parent.removeClass('nav-active');
                    jQuery('.body-content').css({ height: '' });
                    adjustMainContentHeight();
                });
            }
            else {
                visibleSubMenuClose();
                parent.addClass('nav-active');
                sub.slideDown(300, function () {
                    adjustMainContentHeight();
                });
            }
        }
        return false;
    });
}
function hover() {
    jQuery('.side-navigation > li').hover(function () {
        jQuery(this).addClass('nav-hover');
    }, function () {
        jQuery(this).removeClass('nav-hover');
    });
}
//# sourceMappingURL=app.js.helpers.js.map

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".loading-overlay {\n  display:block;\n\twidth: 100%;\n\theight: 100%;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tbackground: #fefefe;\n\tz-index: 100000;\n  opacity: 1;\n}\n\n.loading-overlay > md-spinner{\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -25px 0 0 -25px;\n  z-index: 100001;\n}\n\n.loading-overlay-off {\n  z-index: -1;\n  opacity: 0;\n}\n\n.loading-overlay-off > md-spinner {\n  opacity: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports
exports.i(__webpack_require__(407), "");

// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "ul.child-list>a {\n  color: #fff;\n  font-size: 13px;\n  display: block;\n  padding: 10px 5px 10px 50px;\n  transition: all 0.2s ease-out 0s;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".notification-menu .info-number {\n    padding: 0px 18px;\n    height: 60px;\n    line-height: 60px;\n    font-size: 16px;\n    background: none;\n    color: #8b8b8b;\n    border-color: #fff;\n    transition: all 0.2s ease-out 0s;\n    float: left;\n}\n\n.info-number .badge {\n    font-size: 11px;\n    font-weight: normal;\n    line-height: 13px;\n    padding: 2px 6px;\n    position: absolute;\n    right: 5px;\n    top: 10px;\n}\n\n.bg-primary, .info-number .bg-primary {\n    color: #fff;\n    background-color: #9c78cd;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "img {\n  border-radius: 50%;\n  margin-right: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "td.inbox-small-cells, td.view-message {\n  border-top: none;\n  vertical-align: middle;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".login-logo > img {\n  width: 125px;\n  height: 125px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".tag-input {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n\tposition: relative;\n\ttransition: all 0.25s;\n\tpadding: 0.25rem 0;\n\tmin-height: 32px;\n\tcursor: text;\n\tborder-bottom: 2px solid #efefef;\n}\n\n.tag-input__text-input {\n\tdisplay: block;\n\twidth: 100%;\n\tborder: none;\n\tpadding: 0 0.5rem;\n\theight: 38px;\n\tfont-size: 1em;\n\tfont-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\n\n.tag-input:focus, .tag-input__text-input:focus {\n\toutline: 0;\n}\n\n.tag-input.tag-input--dropping {\n\topacity: 0.7;\n}\n\n.tag-input.tag-input--focused {\n\tborder-bottom: 2px solid #2196F3;\n}\n\n.tag-input.tag-input--invalid {\n\tborder-bottom: 2px solid #f44336;\n}\n\n.tag-input.tag-input--loading {\n\tborder: none;\n}\n\n.tag-input.tag-input--disabled {\n\topacity: 0.5;\n\tcursor: not-allowed;\n}\n\n.tag-input form {\n\tmargin: 0.1em 0;\n}\n\n.tag-input .tags-container {\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".avatar > span {\n  padding: 10px;\n  font-size: x-large;\n  letter-spacing: 3px;\n  text-transform: capitalize;\n}\n\nh4.title {\n  text-transform: capitalize;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 139,
	"./af.js": 139,
	"./ar": 146,
	"./ar-dz": 140,
	"./ar-dz.js": 140,
	"./ar-kw": 141,
	"./ar-kw.js": 141,
	"./ar-ly": 142,
	"./ar-ly.js": 142,
	"./ar-ma": 143,
	"./ar-ma.js": 143,
	"./ar-sa": 144,
	"./ar-sa.js": 144,
	"./ar-tn": 145,
	"./ar-tn.js": 145,
	"./ar.js": 146,
	"./az": 147,
	"./az.js": 147,
	"./be": 148,
	"./be.js": 148,
	"./bg": 149,
	"./bg.js": 149,
	"./bn": 150,
	"./bn.js": 150,
	"./bo": 151,
	"./bo.js": 151,
	"./br": 152,
	"./br.js": 152,
	"./bs": 153,
	"./bs.js": 153,
	"./ca": 154,
	"./ca.js": 154,
	"./cs": 155,
	"./cs.js": 155,
	"./cv": 156,
	"./cv.js": 156,
	"./cy": 157,
	"./cy.js": 157,
	"./da": 158,
	"./da.js": 158,
	"./de": 161,
	"./de-at": 159,
	"./de-at.js": 159,
	"./de-ch": 160,
	"./de-ch.js": 160,
	"./de.js": 161,
	"./dv": 162,
	"./dv.js": 162,
	"./el": 163,
	"./el.js": 163,
	"./en-au": 164,
	"./en-au.js": 164,
	"./en-ca": 165,
	"./en-ca.js": 165,
	"./en-gb": 166,
	"./en-gb.js": 166,
	"./en-ie": 167,
	"./en-ie.js": 167,
	"./en-nz": 168,
	"./en-nz.js": 168,
	"./eo": 169,
	"./eo.js": 169,
	"./es": 171,
	"./es-do": 170,
	"./es-do.js": 170,
	"./es.js": 171,
	"./et": 172,
	"./et.js": 172,
	"./eu": 173,
	"./eu.js": 173,
	"./fa": 174,
	"./fa.js": 174,
	"./fi": 175,
	"./fi.js": 175,
	"./fo": 176,
	"./fo.js": 176,
	"./fr": 179,
	"./fr-ca": 177,
	"./fr-ca.js": 177,
	"./fr-ch": 178,
	"./fr-ch.js": 178,
	"./fr.js": 179,
	"./fy": 180,
	"./fy.js": 180,
	"./gd": 181,
	"./gd.js": 181,
	"./gl": 182,
	"./gl.js": 182,
	"./gom-latn": 183,
	"./gom-latn.js": 183,
	"./he": 184,
	"./he.js": 184,
	"./hi": 185,
	"./hi.js": 185,
	"./hr": 186,
	"./hr.js": 186,
	"./hu": 187,
	"./hu.js": 187,
	"./hy-am": 188,
	"./hy-am.js": 188,
	"./id": 189,
	"./id.js": 189,
	"./is": 190,
	"./is.js": 190,
	"./it": 191,
	"./it.js": 191,
	"./ja": 192,
	"./ja.js": 192,
	"./jv": 193,
	"./jv.js": 193,
	"./ka": 194,
	"./ka.js": 194,
	"./kk": 195,
	"./kk.js": 195,
	"./km": 196,
	"./km.js": 196,
	"./kn": 197,
	"./kn.js": 197,
	"./ko": 198,
	"./ko.js": 198,
	"./ky": 199,
	"./ky.js": 199,
	"./lb": 200,
	"./lb.js": 200,
	"./lo": 201,
	"./lo.js": 201,
	"./lt": 202,
	"./lt.js": 202,
	"./lv": 203,
	"./lv.js": 203,
	"./me": 204,
	"./me.js": 204,
	"./mi": 205,
	"./mi.js": 205,
	"./mk": 206,
	"./mk.js": 206,
	"./ml": 207,
	"./ml.js": 207,
	"./mr": 208,
	"./mr.js": 208,
	"./ms": 210,
	"./ms-my": 209,
	"./ms-my.js": 209,
	"./ms.js": 210,
	"./my": 211,
	"./my.js": 211,
	"./nb": 212,
	"./nb.js": 212,
	"./ne": 213,
	"./ne.js": 213,
	"./nl": 215,
	"./nl-be": 214,
	"./nl-be.js": 214,
	"./nl.js": 215,
	"./nn": 216,
	"./nn.js": 216,
	"./pa-in": 217,
	"./pa-in.js": 217,
	"./pl": 218,
	"./pl.js": 218,
	"./pt": 220,
	"./pt-br": 219,
	"./pt-br.js": 219,
	"./pt.js": 220,
	"./ro": 221,
	"./ro.js": 221,
	"./ru": 222,
	"./ru.js": 222,
	"./sd": 223,
	"./sd.js": 223,
	"./se": 224,
	"./se.js": 224,
	"./si": 225,
	"./si.js": 225,
	"./sk": 226,
	"./sk.js": 226,
	"./sl": 227,
	"./sl.js": 227,
	"./sq": 228,
	"./sq.js": 228,
	"./sr": 230,
	"./sr-cyrl": 229,
	"./sr-cyrl.js": 229,
	"./sr.js": 230,
	"./ss": 231,
	"./ss.js": 231,
	"./sv": 232,
	"./sv.js": 232,
	"./sw": 233,
	"./sw.js": 233,
	"./ta": 234,
	"./ta.js": 234,
	"./te": 235,
	"./te.js": 235,
	"./tet": 236,
	"./tet.js": 236,
	"./th": 237,
	"./th.js": 237,
	"./tl-ph": 238,
	"./tl-ph.js": 238,
	"./tlh": 239,
	"./tlh.js": 239,
	"./tr": 240,
	"./tr.js": 240,
	"./tzl": 241,
	"./tzl.js": 241,
	"./tzm": 243,
	"./tzm-latn": 242,
	"./tzm-latn.js": 242,
	"./tzm.js": 243,
	"./uk": 244,
	"./uk.js": 244,
	"./ur": 245,
	"./ur.js": 245,
	"./uz": 247,
	"./uz-latn": 246,
	"./uz-latn.js": 246,
	"./uz.js": 247,
	"./vi": 248,
	"./vi.js": 248,
	"./x-pseudo": 249,
	"./x-pseudo.js": 249,
	"./yo": 250,
	"./yo.js": 250,
	"./zh-cn": 251,
	"./zh-cn.js": 251,
	"./zh-hk": 252,
	"./zh-hk.js": 252,
	"./zh-tw": 253,
	"./zh-tw.js": 253
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 448;


/***/ }),

/***/ 465:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<div #spinnerElement>\n  <!-- md-spinner is short for <md-progress-circle mode=\"indeterminate\"></md-progress-circle> -->\n  <md-spinner></md-spinner>\n</div>\n"

/***/ }),

/***/ 466:
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ 467:
/***/ (function(module, exports) {

module.exports = "<p>\n  full-calendar works!\n</p>\n"

/***/ }),

/***/ 468:
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"sidebar-left\">\n    <div class=\"logo dark-logo-bg visible-xs- visible-sm-\">\n      <a routerLink=\"/dashboard\">\n        <img src=\"../vendor/img/logo.png\" width=\"32\" alt=\"\">\n        <span class=\"brand-name\">Schoolpop</span>\n      </a>\n    </div>\n    <div class=\"sidebar-left-info\">\n      <div class=\"search-field\"></div>\n      <ul class=\"nav nav-pills nav-stacked side-navigation\">\n        <li>\n          <h3 class=\"navigation-title\">Navigation</h3>\n        </li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/dashboard\"><i class=\"fa fa-home\"></i> <span>Dashboard</span></a></li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/add-class\"><i class=\"fa fa-home\"></i> <span>Add Class</span></a></li>\n        <li class=\"menu-list\">\n          <a #s><i class=\"fa fa-laptop\"></i>  <span>Students</span></a>\n          <ul class=\"child-list\">\n            <li>\n              <a>Enrollment</a>\n            </li>\n            <li>\n              <a>Attendance</a>\n            </li>\n            <li>\n              <a>Reports</a>\n            </li>\n            <li>\n              <a>Demographics</a>\n            </li>\n          </ul>\n        </li>\n        <li class=\"menu-list\">\n          <a #s><i class=\"fa fa-book\"></i>  <span>Parents</span></a>\n          <ul class=\"child-list\">\n            <li>\n              <a>View Parents</a>\n            </li>\n          </ul>\n        </li>\n        <li>\n          <h3 class=\"navigation-title\">Others</h3>\n        </li>\n      </ul>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 469:
/***/ (function(module, exports) {

module.exports = "<a class=\"toggle-btn\"><i class=\"fa fa-outdent\"></i></a>"

/***/ }),

/***/ 470:
/***/ (function(module, exports) {

module.exports = "<div class=\"header-section\">\n  <!--logo and logo icon start-->\n  <div class=\"logo dark-logo-bg hidden-xs hidden-sm\">\n    <a routerLink=\"/\">\n      <img src=\"../vendor/img/logo.png\" width=\"32\" alt=\"\">\n      <!--<i class=\"fa fa-maxcdn\"></i>-->\n      <span class=\"brand-name\">Schoolpop</span>\n    </a>\n  </div>\n  <div class=\"icon-logo dark-logo-bg hidden-xs hidden-sm\">\n    <a routerLink=\"/\">\n      <img src=\"../vendor/img/logo.png\" width=\"32\" alt=\"\">\n\n      <!--<span class=\"brand-name\">Schoolpop</span>-->\n    </a>\n  </div>\n  <!--logo and logo icon end-->\n\n  <!--toggle button start-->\n  <app-toggle-button (click)=\"toggle()\"></app-toggle-button>\n  <!--toggle button end-->\n  <div class=\"notification-wrap\">\n    <div class=\"left-notification\">\n      <ul class=\"notification-menu\">\n        <li class=\"d-none\">\n          <a class=\"btn btn-default dropdown-toggle info-number\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-envelope-o\"></i>\n            <span class=\"badge bg-primary\">{{m.length }}</span>\n          </a>\n          <div class=\"dropdown-menu dropdown-title\">\n\n            <div class=\"title-row\">\n              <h5 class=\"title purple\">\n                {{mails.length | i18nPlural: mailMapping}}\n              </h5>\n              <a [routerLink]=\"['/mail', 'inbox']\" class=\"btn-primary btn-view-all\">View all</a>\n            </div>\n\n            <div class=\"notification-list mail-list\">\n              <!-- TODO: Turn this into a component and loop it -->\n              <ng-container *ngFor=\"let mail of mails;  let i=index\">\n                \n                <app-single-mail *ngIf=\"i<=6\" [mail]=\"mail\"></app-single-mail>\n              </ng-container>\n            </div>\n\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div class=\"right-notification\">\n      <ul class=\"notification-menu\">\n        <li>\n          <form class=\"search-content\" action=\"index.html\" method=\"post\">\n            <input type=\"text\" class=\"form-control\" name=\"keyword\" placeholder=\"Search...\">\n          </form>\n        </li>\n        <li>\n          <a class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n            <app-gravatar [user]=\"user\" [width]=\"32\"></app-gravatar>\n            {{user.firstName}} {{user.lastName}}\n            <span class=\" fa fa-angle-down\"></span>\n          </a>\n          <ul class=\"dropdown-menu dropdown-usermenu purple pull-right\">\n            <li><a>  Profile</a></li>\n            <li>\n              <a>\n                <span>Settings</span>\n              </a>\n            </li>\n            <li>\n              <a>\n                <span class=\"label bg-info pull-right\">new</span>\n                Help\n              </a>\n            </li>\n            <li>\n              <a (click)=\"logout()\">Logout</a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 471:
/***/ (function(module, exports) {

module.exports = "<img *ngIf=\"user && user.img; else g\" src=\"{{user.img.url}}\" [width]=\"width\" alt=\"\">\n\n<ng-template #g>\n  <img src=\"assets/img/avatar-mini.jpg\" [width]=\"width\" alt=\"\">\n</ng-template>\n"

/***/ }),

/***/ 472:
/***/ (function(module, exports) {

module.exports = "<td class=\"inbox-small-cells\">\n  <label class=\"checkbox-custom check-success\">\n      <input type=\"checkbox\" value=\"c1\" id=\"c1\"> <label for=\"c1\"> </label>\n  </label>\n</td>\n<!--<td class=\"inbox-small-cells\"><i class=\"fa fa-star inbox-started\"></i></td>-->\n<ng-container *ngIf=\"currentUser.objectId !== mail.from.objectId; else s\">\n  <td>\n    <a href=\"#\" class=\"avatar\">\n      <span class=\"bg-success\">{{mail.from.firstName | slice:0:1}} {{mail.from.lastName | slice:0:1}}</span>\n    </a>\n  </td>\n  <td class=\"view-message  dont-show\" >{{mail.from.firstName}} {{mail.from.lastName}}</td>\n</ng-container>\n<ng-template #s>\n  <td>\n    <a href=\"#\" class=\"avatar\">\n      <span class=\"bg-success\">{{mail.to.firstName | slice:0:1}} {{mail.to.lastName | slice:0:1}}</span>\n    </a>\n  </td>\n  <td class=\"view-message  dont-show\">{{mail.to.firstName}} {{mail.to.lastName}}</td>\n</ng-template>\n<td class=\"view-message \">{{mail.subject}}</td>\n<td class=\"view-message  inbox-small-cells\"><i class=\"fa fa-paperclip\"></i></td>\n<td class=\"view-message  text-right\">{{getCreatedAt(mail.createdAt)}}</td>"

/***/ }),

/***/ 473:
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/mail', mail.objectId]\" class=\"single-mail\">\n  <span class=\"icon bg-primary\">\n    {{mail.from | slice:0:1}}\n  </span>\n  <strong>{{mail.from}}</strong>\n  <small> {{mail.createdAt}}</small>\n  <p>\n    <small>{{mail.excerpt}}</small>\n  </p>\n</a>\n"

/***/ }),

/***/ 474:
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n<div class=\"body-content\">\n  <app-top-nav></app-top-nav>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 475:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 476:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-logo\">\n  <img src=\"assets/img/logo.png\" alt=\"\" />\n</div>\n<h2 class=\"form-heading\">login</h2>\n<div class=\"container log-row\">\n  <form class=\"form-signin\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"authForm\" novalidate>\n    <div class=\"login-wrap\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Username\" formControlName=\"username\" autofocus>\n      <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n      <button [disabled]=\"!authForm.valid || isLoading\" class=\"btn btn-lg btn-success btn-block\" type=\"submit\">LOGIN</button>\n      <label class=\"checkbox-custom check-success\">\n        <input type=\"checkbox\" value=\"remember-me\" id=\"checkbox1\"> <label for=\"checkbox1\">Remember me</label>\n        <a class=\"pull-right\" (click)=\"staticModal.show()\"> Forgot Password?</a>\n      </label>\n\n      <div class=\"registration\">\n        Don't have an account yet?\n        <a class=\"\" href=\"registration.html\">\n          Create an account\n        </a>\n      </div>\n    </div>\n  </form>\n</div>\n\n<!-- Modal -->\n<div bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" aria-hidden=\"true\" aria-labelledby=\"myModalLabel\" role=\"dialog\" tabindex=\"-1\" id=\"forgotPass\" class=\"modal fade\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"staticModal.hide()\" aria-hidden=\"true\" (click)=\"staticModal.hide()\">&times;</button>\n        <h4 class=\"modal-title\">Forgot Password ?</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Enter your e-mail address below to reset your password.</p>\n        <input type=\"text\" name=\"email\" placeholder=\"Email\" autocomplete=\"off\" class=\"form-control placeholder-no-fix\">\n\n      </div>\n      <div class=\"modal-footer\">\n        <button (click)=\"staticModal.hide()\" class=\"btn btn-default\" type=\"button\">Cancel</button>\n        <button class=\"btn btn-success\" type=\"button\">Submit</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- modal -->"

/***/ }),

/***/ 477:
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ 478:
/***/ (function(module, exports) {

module.exports = "<p>\n  landing works!\n</p>\n"

/***/ }),

/***/ 479:
/***/ (function(module, exports) {

module.exports = "<div class=\"inbox-body\">\n  <div class=\"compose-mail\">\n    <form class=\"form-horizontal\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"to\" class=\"col-sm-1 control-label\">To</label>\n        <div class=\"col-sm-11\">\n          <!--<input type=\"text\" tabindex=\"1\" id=\"to\" class=\"form-control\">-->\n          <tag-input  \n                      name=\"userId\"\n                      tabindex=\"1\" id=\"to\" \n                      [(ngModel)]=\"itemsAsObjects\"\n                      (onAdd)=\"onAdd($event)\"\n                      [identifyBy]=\"'objectId'\"\n                      [displayBy]=\"'name'\"\n                      [separatorKeys]=\"[32, 188]\"\n                      [placeholder]=\"'Enter user id'\"\n                      [secondaryPlaceholder]=\"'Enter user id'\"></tag-input>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"subject\" class=\"col-sm-1 control-label\">Subject</label>\n        <div class=\"col-sm-11\">\n          <div class=\"tag-input\" #subjectWrapper>\n              <div class=\"tag-input__text-input\">\n                <input \n                      name=\"subject\"\n                      (focus)=\"focus()\" \n                      (focusout)=\"focusOut()\" \n                      [(ngModel)]=\"subject\" \n                      required \n                      type=\"text\" tabindex=\"1\" \n                      id=\"subject\" \n                      placeholder=\"Subject\"\n                      class=\"tag-input__text-input\" >\n              </div>\n            <!--<div class=\"tags-container\">\n            </div>-->\n          </div>\n        </div>\n      </div>\n      <div class=\"compose-editor form-group\">\n        <label for=\"message\" class=\"col-sm-1 control-label\">Message</label>\n        <ckeditor name=\"message\" \n                  class=\"col-sm-11\" \n                  debounce=\"500\"\n                  [(ngModel)]=\"ckeditorContent\">\n        </ckeditor>\n      </div>\n    </form>\n  </div>\n  <div class=\"compose-btn pull-right\">\n    <button class=\"btn btn-success\" (click)=\"onSubmit()\">\n      Send Message\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ 480:
/***/ (function(module, exports) {

module.exports = "<div class=\"inbox-body no-pad\">\n  <table class=\"table table-inbox table-hover\">\n    <tbody>\n      <tr [mail]=\"mail\" *ngFor=\"let mail of mails;  let i=index\" [avi-width]=\"32\" [ngClass]=\"!mail.isRead ? 'unread': ''\" (click)=\"navigateToMail(mail.objectId)\"></tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ 481:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper no-pad\">\n  <div class=\"mail-box\">\n    <aside class=\"sm-side\">\n      <div class=\"m-title\">\n        <h3>Inbox</h3>\n        <span>{{unReadCount}} unread mail</span>\n      </div>\n      <div class=\"inbox-body\">\n        <a [routerLink]=\"['/mail', 'compose']\" class=\"btn btn-compose\">\n          Compose\n        </a>\n      </div>\n      <ul class=\"inbox-nav inbox-divider\">\n        <li>\n          <a [routerLinkActive]=\"['active']\" [routerLink]=\"['/mail','inbox']\">\n            <i class=\"fa fa-inbox\"></i> Inbox\n            <span class=\"label label-danger pull-right\">{{unReadCount}}</span>\n          </a>\n        </li>\n        <li>\n          <a [routerLinkActive]=\"['active']\" [routerLink]=\"['/mail','outbox']\">\n            <i class=\"fa fa-paper-plane\"></i> Sent\n          </a>\n        </li>\n      </ul>\n    </aside>\n    <aside class=\"lg-side\" style=\"height: 1200px;\">\n      <div class=\"inbox-head\">\n        <div class=\"mail-option\">\n\n          <div class=\"pull-left all-check\">\n            <label class=\"checkbox-custom check-success\">\n              <input type=\"checkbox\" value=\"check-all\" id=\"checkbox1\"> <label for=\"checkbox1\"> </label>\n            </label>\n          </div>\n\n          <div class=\"btn-group\">\n            <a class=\"btn mini tooltips\" href=\"#\" data-toggle=\"dropdown\" data-placement=\"top\" data-original-title=\"Refresh\">\n              <i class=\" fa fa-refresh\"></i>\n            </a>\n          </div>\n\n          <ul class=\"unstyled inbox-pagination\">\n            <li>\n              <a href=\"#\" class=\"np-btn\"><i class=\"fa fa-angle-left  pagination-left\"></i></a>\n            </li>\n            <li>\n              <a href=\"#\" class=\"np-btn\"><i class=\"fa fa-angle-right pagination-right\"></i></a>\n            </li>\n          </ul>\n\n        </div>\n      </div>\n      <router-outlet></router-outlet>\n    </aside>\n  </div>\n</div>"

/***/ }),

/***/ 482:
/***/ (function(module, exports) {

module.exports = "<div class=\"inbox-body no-pad\">\n  <table class=\"table table-inbox table-hover\">\n    <tbody>\n      <tr [mail]=\"mail\" *ngFor=\"let mail of mails;  let i=index\" [avi-width]=\"32\" (click)=\"navigateToMail(mail.objectId)\"></tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ 483:
/***/ (function(module, exports) {

module.exports = "<div class=\"inbox-body\">\n\n  <div class=\"heading-inbox row\">\n    <div class=\"col-md-12\">\n      <h4 class=\"title\"> {{mail.subject}}</h4>\n    </div>\n  </div>\n\n  <div class=\"sender-info\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-xs-12\">\n        <div class=\"pull-left\">\n          <a class=\"avatar\">\n            <span class=\"bg-success\">{{mail.from.firstName | slice:0:1}}{{mail.from.lastName | slice:0:1}}</span>\n          </a>\n        </div>\n        <div class=\"s-info\" *ngIf=\"currentUser.objectId !== mail.from.objectId; else s\">\n          <strong>{{mail.from.firstName}} {{mail.from.lastName}}</strong>\n          <span>[{{mail.from.email}}]</span>\n        </div>\n\n        <ng-template #s>\n          <div class=\"s-info\">\n            <strong>{{mail.to.firstName}} {{mail.to.lastName}}</strong>\n            <span>[{{mail.to.email}}]</span>\n          </div>\n        </ng-template>\n\n      </div>\n      <div class=\"col-md-6 col-xs-12\">\n        <div class=\"compose-btn pull-right\">\n          <a class=\"btn btn-sm btn-default\" href=\"inbox-compose.html\"><i class=\"fa fa-reply\"></i> Reply</a>\n          <button title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" type=\"button\" data-original-title=\"Print\" class=\"btn btn-default  btn-sm tooltips\"><i class=\"fa fa-print\"></i> </button>\n          <button title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Trash\" class=\"btn btn-default btn-sm tooltips\"><i class=\"fa fa-trash-o\"></i></button>\n        </div>\n        <p class=\"date pull-right\"> {{getDateFormatted(mail.createdAt)}} ({{getCreatedAt(mail.createdAt)}}) </p>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"view-mail\" [innerHTML]=\"mail?.message?.text\"></div>\n\n  <div *ngIf=\"mail.message.attachment\" class=\"attachment-mail\">\n    <h5> Attachments </h5>\n    <ul>\n      <li>\n        <a href=\"#\" class=\"atch-thumb\">\n          <img src=\"../vendor/img/img-attachment.jpg\">\n        </a>\n\n        <div class=\"file-name\">\n          <i class=\"fa fa-download\"></i> Wordflow_Diagram.jpg\n        </div>\n      </li>\n\n      <li>\n        <a href=\"#\" class=\"atch-thumb\">\n          <img src=\"../vendor/img/pdf-attachment.jpg\">\n        </a>\n\n        <div class=\"file-name\">\n          <i class=\"fa fa-download\"></i> pdf-file.jpg\n        </div>\n      </li>\n      <li>\n        <a href=\"#\" class=\"atch-thumb\">\n          <img src=\"../vendor/img/pdf-attachment.jpg\">\n        </a>\n\n        <div class=\"file-name\">\n          <i class=\"fa fa-download\"></i> Diagram.jpg\n        </div>\n      </li>\n\n    </ul>\n  </div>\n\n  <ng-container *ngIf=\"currentUser.objectId !== mail.from.objectId\">\n    <div class=\"reply-mail m-b-20\">\n      <form>\n        <textarea class=\"form-control\" name=\"\" id=\"\" cols=\"30\" rows=\"5\">Reply</textarea>\n      </form>\n    </div>\n    <div class=\"compose-btn pull-right\">\n      <a class=\"btn  btn-success\"> Reply Mail</a>\n    </div>\n  </ng-container>\n\n</div>"

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SingleMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleMailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SingleMail = (function () {
    function SingleMail() {
    }
    return SingleMail;
}());

var SingleMailComponent = (function () {
    function SingleMailComponent() {
    }
    SingleMailComponent.prototype.ngOnInit = function () {
    };
    return SingleMailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", SingleMail)
], SingleMailComponent.prototype, "mail", void 0);
SingleMailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-single-mail',
        template: __webpack_require__(473),
        styles: [__webpack_require__(428)]
    }),
    __metadata("design:paramtypes", [])
], SingleMailComponent);

//# sourceMappingURL=single-mail.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__single_mail_single_mail_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gravatar_gravatar_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mail_box_item_mail_box_item_component__ = __webpack_require__(340);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var WidgetsModule = (function () {
    function WidgetsModule() {
    }
    return WidgetsModule;
}());
WidgetsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__single_mail_single_mail_component__["a" /* SingleMailComponent */], __WEBPACK_IMPORTED_MODULE_6__gravatar_gravatar_component__["a" /* GravatarComponent */], __WEBPACK_IMPORTED_MODULE_7__mail_box_item_mail_box_item_component__["a" /* MailBoxItemComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__single_mail_single_mail_component__["a" /* SingleMailComponent */], __WEBPACK_IMPORTED_MODULE_6__gravatar_gravatar_component__["a" /* GravatarComponent */], __WEBPACK_IMPORTED_MODULE_7__mail_box_item_mail_box_item_component__["a" /* MailBoxItemComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]]
    })
], WidgetsModule);

//# sourceMappingURL=widgets.module.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentUtil; });

var MomentUtil = (function () {
    function MomentUtil() {
    }
    MomentUtil.prototype.timeDateAgo = function (date) {
        var d = __WEBPACK_IMPORTED_MODULE_0_moment__(date);
        return d.fromNow();
    };
    MomentUtil.prototype.format = function (date, format) {
        var d = __WEBPACK_IMPORTED_MODULE_0_moment__(date);
        return d.format(format);
    };
    return MomentUtil;
}());

//# sourceMappingURL=moment.util.js.map

/***/ }),

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(315);


/***/ })

},[754]);
//# sourceMappingURL=main.bundle.js.map