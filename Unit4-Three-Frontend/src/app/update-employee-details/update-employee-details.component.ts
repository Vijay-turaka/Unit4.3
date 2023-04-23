import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee-details',
  templateUrl: './update-employee-details.component.html',
  styleUrls: ['./update-employee-details.component.css'],
})
export class UpdateEmployeeDetailsComponent {
  response: any = [];
  id: any;
  data: any;
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private routes: Router
  ) {}

  ngOnInit(): void {
    this.data = window.history.state;
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      console.log('id', params['id']);
    });
  }

  updateEmployee(body: any, id: any) {
    this.apiService
      .updateEmployeeDetails(body, id)
      .subscribe((response: any) => {
        this.response = response?.response;
        console.log('update employee', this.response);
      });
  }
  Update(
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
    this.updateEmployee(body, this.id);
    this.detailsPage();
  }
  detailsPage() {
    this.routes.navigate(['/getDetails']);
  }
}
