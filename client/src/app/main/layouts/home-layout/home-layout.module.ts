import { SignUpComponent } from '../../user/signup/signup.component';
import { LogInComponent } from '../../user/login/login.component';
import { UserComponent } from '../../user/user.component';
import { HeaderComponent } from '../../components/header/header.component';
import { BodyComponent } from '../../components/body/body.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { UserprofileComponent } from '../../components/userprofile/userprofile.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeLayoutRoutingModule } from './home-layout-routing.module';


@NgModule({
  declarations: [LogInComponent, SignUpComponent,UserComponent,HeaderComponent,BodyComponent,FooterComponent,UserprofileComponent],
  imports: [
    CommonModule,
    HomeLayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeLayoutModule { }
