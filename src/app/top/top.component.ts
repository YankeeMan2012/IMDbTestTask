import {Component, OnInit} from '@angular/core';
import {HttpService} from '../_services/http.service';
import {IFilm} from '../_interfaces/interfaces';

@Component({
    selector: 'app-top',
    templateUrl: './top.component.html',
    styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

    private films: IFilm[] = [];
    private favorites: any = {};

    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
        this.favorites = JSON.parse(localStorage.getItem('favorites')) || {};
        this.httpService.getFilms().subscribe(
            data => {
                this.films = data;
            }
        );
    }
}
