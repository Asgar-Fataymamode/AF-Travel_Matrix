import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForthcomingVisitor } from '../models/forthcoming-visitor.model';

@Injectable({
  providedIn: 'root'
})
export class ForthcomingVisitorService {
  // Update the API URL to match your backend
  private apiUrl = 'https://localhost:7077/api/ForthcomingVisitors';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getVisitors(): Observable<ForthcomingVisitor[]> {
    return this.http.get<ForthcomingVisitor[]>(this.apiUrl);
  }

  getVisitor(id: number): Observable<ForthcomingVisitor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ForthcomingVisitor>(url);
  }

  addVisitor(visitor: ForthcomingVisitor): Observable<ForthcomingVisitor> {
    return this.http.post<ForthcomingVisitor>(this.apiUrl, visitor, this.httpOptions);
  }

  updateVisitor(id: number, visitor: ForthcomingVisitor): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, visitor, this.httpOptions);
  }

  deleteVisitor(id: number): Observable<ForthcomingVisitor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<ForthcomingVisitor>(url, this.httpOptions);
  }
}
