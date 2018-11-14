import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StartComponent } from './start/start.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ImprintComponent } from './imprint/imprint.component';

// Decorator
@NgModule({
  // View Classes
  declarations: [
    // Directives, Pipes, Components
    AppComponent,
    StartComponent,
    CustomerListComponent,
    ImprintComponent
  ],
  imports: [
    // Module
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
