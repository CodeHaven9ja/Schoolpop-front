import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankComponent } from './blank/blank.component';
import { BasicComponent } from './basic/basic.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  declarations: [BlankComponent, BasicComponent]
})
export class LayoutsModule { }
