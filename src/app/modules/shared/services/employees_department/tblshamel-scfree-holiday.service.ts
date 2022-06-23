import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITBLShamelSCFreeHoliday } from '../../models/employees_department/ITBLShamelSCFreeHoliday';

@Injectable({
  providedIn: 'root'
})
export class TBLShamelSCFreeHolidayService {
  private RestUrl = 'https://localhost:44335/api/';
  private httpOptions = { 
    headers: new HttpHeaders( { 'Content-Type': 'application/json;charset=UTF-8' }) 
 };
 
  constructor(private httpClient : HttpClient) { }

  list(id:number)  {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    const options = {  headers: headers };  
    return this.httpClient.get(this.RestUrl +"TBLShamelSCFreeHoliday/"+id,options);  
    
  }


  delete(serial:number )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };  
    return this.httpClient.delete("https://localhost:44335/api/TBLShamelSCFreeHoliday/"+serial);
  }


  add(obj : ITBLShamelSCFreeHoliday )  {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});  
    const options = { headers: headers };    
    return this.httpClient.post("https://localhost:44335/api/TBLShamelSCFreeHoliday",obj,options); 

  }

  update(obj : ITBLShamelSCFreeHoliday )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const httpParams: HttpParamsOptions = { 'obj': obj } as HttpParamsOptions;
  
    const options = {  headers: headers };
    console.log(this.RestUrl +"TBLShamelSCFreeHoliday/"+obj.serial);
    return this.httpClient.put(this.RestUrl +"TBLShamelSCFreeHoliday/"+obj.serial,obj,options);
  }

}
