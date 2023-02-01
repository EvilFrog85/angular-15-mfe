import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-news-container',
  template: `
    <!--
    <mfe-news page="1" pageSize="3"></mfe-news>
    -->
    <ng-template #placeHolderNewsComponent></ng-template>
  `
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
      remoteName: 'mfeNews',
      exposedModule: './Component'
    });

    console.log(m);

    const ref = this.ViewContainer.createComponent(m.NewsComponent);
    // const compInstance = ref.instance;
  }
}
