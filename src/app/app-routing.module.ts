import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReceivingComponent } from './components/receiving/receiving.component';
import { SearchComponent } from './components/search/search.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '', component: CounterComponent},
  { path: 'counter', component: CounterComponent },
  { path: 'search', component: SearchComponent },
  { path: 'subject', component:ReceivingComponent},
  { path:'curd', component:EmployeeDashboardComponent},
  { path: 'users', 
    children:[
      {path:"", component:UsersComponent},
      {path:":id", component:UserProfileComponent}
    ] 
  },
  { path: '**', component:CounterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
