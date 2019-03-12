import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';     

import { Observable } from 'rxjs';
 
import { Consultant } from './consultant';
 
@Injectable({
  providedIn: 'root',
})
export class ConsultantApiService {
  
  private url = '/api/consultants';
   
  constructor(private http: HttpClient) { }
 
  getConsultants(): Observable<Consultant[]> {
    return this.http.get<Consultant[]>(this.url);
  }
}