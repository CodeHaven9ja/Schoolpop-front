import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserboxComponent } from './userbox.component';
import { BrowserModule } from '@angular/platform-browser';
import { WidgetsModule } from '../widgets.module';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    WidgetsModule,
    RouterModule,
    TooltipModule.forRoot()
  ],
  declarations: [UserboxComponent],
  exports: [UserboxComponent]
})
export class UserboxModule { }
