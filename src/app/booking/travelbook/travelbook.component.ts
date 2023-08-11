import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelService } from 'src/app/travel.service';
@Component({
  selector: 'app-travelbook',
  templateUrl: './travelbook.component.html',
  styleUrls: ['./travelbook.component.scss']
})
export class TravelbookComponent implements OnInit {

  destinations: string[];
  selectedSource:any
  selectedDestination:any
  distance: number | undefined;
  ratePerKm: number = 10; // Set your desired rate per kilometer here
  travelExpense: number | undefined;

  constructor(private router:Router ,private tavelService:TravelService) {
    this.destinations = this.tavelService.getDestinations();
   }

  ngOnInit(): void {
  }
back(){
  this.router.navigate(['./home'])

}

calculateTravelExpense() {
  this.distance = this.tavelService.getDistance(this.selectedSource, this.selectedDestination);
  this.travelExpense = this.tavelService.calculateExpense(this.distance, this.ratePerKm);
}
}
