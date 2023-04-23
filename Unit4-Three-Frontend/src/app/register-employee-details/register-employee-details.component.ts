import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-employee-details',
  templateUrl: './register-employee-details.component.html',
  styleUrls: ['./register-employee-details.component.css'],
})
export class RegisterEmployeeDetailsComponent {
  response: any = [];
  constructor(private apiService: ApiService, private routes: Router) {}

  ngOnInit(): void {}

  registerEmployeeDetails(body: any) {
    this.response = this.apiService
      .registerEmployeeDetails(body)
      .subscribe((response: any) => {
        this.response = response?.response;
        console.log('registerEmployeeDetails', this.response);
      });
  }
  Register(
    name: string,
    salary: string,
    grade: string,
    date_of_joining: string,
    last_working_day: string,
    status: string
  ) {
    const body = {
      name: name,
      salary: salary,
      grade: grade,
      date_of_joining: date_of_joining,
      last_working_day: last_working_day,
      status: status,
    };
    this.registerEmployeeDetails(body);
    this.detailsPage();
  }
  detailsPage() {
    this.routes.navigate(['/getDetails']);
  }
}
