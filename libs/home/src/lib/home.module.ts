import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AuthModule } from '@coinbank/auth';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, AuthModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
