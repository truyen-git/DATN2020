import { SignUpComponent } from '../../user/signup/signup.component';
import { LogInComponent } from '../../user/login/login.component';
import { UserComponent } from '../../user/user.component';
import { HeaderComponent } from '../../components/header/header.component';
import { UserprofileComponent } from '../../components/userprofile/userprofile.component';
import { BodyComponent } from '../../components/body/body.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../../auth/auth.guard';


const routes: Routes = [
    {
        path: 'header', component: HeaderComponent
    },
    {
        path: 'body', component: BodyComponent
    },
    {
        path: 'userprofile', component: UserprofileComponent,canActivate:[AuthGuard]
    },
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: LogInComponent }]
    },
    {
        path: '', redirectTo: '/body', pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeLayoutRoutingModule { }
