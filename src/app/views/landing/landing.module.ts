import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { RouteService } from '../../common/services/route.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LandingComponent],
  providers:[RouteService]
})
export class LandingModule { }
