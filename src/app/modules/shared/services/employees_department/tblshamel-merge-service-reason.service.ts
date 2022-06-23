import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TBLShamelMergeServiceReason } from '../../models/employees_department/TBLShamelMergeServiceReason';

@Injectable({
  providedIn: 'root'
})
export class TBLShamelMergeServiceReasonService {

  private RestUrl = 'https://localhost:44335/api/';
  private httpOptions = { 
    headers: new HttpHeaders( { 'Content-Type': 'application/json;charset=UTF-8' }) 
 };
 
 List_TBLShamelMergeServiceReason ?: TBLShamelMergeServiceReason[]=[];

  constructor(private httpClient : HttpClient) { }

  list()  {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    const options = {  headers: headers };  
    return this.httpClient.get<TBLShamelMergeServiceReason[]>(this.RestUrl +`TBLShamelMergeServiceReason`,options);  
    
  }

  fill()  {
    this.list().subscribe
    (
      (data)=> {this.List_TBLShamelMergeServiceReason = data;}
    )    
  }

  delete(mergeservicereason_id:number )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };  
    return this.httpClient.delete("https://localhost:44335/api/TBLShamelMergeServiceReason/"+mergeservicereason_id);
  }


  add(obj : TBLShamelMergeServiceReason )  {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});  
    const options = { headers: headers };    
    return this.httpClient.post("https://localhost:44335/api/TBLShamelMergeServiceReason",obj,options); 

  }

  update(obj : TBLShamelMergeServiceReason )  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {  headers: headers };
    return this.httpClient.put(this.RestUrl +"TBLShamelMergeServiceReason/"+obj.mergeservicereason_id,obj,options);
  }

}
