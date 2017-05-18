import {Component, Input, OnInit} from '@angular/core';
import {IFilm, ITrailer} from '../_interfaces/interfaces';
import {HttpService} from '../_services/http.service';
import {MdDialog, MdDialogConfig} from '@angular/material';
import {TrailerComponent} from '../trailer/trailer.component';

@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

    @Input() film: IFilm;
    private trailers: ITrailer[] = [];
    private favorites: any = {};

    constructor(private httpService: HttpService, private dialog: MdDialog) {
    }

    ngOnInit(): void {
        this.favorites = JSON.parse(localStorage.getItem('favorites')) || {};
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
        this.favorites = JSON.parse(localStorage.getItem('favorites')) || {};
        const idIMDB = film.idIMDB;
        if (this.favorites[idIMDB]) {
            delete this.favorites[idIMDB];
        } else {
            this.favorites[idIMDB] = true;
        }
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
}
