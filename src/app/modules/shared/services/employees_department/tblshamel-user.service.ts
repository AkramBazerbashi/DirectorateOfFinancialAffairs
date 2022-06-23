import { HttpClient, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TBLShamelUser } from '../../models/employees_department/TBLShamelUser';

@Injectable({
  providedIn: 'root'
})
export class TBLShamelUserService {

  private RestUrl = 'https://localhost:44335/api/';

  private httpOptions = { 
    headers: new HttpHeaders( { 'Content-Type': 'application/json;charset=UTF-8' }) 
  };
 
  constructor(private httpClient : HttpClient) { }

  list()  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    const options = {  headers: headers };  
    return this.httpClient.get(this.RestUrl +"TBLShamelUser",options);      
  }

  delete(User_ID:number )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    const options = {  headers: headers };
    return this.httpClient.delete(this.RestUrl +"TBLShamelUser/delete/"+User_ID,options);  
  }

  add(obj :  TBLShamelUser )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    const httpParams: HttpParamsOptions = { 'obj': obj } as HttpParamsOptions;
    const options = {  headers: headers };
    return this.httpClient.post(this.RestUrl +"TBLShamelUser/",obj,options);  
  }

  update(obj :  TBLShamelUser )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    const httpParams: HttpParamsOptions = { 'obj': obj } as HttpParamsOptions;  
    const options = {  headers: headers };
    return this.httpClient.put(this.RestUrl +"TBLShamelUser/"+obj.User_ID,obj,options);  
  }

  login(obj :  TBLShamelUser )
  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    const data = {'user':  JSON.stringify(obj )  };
    const httpParams = new HttpParams().set('user',JSON.stringify(obj ));

    //const options = {  headers: headers,params: httpParams};  
    const options = {  headers: headers};  

    //const options = {  headers: headers };  
    return this.httpClient.post(this.RestUrl +"TBLShamelUser/Login/",obj ,options);       
  }

}
