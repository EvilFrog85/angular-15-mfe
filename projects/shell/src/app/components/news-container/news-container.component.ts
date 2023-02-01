import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs/internal/operators/take';

@Component({
    selector: 'app-news-container',
    standalone: true,
    template: `
    <ng-template #placeHolderNewsComponent></ng-template>
  `,
    imports: [CommonModule, HttpClientModule]
})
export class NewsContainerComponent implements OnInit {

    @ViewChild('placeHolderNewsComponent', { read: ViewContainerRef }) ViewContainer!: ViewContainerRef;

    constructor() { }

    ngOnInit(): void {
        this.load();
    }

    async load(): Promise<void> {
        const m = await loadRemoteModule({
            type: 'manifest',
            remoteName: 'mfeNewsComponent',
            exposedModule: './Component'
        });

        const ref = this.ViewContainer.createComponent(m.NewsComponent);

        /*
        TODO - As a highligt
        Warning!
        Everything below this line relates to setting page and pageSize attributes and listening on hasLoaded-event on the external mfe component.
        Using mfe:s as a component seems to be discouraged in general and that may be the reason I didn't 
        find a general solution to this "problem" - or I was way off from the get go. Anti-pattern?
        */
        const compInstance = ref.instance as ExternalElement;

        compInstance.pageSize = '2';
        compInstance.page = '1';
        // This way of unsubscribing the event feels like a hack and be handled properly
        compInstance.hasLoaded.pipe(take(1)).subscribe( (e: any) => {
            console.log("News has been loaded");
        });
    }
}
interface ExternalElement {
    [index: string]: any;
    page: string;
    pageSize: string;
    hasLoaded: any;
}