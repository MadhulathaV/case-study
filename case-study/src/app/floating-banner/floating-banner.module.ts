import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatingBannerRoutingModule } from './floating-banner-routing.module';
import { FloatingBannerComponent } from './floating-banner.component';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [
    FloatingBannerComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    FloatingBannerRoutingModule
  ]
})
export class FloatingBannerModule { }
