import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { OwlChildComponent } from './owl-child/owl-child.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OwlChildComponent, OwlCarouselComponent],
  exports: [OwlCarouselComponent]
})
export class OwlModule { }
