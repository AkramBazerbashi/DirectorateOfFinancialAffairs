import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'; 
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParamsOptions, HttpParams } from 
'@angular/common/http';
import { TBLShamelEmployee } from '../../models/employees_department/TBLShamelEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  
  private RestUrl = 'https://localhost:44335/api/';
  private httpOptions = { 
    headers: new HttpHeaders( { 'Content-Type': 'application/json;charset=UTF-8' }) 
 };


  constructor(private httpClient : HttpClient) { }

  private httpErrorHandler (error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
       console.error("A client side error occurs. The error message is " + error.message);
       } else {
          console.error(
             "An error happened in server. The HTTP status code is "  + error.status + " and the error returned is " + error.message);
       }
 
    return throwError("Error occurred. Pleas try again");
 }

 getEmpFullName(searchName:string )  {

  const headers = new HttpHeaders().set('Content-Type', 'application/json');

  const options = {  headers: headers };


  return this.httpClient.get(this.RestUrl +`TBLShamelEmployee/GetEmployeeFullName/${searchName}`,options);  
  
}

employee_FullName_List(searchName:string )  {

  const headers = new HttpHeaders().set('Content-Type', 'application/json');

  const httpParams: HttpParamsOptions = { 'searchName': searchName } as HttpParamsOptions;
  
  const options = { params: new HttpParams(httpParams), headers: headers };

  return this.httpClient.get(this.RestUrl +`TBLShamelEmployee/employee_FullName_List/${searchName}`,options);  
  
}

employee_FullName_List1(searchName:string,pageNumber:number, pageSize:number
   )  {
  const headers = new HttpHeaders().set('Content-Type', 'application/json');  
  const options = { headers: headers };
  return this.httpClient.get(this.RestUrl +`TBLShamelEmployee/employee_FullName_List/${searchName}/${pageNumber}/${pageSize}`,options);  
  
}


search_by_Computer_ID(Computer_ID:string )  {

  const headers = new HttpHeaders().set('Content-Type', 'application/json');

  const httpParams: HttpParamsOptions = { 'Computer_ID': Computer_ID } as HttpParamsOptions;
  
  const options = { params: new HttpParams(httpParams), headers: headers };
  const options1 = {  headers: headers };

  console.log(Computer_ID);

  return this.httpClient.get(this.RestUrl +"TBLShamelEmployee/search_by_Computer_ID/"+Computer_ID,options1);  
  
}



search_by_id(id:string )  {

  const headers = new HttpHeaders().set('Content-Type', 'application/json');

  const httpParams: HttpParamsOptions = { 'id': id } as HttpParamsOptions;
  
  const options = { params: new HttpParams(httpParams), headers: headers };
  const options1 = {  headers: headers };

  console.log(id);

  return this.httpClient.get(this.RestUrl +"TBLShamelEmployee/search_by_id/"+id,options1);  
  
}


change_employee_id(old_id:string,new_id:string )  {

  const headers = new HttpHeaders().set('Content-Type', 'application/json');
  const options = {  headers: headers };
  return this.httpClient.post(this.RestUrl +"TBLShamelEmployee/change_employee_id/"+old_id+"/"+new_id,options);  
  
}

delete_employee(id:string)  {

  const headers = new HttpHeaders().set('Content-Type', 'application/json');
  const options = {  headers: headers };
  return this.httpClient.delete(this.RestUrl +"TBLShamelEmployee/"+id,options);  
  
}
// Error handling 
handleError(error:any) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}


search_by_employee_name_info(fname:string ,lname:string ,mother:string,father:string )  {

  const headers = new HttpHeaders().set('Content-Type', 'application/json');

  const httpParams: HttpParamsOptions = {
     'fname': fname,
     'lname':lname,
     'mother':mother,
     'father':father
 } as HttpParamsOptions;
  
  const options = { params: new HttpParams(httpParams), headers: headers };
  const options1 = {  headers: headers };


console.log( +"TBLShamelEmployee/search_by_employee_name_info/"+fname+"/"+lname+"/"+mother+"/"+father) ;
  return this.httpClient.get(this.RestUrl +"TBLShamelEmployee/search_by_employee_name_info?fname="+fname+"&lname="+lname+"&mother="+mother+"&father="+father,options);  
  
}


prev_Computer_ID(Computer_ID:string )  {

  const headers = new HttpHeaders().set('Content-Type', 'application/json');

  const httpParams: HttpParamsOptions = {
     'Computer_ID': Computer_ID
 } as HttpParamsOptions;  
  const options = { params: new HttpParams(httpParams), headers: headers };
  const options1 = {  headers: headers };
  console.log( ""+"TBLShamelEmployee/prev_Computer_ID/"+Computer_ID) ;
  return this.httpClient.get(this.RestUrl +"TBLShamelEmployee/prev_Computer_ID/"+Computer_ID,options);  
  
}

next_Computer_ID(Computer_ID:string )  {

  const headers = new HttpHeaders().set('Content-Type', 'application/json');

  const httpParams: HttpParamsOptions = {
     'Computer_ID': Computer_ID
 } as HttpParamsOptions;  
  const options = { params: new HttpParams(httpParams), headers: headers };
  const options1 = {  headers: headers };
  console.log( ""+"TBLShamelEmployee/next_Computer_ID/"+Computer_ID) ;
  return this.httpClient.get(this.RestUrl +"TBLShamelEmployee/next_Computer_ID/"+Computer_ID,options);  
  
}

prev_id(id:string )  {

  const headers = new HttpHeaders().set('Content-Type', 'application/json');

 
  const options = { headers: headers };
  console.log( ""+"TBLShamelEmployee/prev_id/"+id) ;
  return this.httpClient.get(this.RestUrl +"TBLShamelEmployee/prev_id/"+id,options);  
  
}


next_id(id:string )  {

  const headers = new HttpHeaders().set('Content-Type', 'application/json');

  const httpParams: HttpParamsOptions = {
     'id': id
 } as HttpParamsOptions;  
  const options = { params: new HttpParams(httpParams), headers: headers };
  const options1 = {  headers: headers };
  console.log( ""+"TBLShamelEmployee/next_id/"+id) ;
  return this.httpClient.get(this.RestUrl +"TBLShamelEmployee/next_id/"+id,options);  
  
}

Check_PAYROL_ID(value:string,id:number|undefined): Observable<TBLShamelEmployee[]>
{
  const headers = new HttpHeaders().set('Content-Type', 'application/json'); 
  const options = {  headers: headers };

  if (id && id>0)
    return this.httpClient.get<TBLShamelEmployee[]>(this.RestUrl +`TBLShamelEmployee/Check_payrol_id/${value}/${id}`,options);  
  
  return this.httpClient.get<TBLShamelEmployee[]>(this.RestUrl +`TBLShamelEmployee/Check_payrol_id/${value}`,options);  
}

Check_COMPUTER_ID(value:string,id:number|undefined): Observable<TBLShamelEmployee[]>
{
  const headers = new HttpHeaders().set('Content-Type', 'application/json'); 
  const options = {  headers: headers };

  if (id && id>0)
    return this.httpClient.get<TBLShamelEmployee[]>(this.RestUrl +`TBLShamelEmployee/check_computer_id/${value}/${id}`,options);  
  
  return this.httpClient.get<TBLShamelEmployee[]>(this.RestUrl +`TBLShamelEmployee/check_computer_id/${value}`,options);  
}

Check_INSURANCE_ID(value:string,id:number|undefined): Observable<TBLShamelEmployee[]>
{
  const headers = new HttpHeaders().set('Content-Type', 'application/json'); 
  const options = {  headers: headers };

  if (id && id>0)
    return this.httpClient.get<TBLShamelEmployee[]>(this.RestUrl +`TBLShamelEmployee/check_insurance_id/${value}/${id}`,options);  
  
  return this.httpClient.get<TBLShamelEmployee[]>(this.RestUrl +`TBLShamelEmployee/check_insurance_id/${value}`,options);  
}

Check_GLOBAL_ID(value:string,id:number|undefined): Observable<TBLShamelEmployee[]>
{
  const headers = new HttpHeaders().set('Content-Type', 'application/json'); 
  const options = {  headers: headers };

  if (id && id>0)
    return this.httpClient.get<TBLShamelEmployee[]>(this.RestUrl +`TBLShamelEmployee/check_global_id/${value}/${id}`,options);  
  
  return this.httpClient.get<TBLShamelEmployee[]>(this.RestUrl +`TBLShamelEmployee/check_global_id/${value}`,options);  
}


}
