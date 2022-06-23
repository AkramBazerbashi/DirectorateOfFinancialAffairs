import { HttpClient, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TBLShamelPrivilages } from '../../models/employees_department/TBLShamelPrivilages';

@Injectable({
  providedIn: 'root'
})
export class TBLShamelPrivilageServiceService {
  private RestUrl = 'https://localhost:44335/api/';

  private httpOptions = { 
    headers: new HttpHeaders( { 'Content-Type': 'application/json;charset=UTF-8' }) 
  };
 
  constructor(private httpClient : HttpClient) { }

  list()  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');

    const options = {  headers: headers };  
    return this.httpClient.get(this.RestUrl +"TBLShamelPrivilages",options);      
  }

  delete(User_ID:number )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    const options = {  headers: headers };
    return this.httpClient.delete(this.RestUrl +"TBLShamelPrivilages/delete/"+User_ID,options);  
  }

  add(obj :  TBLShamelPrivilages )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    const httpParams: HttpParamsOptions = { 'obj': obj } as HttpParamsOptions;
    const options = {  headers: headers };
  console.log('add fff ');
    return this.httpClient.post(this.RestUrl +"TBLShamelPrivilages/",obj,options);  
  }

  update(obj :  TBLShamelPrivilages )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
    const httpParams: HttpParamsOptions = { 'obj': obj } as HttpParamsOptions;  
    const options = {  headers: headers };
    return this.httpClient.put(this.RestUrl +"TBLShamelPrivilages/"+obj.User_ID,obj,options);  
  }

  GetByUserAndForm(User_ID:number,FormName:string)  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const data = {'User_ID': User_ID,'FormName':FormName };
    const httpParams = new HttpParams({ fromObject: data });

    //const options = {  headers: headers,params: httpParams};  
    const options = {  headers: headers};  
    console.log(options);
    return this.httpClient.get(this.RestUrl +"TBLShamelPrivilages/GetByUserAndForm/"+User_ID+"/"+FormName ,options);      
  }

  InsertIfNew(obj :  TBLShamelPrivilages )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    const httpParams: HttpParamsOptions = { 'obj': obj } as HttpParamsOptions;
    const options = {  headers: headers };
    console.log('inside InsertIfNew');
    return this.httpClient.post(this.RestUrl +"TBLShamelPrivilages/InsertIfNew/",obj,options);  
  }

  List_User_Windows(PrivilageToCheck:string  )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

  
  
    console.log('dsdsds fas fas');
    return this.httpClient.get<TBLShamelPrivilages[]>(this.RestUrl +`TBLShamelPrivilages/List_User_Windows/${PrivilageToCheck}`,this.httpOptions).subscribe(
      (data) => 
      {

        console.log(data);

      }
    )
    ;  
  }

}
