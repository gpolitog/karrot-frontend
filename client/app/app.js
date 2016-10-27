import angular from "angular";
import uiRouter from "angular-ui-router";
import ngMaterial from "angular-material";
import Common from "./common/common";
import Components from "./components/components";
import AppMaterial from "./app.material";
import "normalize.css";
import "../../node_modules/angular-material/angular-material.css";
import "./fonts/fonts";

import mainLayout from "./layouts/main.html";

angular.module("app", [
  uiRouter,
  ngMaterial,
  Common,
  Components
]).config(($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider) => {
  "ngInject";
  $locationProvider.html5Mode(false).hashPrefix("!");
  $stateProvider
    .state("main", {
      abstract: true,
      url: "",
      template: mainLayout
    });
  $urlRouterProvider.otherwise("/login");
  $httpProvider.defaults.xsrfCookieName = "csrftoken";
  $httpProvider.defaults.xsrfHeaderName = "X-CSRFToken";
})
.config(AppMaterial);
