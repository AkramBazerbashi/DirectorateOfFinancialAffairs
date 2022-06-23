import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITBLShamelJobName } from '../../models/employees_department/ITBLShamelJobName';

@Injectable({
  providedIn: 'root'
})
export class TblshameljobnameService {
  
  private RestUrl = 'https://localhost:44335/api/';
  private httpOptions = { 
    headers: new HttpHeaders( { 'Content-Type': 'application/json;charset=UTF-8' }) 
 };
 
  constructor(private httpClient : HttpClient) { }

  list()  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };  
    return this.httpClient.get(this.RestUrl +"TBLShamelJobName/list",options);  
    
  }


  delete(id:number )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };
    return this.httpClient.delete(this.RestUrl +"TBLShamelJobName/delete/"+id,options);  
  }

  add(obj : ITBLShamelJobName )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };
    return this.httpClient.post(this.RestUrl +"TBLShamelJobName/",obj,options);  
  }

  update(obj : ITBLShamelJobName )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json'); 
    const options = {  headers: headers };
    return this.httpClient.put(this.RestUrl +"TBLShamelJobName/"+obj.jobname_id,obj,options);  
  }

}
