import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  public getEmployeeDetails() {
    return this.http.get('http://localhost:3000/getAllDetails');
  }

  public deleteEmployee(id: string) {
    return this.http.delete(`http://localhost:3000/delete/:${id}`);
  }
  public registerEmployeeDetails(body: any) {
    return this.http.post('http://localhost:3000/addEmployee', body);
  }
  public updateEmployeeDetails(body: any, id: any) {
    return this.http.patch(`http://localhost:3000/update/:${id}`, body);
  }
  public getByEmployeeId() {
    return this.http.get('http://localhost:3000/getByEmployeeId');
  }
}
