import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getData();
  }

  populateForm(employee: Employee) {
    // this.employeeService.employee = employee;

    this.employeeService.employee = Object.assign({}, employee);
  }

  onDelete(employeeId: number) {
    this.employeeService.deleteEmployee(employeeId).subscribe(res => this.employeeService.getData());

  }
}
