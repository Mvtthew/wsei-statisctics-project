import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { StatData } from 'src/app/models/StatData';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	behaviorData: StatData[];
	placeData: StatData[];
	vehicleData: StatData[];

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
