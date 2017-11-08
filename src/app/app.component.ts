import { Component, OnInit } from '@angular/core';
import{ MService} from './m.service';
import{Http,Response}from '@angular/http';
import'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  X:number;
  


  


  constructor(private newService:MService){}
  // fetchData(){
  //   return this.http.get("src/data/info.json").map(
  //   (response)=>response.json()
  //   ).subscribe(
  //     (data)=>console.log(data))
  //  }

  ngOnInit(){
   this.newService.fetchData(); 
 }

calculator(zone1:number, zone2: number)
{
  this.X = zone1*zone2;
}
}
