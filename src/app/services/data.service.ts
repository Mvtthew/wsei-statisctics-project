import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatData } from '../models/StatData';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor() { }

	getBehaviorData(): Observable<StatData[]> {
		return new Observable<StatData[]>(subscriber => {
			fetch('assets/data/behavior.json').then(res => res.json()).then(data => {
				subscriber.next(data);
			});
		});
	}

	getPlaceData(): Observable<StatData[]> {
		return new Observable<StatData[]>(subscriber => {
			fetch('assets/data/place.json').then(res => res.json()).then(data => {
				subscriber.next(data);
			});
		});
	}

	getVehicleData(): Observable<StatData[]> {
		return new Observable<StatData[]>(subscriber => {
			fetch('assets/data/vehicle.json').then(res => res.json()).then(data => {
				subscriber.next(data);
			});
		});
	}

}
