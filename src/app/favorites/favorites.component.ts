import {Component, OnInit} from '@angular/core';
import {HttpService} from '../_services/http.service';
import {IFilm, ITrailer} from '../_interfaces/interfaces';
import {TrailerComponent} from '../trailer/trailer.component';
import {MdDialog, MdDialogConfig} from '@angular/material';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})

export class FavoritesComponent implements OnInit {

    private films: IFilm[] = [];
    private trailers: ITrailer[] = [];
    private favorites: any = {};

    constructor(private httpService: HttpService, private dialog: MdDialog) {
    }

    ngOnInit() {
        this.favorites = JSON.parse(localStorage.getItem('favorites')) || {};
        // const apiParam = 'top?start=1&end=20&token=8309fe04-62fb-46fb-b54e-37d1f0de1e6c&format=json&data=1';
        this.httpService.getFilms().subscribe(
            data => {
                this.films = data;
                console.log(data);
                this.getTrailers();
            }
        );
    }

    private getTrailers(): void {
        const apiParam = 'src/app/_shared/trailers.json';
        this.httpService.getTrailers(apiParam).subscribe(
            data => {
                this.trailers = data;
            }
        );
    }

    private openTrailer(trailer: ITrailer): void {
        const config = new MdDialogConfig();
        config.data = {embed: trailer.embed};
        this.dialog.open(TrailerComponent, config);
    }

    private toFavorites(film: IFilm): void {
        const idIMDB = film.idIMDB;
        if (this.favorites[idIMDB]) {
            delete this.favorites[idIMDB];
        } else {
            this.favorites[idIMDB] = true;
        }
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }

}
