import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AuthModule } from '@coinbank/auth';
import { FeaturesModule } from '@coinbank/features';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, AuthModule, FeaturesModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
