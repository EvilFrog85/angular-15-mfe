import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewsDataService } from './news.service';
import { take } from 'rxjs/internal/operators/take';

import { Article } from '../models/Article';

@Component({
  selector: 'mfe-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  @Input() pageSize: string | undefined = undefined;
  @Input() page: string | undefined = undefined;

  @Output() hasLoaded = new EventEmitter<void>();

  articles: Article[] = [];

  constructor(private newsDataService: NewsDataService) { }

  ngOnInit() {
    this.newsDataService.getNews(this.pageSize, this.page).pipe(take(1)).subscribe((data: Article[]) => {
      this.articles = data;
      this.hasLoaded.emit();
    });
  }
}
