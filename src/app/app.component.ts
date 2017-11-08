import { Component, OnInit } from '@angular/core';
import{ MService} from './m.service';
import { FormsModule } from '@angular/forms';
import{Http,Response}from '@angular/http';
import'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  


  constructor(private newService:MService){}
ZoneDataName ='';

  // fetchData(){
  //   return this.http.get("src/data/info.json").map(
  //   (response)=>response.json()
  //   ).subscribe(
  //     (data)=>console.log(data))
  //  }

  ngOnInit(){
   this.newService.fetchData(); 
   this.newService.fetchArrayData();
   this.newService.fetchZoneData();
   this.newService.function(); 

  //  
 }



}
