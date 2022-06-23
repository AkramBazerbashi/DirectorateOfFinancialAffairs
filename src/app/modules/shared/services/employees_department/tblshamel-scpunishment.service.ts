import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITBLShamelSCPunishment } from '../../models/employees_department/ITBLShamelSCPunishment';

@Injectable({
  providedIn: 'root'
})
export class TBLShamelSCPunishmentService {
  private RestUrl = 'https://localhost:44335/api/';
  private httpOptions = { 
    headers: new HttpHeaders( { 'Content-Type': 'application/json;charset=UTF-8' }) 
 };
 
  constructor(private httpClient : HttpClient) { }

  list(id:number)  {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    const options = {  headers: headers };  
    return this.httpClient.get(this.RestUrl +"TBLShamelSCPunishment/"+id,options);  
    
  }


  delete(serial:number )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };  
    return this.httpClient.delete("https://localhost:44335/api/TBLShamelSCPunishment/"+serial);
  }


  add(obj : ITBLShamelSCPunishment )  {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});  
    const options = { headers: headers };    
    return this.httpClient.post("https://localhost:44335/api/TBLShamelSCPunishment",obj,options); 

  }

  update(obj : ITBLShamelSCPunishment )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const httpParams: HttpParamsOptions = { 'obj': obj } as HttpParamsOptions;
  
    const options = {  headers: headers };
    console.log(this.RestUrl +"TBLShamelSCPunishment/"+obj.serial);
    return this.httpClient.put(this.RestUrl +"TBLShamelSCPunishment/"+obj.serial,obj,options);
  }

}
