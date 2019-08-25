import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/shared/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.employee = new Employee();
  }

  onSubmit(form: NgForm) {
    if ((form.value as Employee).employeeID == null) {
      this.insertData(form);
    } else {
      // update
      this.updateData(form);
    }
  }

  insertData(employeeData: NgForm) {
    this.employeeService.postEmployee(employeeData.value).subscribe(
      res => {
        this.employeeService.getData();
        this.resetForm(employeeData);
      }
    );
  }


  updateData(employeeData: NgForm) {
    console.log('update');
    console.log(employeeData.value);

    this.employeeService.updateEmployee(employeeData.value).subscribe(
      res => {
        this.employeeService.getData();
        this.resetForm(employeeData);
      });
  }


  resetForm(form: NgForm) {
    form.resetForm();
  }
}
