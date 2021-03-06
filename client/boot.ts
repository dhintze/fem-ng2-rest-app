import 'core-js';
import 'zone.js/dist/zone-microtask';

import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {
  ROUTER_PROVIDERS,
  Location,
  LocationStrategy,
  HashLocationStrategy} from 'angular2/router';
import {App} from './src/app';

bootstrap(App, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
