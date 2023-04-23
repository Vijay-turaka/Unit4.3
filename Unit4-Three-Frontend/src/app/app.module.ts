import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetEmployeeDetailsComponent } from './get-employee-details/get-employee-details.component';
import { RegisterEmployeeDetailsComponent } from './register-employee-details/register-employee-details.component';
import { UpdateEmployeeDetailsComponent } from './update-employee-details/update-employee-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GetEmployeeDetailsComponent,
    RegisterEmployeeDetailsComponent,
    UpdateEmployeeDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
