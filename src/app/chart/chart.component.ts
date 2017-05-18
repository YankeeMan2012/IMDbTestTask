import {Component, OnInit} from '@angular/core';
import {IChart} from '../_interfaces/interfaces';
import {HttpService} from '../_services/http.service';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

    private pieChartOptions: IChart = {
        chartType: 'PieChart',
        dataTable: [
            ['Films', 'Films on decades']
        ],
        options: {
            width: 1000,
            height: 800,
            title: 'Films on decades'
        },
    };

    constructor(private httpService: HttpService) {
    }

    ngOnInit(): void {
        this.httpService.getFilms().subscribe(
            data => {
                const obj: any = {};
                data.forEach((item) => {
                    const num = Math.floor((item.year - 1900) / 10) * 10;
                    if (num < 100) {
                        obj[num + '-th'] = obj[num + '-th'] ? obj[num + '-th'] + 1 : 1;
                    } else {
                        obj[num + 1900 + '-th'] = obj[num + 1900 + '-th'] ? obj[num + 1900 + '-th'] + 1 : 1;
                    }
                });
                for (const key in obj) {
                    if ({}.hasOwnProperty.call(obj, key)) {
                        this.pieChartOptions.dataTable.push([key, obj[key]]);
                    }
                }
            }
        );
    }
}
