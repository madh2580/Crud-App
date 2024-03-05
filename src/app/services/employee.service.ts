import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http:HttpClient) {}

  addEmployee(date:any):Observable<any>{
    return this.http.post(' http://localhost:8000/employees', date);
   
  }
  UpdateEmployee(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:8000/employees/${id}`, data);
  }
  getEmployeeList(): Observable<any> {
return this.http.get('http://localhost:8000/employees');
  }

  delateEmployee(id: number): Observable<any>{
    return this.http.delete(`http://localhost:8000/employees/${id}`);  
  }
}
