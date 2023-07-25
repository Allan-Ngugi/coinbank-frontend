import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FeaturesModule } from '@coinbank/features';
import { NavbarComponent } from 'libs/features/src/lib/components/navbar/navbar.component';

const HOME_ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(HOME_ROUTES), FeaturesModule],
  exports: [RouterModule, NavbarComponent],
})
export class HomeRoutingModule {}
