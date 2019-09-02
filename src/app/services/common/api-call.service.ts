import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  private _baseURL: string;

  constructor(private http: HttpClient) {
    this._baseURL = environment.baseUrl;
  }


  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  postApiRequest(requestFormat:any, functionName: string) : Observable<any> {
    return this.http.post<any>(this._baseURL + functionName, requestFormat).pipe(
      map(this.extractData));
  }

  getApiRequest(functionName: string) : Observable<any> {
    return this.http.get<any>(this._baseURL + functionName).pipe(
      map(this.extractData));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
