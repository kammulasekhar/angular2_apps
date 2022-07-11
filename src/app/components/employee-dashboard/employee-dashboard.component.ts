import { CommonService } from './../../services/common.service';
import { EmployeeModel } from './employee-dashboard.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  formValue!:FormGroup;
  employeeData!:any;
  showAdd!:boolean;
  showEdit!:boolean;
  employeeModelObj:EmployeeModel = new EmployeeModel()
  constructor(private formBuilder:FormBuilder, private commonService:CommonService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      mobile : [''],
      salary:['']
    })
    this.getAllEmployees();
  }

  postEmployeeDetails(){
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
    this.employeeModelObj.salary = this.formValue.value.salary;

    this.commonService.postEmployee(this.employeeModelObj)
    .subscribe(res=>{
      console.log(res)
      this.formValue.reset();
      this.getAllEmployees();
      let ref = document.getElementById("cancel");
      ref?.click();
      alert("Employee added Successfully...")
    },
    err=>{
      alert("something went wrong...")
    })
  }

  getAllEmployees(){
    this.commonService.getEmployees()
    .subscribe(res=>{
      console.log(res)
      this.employeeData = res;
    });
  }

  deteleEmployee(employee:any){
    this.commonService.deteleEmployee(employee.id)
    .subscribe((res)=>{
      console.log(res)
      alert("employee deteled");
      this.getAllEmployees();
    })
  }  

  onEdit(employee:any){
    this.showAdd = false;
    this.showEdit = true;
    this.employeeModelObj.id = employee.id;
    this.formValue.controls['firstName'].setValue(employee.firstName);
    this.formValue.controls['lastName'].setValue(employee.lastName);
    this.formValue.controls['email'].setValue(employee.email);
    this.formValue.controls['mobile'].setValue(employee.mobile);
    this.formValue.controls['salary'].setValue(employee.salary);
  }

  updataEmployeeDetails(){
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
    this.employeeModelObj.salary = this.formValue.value.salary;

    this.commonService.updataEmployeeDetails(this.employeeModelObj,this.employeeModelObj.id)
    .subscribe(res=>{
      console.log(res)
      alert("updated successfully")
      this.formValue.reset();
      this.getAllEmployees();
      let ref = document.getElementById("cancel");
      ref?.click();
      alert("Employee added Successfully...")
    })
  }

  clickOnAddEmployee(){
    this.formValue.reset();
    this.showAdd = true;
    this.showEdit = false;
  }

}
