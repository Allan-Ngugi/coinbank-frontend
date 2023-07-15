import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BuynftComponent } from './buynft/buynft.component';

const BUYNFT_ROUTES: Route[] = [
  {
    path: '',
    component: BuynftComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(BUYNFT_ROUTES)],
  exports: [RouterModule],
})
export class BuynftRoutingModule {}
