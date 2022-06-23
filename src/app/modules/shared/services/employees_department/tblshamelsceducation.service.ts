import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITBLShamelSCEducation } from '../../models/employees_department/ITBLShamelSCEducation';

@Injectable({
  providedIn: 'root'
})
export class TblshamelsceducationService {
  private RestUrl = 'https://localhost:44335/api/';
  private httpOptions = { 
    headers: new HttpHeaders( { 'Content-Type': 'application/json;charset=UTF-8' }) 
 };
 
  constructor(private httpClient : HttpClient) { }

  list(id:number)  {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    const options = {  headers: headers };  
    return this.httpClient.get(this.RestUrl +"TBLShamelSCEducation/list/"+id,options);  
    
  }


  delete(id:number )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };
    console.log(id);

    return this.httpClient.delete("https://localhost:44335/api/TBLShamelSCEducation/"+id);
  }


  add(obj : ITBLShamelSCEducation )  {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    const httpParams: HttpParamsOptions = { 'obj': obj } as HttpParamsOptions;
  
    const options = { headers: headers };
    console.log("ييسيسي");

    console.log(obj);

    return this.httpClient.post("https://localhost:44335/api/TBLShamelSCEducation",obj,options); 
 

  }

  update(obj : ITBLShamelSCEducation )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const httpParams: HttpParamsOptions = { 'obj': obj } as HttpParamsOptions;
  
    const options = {  headers: headers };
    console.log(this.RestUrl +"TBLShamelSCEducation/"+obj.serial);
    return this.httpClient.put(this.RestUrl +"TBLShamelSCEducation/"+obj.serial,obj,options);
  }

}
