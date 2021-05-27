import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './modules/signup/signup.component';
import {HomeComponent} from './modules/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdduserComponent } from './modules/adduser/adduser.component';
import { AddeventComponent } from './modules/addevent/addevent.component';
import { HeaderComponent } from './modules/header/header.component';
import { CactivateGuard } from './guards/cactivate.guard';
import { AddnewsComponent } from './modules/addnews/addnews.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { FooterComponent } from './modules/footer/footer.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { CalenderComponent } from './modules/calender/calender.component';
import { NewsComponent } from './modules/news/news.component';
import { CommondashboardComponent } from './modules/commondashboard/commondashboard.component';
import { EditnewsComponent } from './modules/editnews/editnews.component';

const routes: Routes = [
  {path:'', redirectTo:'signup', pathMatch:'full'},
  { component: SignupComponent, path: "signup" },
  {path:'home', component: HomeComponent,canActivate: [CactivateGuard]},
  {path:'dashboard', component: DashboardComponent,canActivate: [CactivateGuard]},
  {path:'sidebar', component: SidebarComponent,canActivate: [CactivateGuard]},
  {path:'header', component: HeaderComponent,canActivate: [CactivateGuard]},
  {path:'footer', component: FooterComponent,canActivate: [CactivateGuard]},
  {path:'calender', component: CalenderComponent,canActivate: [CactivateGuard]},
  {path:'news', component: NewsComponent,canActivate: [CactivateGuard]},
  {path:'adduser', component: AdduserComponent,canActivate: [CactivateGuard]},
  {path:'addevent', component: AddeventComponent,canActivate: [CactivateGuard]},
  {path:'addnews', component: AddnewsComponent,canActivate: [CactivateGuard]},
  {path:'commondashboard/editnews/:id', component: EditnewsComponent,canActivate: [CactivateGuard]},
  {path:'commondashboard', component: CommondashboardComponent,canActivate: [CactivateGuard]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }