// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, forkJoin } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { ForthcomingVisitor } from '../models/forthcoming-visitor.model';
// import { OutgoingVisitor } from '../models/outgoing-visitor.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class AllVisitorsService {
//   private forthcomingApiUrl = 'https://localhost:7077/api/ForthcomingVisitors';
//   private outgoingApiUrl = 'https://localhost:7077/api/OutgoingVisitors';

//   httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//   };

//   constructor(private http: HttpClient) { }

//   getForthcomingVisitors(): Observable<ForthcomingVisitor[]> {
//     return this.http.get<ForthcomingVisitor[]>(this.forthcomingApiUrl);
//   }

//   getOutgoingVisitors(): Observable<OutgoingVisitor[]> {
//     return this.http.get<OutgoingVisitor[]>(this.outgoingApiUrl);
//   }

//   deleteForthcomingVisitor(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.forthcomingApiUrl}/${id}`, this.httpOptions);
//   }

//   deleteOutgoingVisitor(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.outgoingApiUrl}/${id}`, this.httpOptions);
//   }



//   //

//   updateForthcomingVisitor(visitor: ForthcomingVisitor): Observable<ForthcomingVisitor> {
//     return this.http.post<ForthcomingVisitor>(`${this.forthcomingApiUrl}/${visitor.id}`, visitor, this.httpOptions);
//   }

//   updateOutgoingVisitor(visitor: OutgoingVisitor): Observable<OutgoingVisitor> {
//     return this.http.post<OutgoingVisitor>(`${this.outgoingApiUrl}/${visitor.id}`, visitor, this.httpOptions);
//   }









// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForthcomingVisitor } from '../models/forthcoming-visitor.model';
import { OutgoingVisitor } from '../models/outgoing-visitor.model';

@Injectable({
  providedIn: 'root'
})
export class AllVisitorsService {
  private forthcomingApiUrl = 'https://localhost:7077/api/ForthcomingVisitors';
  private outgoingApiUrl = 'https://localhost:7077/api/OutgoingVisitors';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getForthcomingVisitors(): Observable<ForthcomingVisitor[]> {
    return this.http.get<ForthcomingVisitor[]>(this.forthcomingApiUrl);
  }

  getOutgoingVisitors(): Observable<OutgoingVisitor[]> {
    return this.http.get<OutgoingVisitor[]>(this.outgoingApiUrl);
  }

  deleteForthcomingVisitor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.forthcomingApiUrl}/${id}`, this.httpOptions);
  }

  deleteOutgoingVisitor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.outgoingApiUrl}/${id}`, this.httpOptions);
  }

  updateForthcomingVisitor(visitor: ForthcomingVisitor): Observable<ForthcomingVisitor> {
    return this.http.put<ForthcomingVisitor>(`${this.forthcomingApiUrl}/${visitor.id}`, visitor, this.httpOptions);
  }

  updateOutgoingVisitor(visitor: OutgoingVisitor): Observable<OutgoingVisitor> {
    return this.http.put<OutgoingVisitor>(`${this.outgoingApiUrl}/${visitor.id}`, visitor, this.httpOptions);
  }
}
