import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {DomSanitizer, SafeHtml, SafeResourceUrl} from '@angular/platform-browser';

@Component({
    selector: 'app-trailer',
    templateUrl: './trailer.component.html',
    styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent implements OnInit {

    html: SafeHtml;

    constructor(public dialogRef: MdDialogRef<TrailerComponent>, private sanitizer: DomSanitizer) {
    }

    ngOnInit(): void {
        const html = this.dialogRef._containerInstance.dialogConfig.data.embed;
        this.html = this.sanitizer.bypassSecurityTrustHtml(html);
    }

}
