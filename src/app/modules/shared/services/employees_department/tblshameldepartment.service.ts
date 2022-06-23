import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITBLShamelDepartment } from '../../models/employees_department/ITBLShamelDepartment';

@Injectable({
  providedIn: 'root'
})
export class TblshameldepartmentService {

  private RestUrl = 'https://localhost:44335/api/';
  private httpOptions = { 
    headers: new HttpHeaders( { 'Content-Type': 'application/json;charset=UTF-8' }) 
 };
 
  constructor(private httpClient : HttpClient) { }

  list()  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };  
    return this.httpClient.get(this.RestUrl +"TBLShamelDepartment/list",options);  
    
  }


  delete(id:number )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };
    return this.httpClient.delete(this.RestUrl +"TBLShamelDepartment/delete/"+id,options);  
  }

  add(obj : ITBLShamelDepartment )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');      
    const options = {  headers: headers };
    return this.httpClient.post(this.RestUrl +"TBLShamelDepartment/",obj,options);  
  }

  update(obj : ITBLShamelDepartment )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');  
    const options = {  headers: headers };
    return this.httpClient.put(this.RestUrl +"TBLShamelDepartment/"+obj.department_id,obj,options);  
  }

}
