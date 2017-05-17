import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HttpService} from './_services/http.service';

import {AppComponent} from './app.component';
import {TopComponent} from './top/top.component';
import {TrailerComponent} from './trailer/trailer.component';
import {ChartComponent} from './chart/chart.component';
import {routing} from './app.routing';

import {
    MdButtonModule,
    MdCardModule,
    MdDialogModule,
    MdIconModule,
    MdMenuModule,
    MdToolbarModule
} from '@angular/material';

import {Ng2GoogleChartsModule} from 'ng2-google-charts';
import {FavoritesComponent} from './favorites/favorites.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MdToolbarModule,
        MdMenuModule,
        MdCardModule,
        MdButtonModule,
        MdIconModule,
        MdDialogModule,
        BrowserAnimationsModule,
        Ng2GoogleChartsModule,
        routing
    ],
    declarations: [
        AppComponent,
        TopComponent,
        TrailerComponent,
        ChartComponent,
        FavoritesComponent
    ],
    providers: [HttpService],
    bootstrap: [AppComponent],
    entryComponents: [
        TrailerComponent
    ]
})
export class AppModule {
}
