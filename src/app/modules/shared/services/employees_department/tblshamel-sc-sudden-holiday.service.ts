import { HttpHeaders, HttpClient, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TBLShamelSCSuddenHoliday } from '../../models/employees_department/TBLShamelSCSuddenHoliday';

@Injectable({
  providedIn: 'root'
})
export class TBLShamelSCSuddenHolidayService {

  private RestUrl = 'https://localhost:44335/api/';
  private httpOptions = { 
    headers: new HttpHeaders( { 'Content-Type': 'application/json;charset=UTF-8' }) 
 };
 
  constructor(private httpClient : HttpClient) { }

  list(id:number)  {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    const options = {  headers: headers };  
    return this.httpClient.get(this.RestUrl +`TBLShamelSCSuddenHoliday/${id}`,options);  
    
  }


  delete(serial:number )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };  
    return this.httpClient.delete("https://localhost:44335/api/TBLShamelSCSuddenHoliday/"+serial);
  }


  add(obj : TBLShamelSCSuddenHoliday )  {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});  
    const options = { headers: headers };    
    return this.httpClient.post("https://localhost:44335/api/TBLShamelSCSuddenHoliday",obj,options); 

  }

  update(obj : TBLShamelSCSuddenHoliday )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };
    return this.httpClient.put(this.RestUrl +"TBLShamelSCSuddenHoliday/"+obj.serial,obj,options);
  }

}
