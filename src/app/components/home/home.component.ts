import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Behavior } from 'src/app/models/Behavior';
import { Place } from 'src/app/models/Place';
import { Vehicle } from 'src/app/models/Vehicle';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	behaviorData: Behavior[];
	placeData: Place[];
	vehicleData: Vehicle[];

	constructor(
		private dataService: DataService
	) { }

	ngOnInit(): void {
		this.dataService.getBehaviorData().subscribe(data => {
			this.behaviorData = data;
		});
		this.dataService.getPlaceData().subscribe(data => {
			this.placeData = data;
		});
		this.dataService.getVehicleData().subscribe(data => {
			this.vehicleData = data;
		});
	}

}
