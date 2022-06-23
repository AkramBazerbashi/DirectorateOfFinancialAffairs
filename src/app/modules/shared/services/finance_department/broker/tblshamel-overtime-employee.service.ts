import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { elementAt } from 'rxjs';
import { ITBLShamelBonusReason } from '../../../models/employees_department/ITBLShamelBonusReason';
import { TBLShamelOvertimeEmployee } from '../../../models/finance_department/broker/TBLShamelOvertimeEmployee';
import { TBLShamelOverTimeShatebService } from './tblshamel-overtime-shateb.service';

@Injectable({
  providedIn: 'root'
})
export class TBLShamelOvertimeEmployeeService {
  private RestUrl = 'https://localhost:44335/api/TBLShamelOverTimeEmployee';
  private httpOptions = { 
    headers: new HttpHeaders( { 'Content-Type': 'application/json;charset=UTF-8' }) 
 };
 
 constructor(private httpClient : HttpClient) { }
  
    list()  {
     
      return this.httpClient.get<TBLShamelOvertimeEmployee[]>(this.RestUrl ,this.httpOptions);  
      
    }

    Search(searchRequest : any,PageIndex:number)  {
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      const options = {  headers: headers };  
      return this.httpClient.post<TBLShamelOvertimeEmployee[]>(this.RestUrl +`/Search/${PageIndex}`,searchRequest,this.httpOptions);  
      
    }

    CanDelete(serail:number)  {
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      const options = {  headers: headers };  
      return this.httpClient.get<boolean>(this.RestUrl+`/CanDelete/${serail}` ,this.httpOptions);  
      
    }

    
  
  
    delete(id:number )  {
      return this.httpClient.delete<number>(this.RestUrl+`/${id}` ,this.httpOptions);  
    }
  
    add(obj : TBLShamelOvertimeEmployee )  {
      return this.httpClient.post<number>(this.RestUrl ,obj,this.httpOptions);  
    }
  
    update(obj : TBLShamelOvertimeEmployee )  {
      return this.httpClient.put<number>(this.RestUrl ,obj);  
    }

    Validate_Name(Fname:string,LName:string,Serail:number)
    {
     
      let request =
    {
      fname:Fname,
      lname:LName,
      serial:Serail
    };
      return this.httpClient.post<TBLShamelOvertimeEmployee[]>(this.RestUrl+`/Validate_Name` ,request,this.httpOptions);  

    }
  
  }
  