import { Component, OnInit, Input } from '@angular/core';
import { StatData } from 'src/app/models/StatData';

declare var Chart: any;


@Component({
	selector: 'app-data-chart',
	templateUrl: './data-chart.component.html',
	styleUrls: ['./data-chart.component.scss']
})
export class DataChartComponent implements OnInit {

	@Input() data: StatData[];
	@Input() elementId: string;
	parsedData: Object;

	constructor() { }

	ngOnInit(): void { }

	ngOnChanges(): void {

		var canvas = <HTMLCanvasElement>document.getElementById(this.elementId);
		if (canvas) {
			var ctx = canvas.getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'bar',
				data: this.parseData(this.data),
				options: {
					minBarLength: '100px',
					scales: {
						yAxes: [{
							ticks: {
							}
						}]
					},
					legend: {
						display: true
					}
				}
			});
		}
	}

	private parseData(data: StatData[]): Object {

		if (data) {
			let labels = [];
			let datasets = [];
			let datasetColisionAmount = [];
			let datasetAccidents = [];
			let datasetKilled = [];
			let datasetInjured = [];
			data.forEach(element => {
				labels.push(element.description);
				datasetColisionAmount.push(element.colisionAmmount);
				datasetAccidents.push(element.accidentsAmmount);
				datasetKilled.push(element.killed);
				datasetInjured.push(element.injured);
			});

			datasets.push({
				label: 'Ilość kolizji',
				data: datasetColisionAmount,
				backgroundColor: '#F00'
			});
			datasets.push({
				label: 'Ilość wypadków',
				data: datasetAccidents,
				backgroundColor: '#FF0'
			});
			datasets.push({
				label: 'Ilość zabitych',
				data: datasetKilled,
				backgroundColor: '#000'
			});
			datasets.push({
				label: 'Ilość rannych',
				data: datasetInjured,
				backgroundColor: '#00F'
			});

			return {
				labels,
				datasets
			};
		} else {
			return {};
		}

	}

}
