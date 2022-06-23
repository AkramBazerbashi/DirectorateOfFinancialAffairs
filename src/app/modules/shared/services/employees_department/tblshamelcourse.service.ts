import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITBLShamelCourse } from '../../models/employees_department/ITBLShamelCourse';

@Injectable({
  providedIn: 'root'
})
export class TblshamelcourseService {

  private RestUrl = 'https://localhost:44335/api/';
  private httpOptions = { 
    headers: new HttpHeaders( { 'Content-Type': 'application/json;charset=UTF-8' }) 
 };
 
  constructor(private httpClient : HttpClient) { }

  list()  {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    const options = {  headers: headers };  
    return this.httpClient.get(this.RestUrl +"TBLShamelCourse",options);  
    
  }


  delete(course_id:number)  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };
    return this.httpClient.delete("https://localhost:44335/api/TBLShamelCourse/"+course_id);
  }


  add(obj : ITBLShamelCourse )  {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});  
    const options = { headers: headers };
    return this.httpClient.post("https://localhost:44335/api/TBLShamelCourse",obj,options); 
  }

  update(obj : ITBLShamelCourse )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };    
    return this.httpClient.put(this.RestUrl +"TBLShamelCourse/"+obj.course_id,obj,options);
  }

}
