import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IFilm, ITrailer} from '../_interfaces/interfaces';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService {

    private api = 'http://www.myapifilms.com/imdb/';

    constructor(private http: Http) {
    }

    public getFilms(): Observable<IFilm[]> {
        const apiParam = 'src/app/_shared/top.json';
        // return this.http.get(this.api + param)
        return this.http.get(apiParam)
            .map((resp: Response) => {
                return resp.json().data.movies;
            })
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    public getTrailers(param: string): Observable<ITrailer[]> {
        // return this.http.get(this.api + param)
        return this.http.get(param)
            .map((resp: Response) => {
                return resp.json();
            })
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

}
