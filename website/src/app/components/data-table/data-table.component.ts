import { Component, OnInit, Input } from '@angular/core';
import { StatData } from 'src/app/models/StatData';

declare var $: any;

@Component({
	selector: 'app-data-table',
	templateUrl: './data-table.component.html',
	styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

	@Input() data: StatData[];

	constructor() { }

	ngOnChanges(): void {
		setInterval(() => {
			$.bootstrapSortable({ applyLast: true });
		}, 5);
	}

	ngOnInit(): void {
	}

}
