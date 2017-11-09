import { Component, OnInit } from '@angular/core';
import { MService } from './m.service';
import { FormsModule } from '@angular/forms';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private fareService: MService) { }
  objfareServiceForm: fareServicEntity = new fareServicEntity();
  faresData: any;
  riding: any;
  IsAllSelected: boolean = false;
  total: number;
  ridingPeriods = [{ name: "Weekdays", value: "weekday" }, { name: "Weekend Evening", value: "evening_weekend" }, { name: "AnyTime", value: "anytime" }];
  purchaseProviders = [{ name: "Onboard", value: "onboard_purchase" }, { name: "Station Kiosk", value: "advance_purchase" }]

  ngOnInit() {
    this.fareService.fetchData().subscribe(data => {
      this.faresData = data;
      this.objfareServiceForm.ridingPeriod = this.ridingPeriods[0].value;
       this.objfareServiceForm.zoneName = data.zones[0].name;
    });

  }
  onCalculate() {
    if (this.objfareServiceForm.numberOfRide == undefined ||
      this.objfareServiceForm.purchaseType == "" || this.objfareServiceForm.ridingPeriod == "" ||
      this.objfareServiceForm.zoneName == "") {
      this.IsAllSelected = true;
    }
    else {
      let selectedFareItem: any;
      var objThis = this;
      this.faresData.zones.filter(function (item) {
        debugger;
        if (item.name == objThis.objfareServiceForm.zoneName) {
          debugger;
          item.fares.filter(function (fare) {
            if (fare.type == objThis.objfareServiceForm.ridingPeriod && fare.purchase == objThis.objfareServiceForm.purchaseType) {
              selectedFareItem = fare;
              return;
            }
          })
        }
      });
      if (selectedFareItem.trips == 1) {
        this.total = this.objfareServiceForm.numberOfRide * selectedFareItem.price;
      }
      this.IsAllSelected = false;
    }
  }

}

export class fareServicEntity {
  zoneName: string;
  ridingPeriod: string;
  purchaseType: string;
  numberOfRide: number;
}
