import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetEmployeeDetailsComponent } from './get-employee-details/get-employee-details.component';
import { RegisterEmployeeDetailsComponent } from './register-employee-details/register-employee-details.component';
import { UpdateEmployeeDetailsComponent } from './update-employee-details/update-employee-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'getDetails', pathMatch: 'full' },
  { path: 'getDetails', component: GetEmployeeDetailsComponent },
  { path: 'register', component: RegisterEmployeeDetailsComponent },
  { path: 'update', component: UpdateEmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
