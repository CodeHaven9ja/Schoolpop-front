import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { ViewsModule } from './views/views.module';
import { RouteService } from './common/services/route.service';
import { MdProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    ViewsModule,
    MdProgressSpinnerModule
  ],
  providers: [RouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
