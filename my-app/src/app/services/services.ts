import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class SharedService {
constructor(private http: HttpClient) {
 }
 public addMeetingPostService(serviceURL, params): Observable<any> {
      console.log('IN POST SERVICE');
      return this.http.post(serviceURL, params, {headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', '*/*')});
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
