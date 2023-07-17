import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginSkeletonComponent } from './components/login-skeleton/login-skeleton.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, HttpClientModule],
  declarations: [SignupComponent, LoginComponent, LoginSkeletonComponent],
})
export class AuthModule {}
