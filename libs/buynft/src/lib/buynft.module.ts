import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuynftComponent } from './components/buynft/buynft.component';
import { BuynftRoutingModule } from './components/buynft-routing.module';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  imports: [CommonModule, BuynftRoutingModule],
  declarations: [BuynftComponent],
})
export class BuynftModule {}
