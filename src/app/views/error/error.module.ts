import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { FourOhOneComponent } from './four-oh-one/four-oh-one.component';
import { RouteService } from '../../common/services/route.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FourOhFourComponent, FourOhOneComponent],
  providers: [RouteService]
})
export class ErrorModule { }
