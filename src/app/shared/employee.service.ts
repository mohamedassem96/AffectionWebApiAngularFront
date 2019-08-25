import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee: Employee;

  employeeList: Employee[];

  readonly url = 'https://localhost:44315/api/Employees';

  constructor(private http: HttpClient) { }

  getData() {
    this.getEmployees().subscribe( (res: Employee[]) =>  {
      this.employeeList = res;
      console.log(this.employeeList);
    });
  }


  postEmployee(employee: Employee): Observable<any> {
    return this.http.post(this.url, employee);
  }

  updateEmployee(employee: Employee): Observable<any> {
    return this.http.put(this.url + '/' + employee.employeeID, employee);
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get(this.url) as Observable<Employee[]>;
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
