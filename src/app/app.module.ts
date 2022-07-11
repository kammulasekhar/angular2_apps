import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { DisplayComponent } from './components/display/display.component';
import { CounterButtonsComponent } from './components/counter-buttons/counter-buttons.component';
import { SendingComponent } from './components/sending/sending.component';
import { ReceivingComponent } from './components/receiving/receiving.component';
import { SearchComponent } from './components/search/search.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UsersComponent } from './components/users/users.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    DisplayComponent,
    CounterButtonsComponent,
    SendingComponent,
    ReceivingComponent,
    SearchComponent,
    MenuComponent,
    UserProfileComponent,
    UsersComponent,
    EmployeeDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
