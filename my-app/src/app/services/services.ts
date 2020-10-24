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
constructor(private http: HttpClient,
      
    ) {
 }
public postServiceFormData( serviceURL): Observable<any> {
    if(window.location.host.split(':')[0]=="localhost"){
      
    return this.http.post(serviceURL, {headers: new HttpHeaders().set('Content-Disposition', 'form-data')
    .set('x-requested-by', JSON.parse(window.localStorage["session"]).session_resource.session.id.toString()) 
      .set('otmmauthtoken',JSON.parse(sessionStorage.session).session_resource.session.message_digest.toString())});
      }
    else{
    return this.http.post(serviceURL, {headers: new HttpHeaders().set('Content-Disposition', 'form-data')
    .set('x-requested-by', JSON.parse(window.localStorage["session"]).session_resource.session.id.toString()) 
    .set('otmmauthtoken',JSON.parse(sessionStorage.session).session_resource.session.message_digest.toString())});
    }
  }
}