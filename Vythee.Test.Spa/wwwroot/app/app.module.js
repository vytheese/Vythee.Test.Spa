"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var splash_component_1 = require("./splash/splash.component");
var material_1 = require("@angular/material");
var common_2 = require("@angular/common");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            splash_component_1.SplashComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [{ provide: common_2.LocationStrategy, useClass: common_2.HashLocationStrategy }],
        imports: [
            common_1.CommonModule,
            platform_browser_1.BrowserModule,
            material_1.MdProgressSpinnerModule,
            app_routing_1.routing
        ],
        exports: []
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map