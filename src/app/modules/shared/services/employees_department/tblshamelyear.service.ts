import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITBLShamelYear } from '../../models/employees_department/ITBLShamelYear';

@Injectable({
  providedIn: 'root'
})
export class TblshamelyearService {

  List_TBLShamelYear : ITBLShamelYear[];

  private RestUrl = 'https://localhost:44335/api/';
  private httpOptions = { 
    headers: new HttpHeaders( { 'Content-Type': 'application/json;charset=UTF-8' }) 
 };
 
  constructor(private httpClient : HttpClient) { }

  list()  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };  
    return this.httpClient.get(this.RestUrl +"TBLShamelYear/list",options);  
    
  }


  fill ()  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };  
    return this.httpClient.get<ITBLShamelYear[]>(this.RestUrl +"TBLShamelYear/list",options).subscribe(
      (data)=>{
        this.List_TBLShamelYear =  data;
    });  
    
  }


  delete(id:number )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };
    return this.httpClient.delete(this.RestUrl +"TBLShamelYear/delete/"+id,options);  
  }

  add(obj : ITBLShamelYear )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    
  
    const options = {  headers: headers };
    return this.httpClient.post(this.RestUrl +"TBLShamelYear/",obj,options);  
  }

  update(obj : ITBLShamelYear )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');  
    const options = {  headers: headers };
    return this.httpClient.put(this.RestUrl +"TBLShamelYear/"+obj.year_id,obj,options);  
  }

}
