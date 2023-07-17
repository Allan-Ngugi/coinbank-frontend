import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../../libs/auth/src/lib/auth.guard';

const APP_ROUTES: Route[] = [
  {
    path: '',
    loadChildren: () => import('@coinbank/home').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('@coinbank/auth').then((m) => m.AuthModule),
  },
  {
    path: 'buynft',
    loadChildren: () => import('@coinbank/buynft').then((m) => m.BuynftModule),
    canActivate: [AuthGuard],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
