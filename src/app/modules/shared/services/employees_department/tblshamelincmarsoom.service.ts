import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITBLShamelIncMarsoom } from '../../models/employees_department/ITBLShamelIncMarsoom';

@Injectable({
  providedIn: 'root'
})
export class TblshamelincmarsoomService {
  private RestUrl = 'https://localhost:44335/api/';
  private httpOptions = { 
    headers: new HttpHeaders( { 'Content-Type': 'application/json;charset=UTF-8' }) 
 };
 
  constructor(private httpClient : HttpClient) { }

  list()  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };  
    console.log(this.RestUrl +"TBLShamelIncMarsoom");
    return this.httpClient.get(this.RestUrl +"TBLShamelIncMarsoom",options);      
  }


  delete(id:number )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };
    return this.httpClient.delete(this.RestUrl +"TBLShamelIncMarsoom/delete/"+id,options);  
  }

  add(obj : ITBLShamelIncMarsoom )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');  
    const options = {  headers: headers };
    return this.httpClient.post(this.RestUrl +"TBLShamelIncMarsoom/",obj,options);  
  }

  update(obj : ITBLShamelIncMarsoom )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');    
    const options = {  headers: headers };
    return this.httpClient.put(this.RestUrl +"TBLShamelIncMarsoom/"+obj.incmarsoom_id,obj,options);  
  }

}