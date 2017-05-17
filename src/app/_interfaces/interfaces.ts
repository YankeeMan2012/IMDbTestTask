interface IPerson {
    id: string;
    name: string;
}

export interface IFilm {
    countries: string[];
    directors: IPerson[];
    genres: string[];
    idIMDB: string;
    languages: string[];
    metascore: number;
    originalTitle: string;
    plot: string;
    ranking: number;
    rated: string;
    rating: number;
    releaseDate: number;
    runtime: string;
    simplePlot: string;
    title: string;
    type: string;
    urlIMDB: string;
    urlPoster: string;
    votes: string;
    writers: IPerson[];
    year: number;
}

export interface ITrailer {
    embed: string;
    imdb: string;
    link: string;
    pubDate: string;
    title: string;
    trailer_id: number;
}

export interface IChart {
    chartType: string;
    dataTable: [(string | number)[]];
    options: {
        title: string;
        width: number;
        height: number;
    };
}
