import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmloyeeService {

  constructor(private http:HttpClient) { }
  addEmployee(date:any){
    return this.http.post('')
  }
}
