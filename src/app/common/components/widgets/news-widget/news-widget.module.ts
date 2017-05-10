import { OwlModule } from './../owl-carousel/owl.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { UserService } from '../../../services/user.service';
import { NewsService } from './../../../services/news.service';
import { OwlCarouselComponent } from '../owl-carousel/owl-carousel/owl-carousel.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    OwlModule
  ],
  declarations: [],
  providers:[UserService, NewsService]
})
export class NewsWidgetModule { }
