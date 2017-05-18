import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IFilm, ITrailer} from '../_interfaces/interfaces';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {environment} from '../../environments/environment';

@Injectable()
export class HttpService {

    private host: string;

    constructor(private http: Http) {
        if (environment.production) {
            this.host = 'http://www.myapifilms.com/imdb/top?start=1&end=20&token=8309' +
                'fe04-62fb-46fb-b54e-37d1f0de1e6c&format=json&data=1';
        } else {
            this.host = 'src/app/_shared/top.json';
        }
    }

    public getFilms(): Observable<IFilm[]> {
        return this.http.get(this.host)
            .map((resp: Response) => {
                return resp.json().data.movies;
            })
            .catch((error: Error) => {
                return Observable.throw(error);
            });
    }

    public getTrailers(param: string): Observable<ITrailer[]> {
        return this.http.get(param)
            .map((resp: Response) => {
                return resp.json();
            })
            .catch((error: Error) => {
                return Observable.throw(error);
            });
    }

}
