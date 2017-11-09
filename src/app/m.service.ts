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


  fetchArrayData(){
    return this.http.get('assets/info.json')
    .map((response)=>response.json()
    ).subscribe(
      (data)=>console.log(data.info)
     )
  
}

// cityName='';


fetchZoneData(){
  return this.http.get('assets/info.json')
  .map((response)=>response.json()
  ).subscribe(
    (data)=>console.log(data.zones)
   )

}

function(){return this.http.get('assets/info.json')
  .map((response)=>response.json()
).subscribe(
  (data)=>console.log(data.zones,data.fares.purchase,data.fares.price * data.fares.trips)

//data.zones.zone,data.zones.fares.type, data.zones.fares.purchase, 
//data.zones.fares.price, data.zones.fares.trips
//

)

}

}
