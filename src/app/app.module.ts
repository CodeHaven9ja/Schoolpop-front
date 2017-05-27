import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ToastModule, ToastOptions } from 'ng2-toastr';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { ViewsModule } from './views/views.module';
import { RouteService } from './common/services/route.service';
import { MdProgressSpinnerModule } from '@angular/material';
import { CustomOption } from './toastr.options';
import { ParseService } from './common/services/parse.service';
import { ClassesService } from './common/services/classes.service';
import { LoadingService } from './common/services/loading.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    ViewsModule,
    MdProgressSpinnerModule
  ],
  providers: [
    RouteService, 
    { provide: ToastOptions, useClass: CustomOption },
    LoadingService, 
    ParseService, 
    ClassesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
