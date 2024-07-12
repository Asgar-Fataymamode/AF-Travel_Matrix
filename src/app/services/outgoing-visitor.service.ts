import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OutgoingVisitor } from '../models/outgoing-visitor.model';

@Injectable({
  providedIn: 'root'
})
export class OutgoingVisitorService {
  private apiUrl = 'https://localhost:7077/api/OutgoingVisitors';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getVisitors(): Observable<OutgoingVisitor[]> {
    return this.http.get<OutgoingVisitor[]>(this.apiUrl);
  }

  getVisitor(id: number): Observable<OutgoingVisitor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<OutgoingVisitor>(url);
  }

  addVisitor(visitor: OutgoingVisitor): Observable<OutgoingVisitor> {
    return this.http.post<OutgoingVisitor>(this.apiUrl, visitor, this.httpOptions);
  }

  updateVisitor(id: number, visitor: OutgoingVisitor): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, visitor, this.httpOptions);
  }

  deleteVisitor(id: number): Observable<OutgoingVisitor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<OutgoingVisitor>(url, this.httpOptions);
  }
}
