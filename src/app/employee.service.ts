import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = environment.url;

  constructor(private http:HttpClient) { }

  insertEmployee(employee : any){
    return this.http.post( this.baseUrl+"/save",employee);
  }  
  getAllEmployee(){
    return this.http.get(`${this.baseUrl}/data`);
  }
  getEmployeeById(Id:number){
    return this.http.get(`${this.baseUrl}/find/`+Id);
  }
  updateEmployeeById(employee:any, Id:number){
    return this.http.put(`${this.baseUrl}/update/`+Id, employee);
  }
  deleteEmployee(Id:number){
    return this.http.delete(`${this.baseUrl}/delete/`+Id);
  }
}
