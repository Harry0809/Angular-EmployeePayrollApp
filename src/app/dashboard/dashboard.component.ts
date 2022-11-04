import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  allEmp:Array<any> = [];
  empList :any ;
  deptList:Array<any> = []
  countNumber:number= 0;
  name:string = "name";
  gender:string = "Gender";
  department:string = "department";
  salary:string = "salary";
  startDate:string = "Start Date";
  note:string = "note";

  imgUrl_1 = "../../assets/profile-images/pic4.png";
  imgUrl_2 = "../../assets/profile-images/pic4.png";
  imgUrl_3 = "../../assets/profile-images/pic4.png";
  imgUrl_4 = "../../assets/profile-images/pic4.png";


  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getAllEmployee()
  }
  btnClick=  () => {
    this.router.navigateByUrl('/form');
  };

  getAllEmployee(){    
    this.employeeService.getAllEmployee().subscribe((result:any) => {
      console.log(result);
      this.allEmp = result.data;
      this.countNumber = this.allEmp.length;
    });
  }

  deleteEmp(Id:number){
    console.log(Id);
    this.employeeService.deleteEmployee(Id).subscribe((response:any) =>{
      this.ngOnInit();
      this.router.navigate(['dashboard']);      
    }); 
  }
  editById(Id:number){
    console.log(Id)
    let emp = this.allEmp.find((empData)=>{return empData.Id === Id})
    console.log(emp);
    this.router.navigate(['/update', Id]);
  }

}
