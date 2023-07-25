import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuynftComponent } from './components/buynft/buynft.component';
import { BuynftRoutingModule } from './components/buynft-routing.module';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FeaturesModule } from '@coinbank/features';

@NgModule({
  imports: [
    CommonModule,
    BuynftRoutingModule,
    OverlayPanelModule,
    ButtonModule,
    FeaturesModule,
  ],
  declarations: [BuynftComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BuynftModule {}
