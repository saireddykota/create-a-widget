import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import{Http,Response, Headers, RequestOptions}from '@angular/http';
import'rxjs/add/operator/map';

@Injectable()
export class MService {
  constructor(private http:Http) { }
  fetchData():Observable<any>{
      return this.http.get('assets/info.json')
      .map((response)=>response.json()
      );   
  }

}
