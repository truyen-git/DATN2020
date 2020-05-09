import { SignUpComponent } from '../../user/signup/signup.component';
import { LogInComponent } from '../../user/login/login.component';
import { UserComponent } from '../../user/user.component';
import { HeaderComponent } from '../../components/header/header.component';
import { BodyComponent } from '../../components/body/body.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeLayoutRoutingModule } from './home-layout-routing.module';


@NgModule({
  declarations: [LogInComponent, SignUpComponent,UserComponent,HeaderComponent,BodyComponent,FooterComponent],
  imports: [
    CommonModule,
    HomeLayoutRoutingModule
  ]
})
export class HomeLayoutModule { }
