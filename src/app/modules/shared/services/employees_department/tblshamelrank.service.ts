import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITBLShamelRank } from '../../models/employees_department/ITBLShamelRank';

@Injectable({
  providedIn: 'root'
})
export class TblshamelrankService {

  private RestUrl = 'https://localhost:44335/api/';
  private httpOptions = { 
    headers: new HttpHeaders( { 'Content-Type': 'application/json;charset=UTF-8' }) 
 };
 
  constructor(private httpClient : HttpClient) { }

  list()  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };  
    return this.httpClient.get(this.RestUrl +"TBLShamelRank",options);  
    
  }


  delete(rank_id:number )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };
    return this.httpClient.delete(this.RestUrl +"TBLShamelRank/delete/"+rank_id,options);  
  }

  add(obj : ITBLShamelRank )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
  
    const options = {  headers: headers };
    return this.httpClient.post(this.RestUrl +"TBLShamelRank/",obj,options);  
  }

  update(obj : ITBLShamelRank )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');  
    const options = {  headers: headers };
    return this.httpClient.put(this.RestUrl +"TBLShamelRank/"+obj.rank_id,obj,options);  
  }

}
