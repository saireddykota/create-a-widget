import { Injectable } from '@angular/core';
import{Http,Response, Headers, RequestOptions}from '@angular/http';
import'rxjs/add/operator/map';


@Injectable()
export class MService {

  constructor(private http:Http) { }


  fetchData(){
      return this.http.get('assets/info.json')
      .map((response)=>response.json().subscribe(
           (data)=>console.log(data))
  )
    
//   this.http.load().then((data) => {
//      console.log("what is in the data ", data);
//    this.patdata= data;
//  });

  }
}
