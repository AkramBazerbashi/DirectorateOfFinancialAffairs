import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TBLShamelMiniArea } from '../../models/employees_department/TBLShamelMiniArea';

@Injectable({
  providedIn: 'root'
})
export class TBLShamelMiniAreaService {

  private RestUrl = 'https://localhost:44335/api/';
  private httpOptions = { 
    headers: new HttpHeaders( { 'Content-Type': 'application/json;charset=UTF-8' }) 
 };
 

 public List_TBLShamelMiniArea : TBLShamelMiniArea[];

  constructor(private httpClient : HttpClient) { }

  list()  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };  
    return this.httpClient.get(this.RestUrl +"TBLShamelMiniArea",options);      
  }

  fill()  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };  
    return this.httpClient.get<TBLShamelMiniArea[]>(this.RestUrl +"TBLShamelMiniArea",options).subscribe
    (data=>this.List_TBLShamelMiniArea = data)     
  }



  delete(MiniArea_ID:number )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };
    return this.httpClient.delete(this.RestUrl +"TBLShamelMiniArea/delete/"+MiniArea_ID,options);  
  }

  add(obj : TBLShamelMiniArea )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const httpParams: HttpParamsOptions = { 'obj': obj } as HttpParamsOptions;
  
    const options = {  headers: headers };
    return this.httpClient.post(this.RestUrl +"TBLShamelMiniArea/",obj,options);  
  }

  update(obj : TBLShamelMiniArea )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const httpParams: HttpParamsOptions = { 'obj': obj } as HttpParamsOptions;
  
    const options = {  headers: headers };
    return this.httpClient.put(this.RestUrl +"TBLShamelMiniArea/"+obj.MiniArea_ID,obj,options);  
  }

}
