import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITBLShamelChangeReason } from '../../models/employees_department/ITBLShamelChangeReason';

@Injectable({
  providedIn: 'root'
})
export class TblshamelchangereasonService {

  private RestUrl = 'https://localhost:44335/api/';
  private httpOptions = { 
    headers: new HttpHeaders( { 'Content-Type': 'application/json;charset=UTF-8' }) 
 };
 
  constructor(private httpClient : HttpClient) { }

  list()  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };  
    console.log("TBLShamelChangeReason");
    return this.httpClient.get(this.RestUrl +"TBLShamelChangeReason/list",options);    
  }


  delete(changereason_id:number )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };
    return this.httpClient.delete(this.RestUrl +"TBLShamelChangeReason/delete/"+changereason_id,options);  
  }

  add(obj : ITBLShamelChangeReason )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const httpParams: HttpParamsOptions = { 'obj': obj } as HttpParamsOptions;
  
    const options = {  headers: headers };
    return this.httpClient.post(this.RestUrl +"TBLShamelChangeReason/",obj,options);  
  }

  update(obj : ITBLShamelChangeReason )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const httpParams: HttpParamsOptions = { 'obj': obj } as HttpParamsOptions;  
    const options = {  headers: headers };
    return this.httpClient.put(this.RestUrl +"TBLShamelChangeReason/"+obj.changereason_id,obj,options);  
  }

}
