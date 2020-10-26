import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { timeout, catchError, map, finalize, timeoutWith } from 'rxjs/operators';

import { throwError, TimeoutError } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class SharedService {
constructor(private http: HttpClient) {
 }
 public addMeetingPostService(serviceURL, params): Observable<any> {
    if(window.location.host.split(':')[0]=="localhost"){
      console.log('IN POST SERVICE');
      return this.http.post(serviceURL, params, {headers: new HttpHeaders().set('Content-Type', 'application/json')
    .set('Accept', '*/*')});
      }
    else{
      console.log('IN POST SERVICE ELSE');
      return this.http.post(serviceURL, params, {headers: new HttpHeaders().set('Content-Type', 'application/json')
      .set('Accept', '*/*')});
    }
  }
public getInviteesRecGetService(serviceUrl): Observable<any> {
    var getHeaders = { 
    headers: new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', '*/*'),
    }
    return this.http.get(serviceUrl,getHeaders);
}
}
