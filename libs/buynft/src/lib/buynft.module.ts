import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuynftComponent } from './components/buynft/buynft.component';
import { BuynftRoutingModule } from './components/buynft-routing.module';

@NgModule({
  imports: [CommonModule, BuynftRoutingModule],
  declarations: [BuynftComponent],
})
export class BuynftModule {}
