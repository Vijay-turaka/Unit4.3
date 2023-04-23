import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-get-employee-details',
  templateUrl: './get-employee-details.component.html',
  styleUrls: ['./get-employee-details.component.css'],
})
export class GetEmployeeDetailsComponent {
  response: any = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.apiService.getEmployeeDetails().subscribe((response: any) => {
      this.response = response;
      console.log('getEmployeeDetails', this.response);
    });
  }
  getByEmployeeId() {
    this.apiService.getByEmployeeId().subscribe((response: any) => {
      this.response = response?.response;
      console.log('getByEmployeeId', this.response);
    });
  }

  deleteEmployee(deleteData: string) {
    this.apiService.deleteEmployee(deleteData).subscribe((response: any) => {
      this.response = response?.response;
      console.log('deleteEmployee', response);
    });
  }
  onOptionsSelected(value: string) {
    if (value === 'get-by-employee-id') {
      this.getByEmployeeId();
    } else {
      this.getAllData();
    }
  }
  deleteUser(id: string) {
    this.deleteEmployee(id);
    window.location.reload();
  }
}
