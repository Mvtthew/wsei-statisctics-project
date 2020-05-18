import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Behavior } from '../models/Behavior';
import { Vehicle } from '../models/Vehicle';
import { Place } from '../models/Place';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor() { }

	getBehaviorData(): Observable<Behavior[]> {
		return new Observable<Behavior[]>(subscriber => {
			fetch('assets/data/behavior.json').then(res => res.json()).then(data => {
				subscriber.next(data);
			});
		});
	}

	getPlaceData(): Observable<Vehicle[]> {
		return new Observable<Vehicle[]>(subscriber => {
			fetch('assets/data/place.json').then(res => res.json()).then(data => {
				subscriber.next(data);
			});
		});
	}

	getVehicleData(): Observable<Place[]> {
		return new Observable<Place[]>(subscriber => {
			fetch('assets/data/vehicle.json').then(res => res.json()).then(data => {
				subscriber.next(data);
			});
		});
	}

}
