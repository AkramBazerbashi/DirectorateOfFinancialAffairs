import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITBLShamelSCCourse } from '../../models/employees_department/ITBLShamelSCCourse';



@Injectable({
  providedIn: 'root'
})
export class TblshamelsccourseService {

  private RestUrl = 'https://localhost:44335/api/';
  private httpOptions = { 
    headers: new HttpHeaders( { 'Content-Type': 'application/json;charset=UTF-8' }) 
 };
 
  constructor(private httpClient : HttpClient) { }

  list(id:number)  {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    const options = {  headers: headers };  
    return this.httpClient.get(this.RestUrl +"TBLShamelSCCourse/"+id,options);  
    
  }


  delete(id:number )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };
    return this.httpClient.delete("https://localhost:44335/api/TBLShamelSCCourse/"+id);
  }


  add(obj : ITBLShamelSCCourse )  {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});  
    const options = { headers: headers };
    return this.httpClient.post("https://localhost:44335/api/TBLShamelSCCourse",obj,options); 
  }

  update(obj : ITBLShamelSCCourse )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };    
    return this.httpClient.put(this.RestUrl +"TBLShamelSCCourse/"+obj.serial,obj,options);
  }

}
