import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { take } from 'rxjs/internal/operators/take';

import { Article } from '../models/Article';
import { HttpClient } from '@angular/common/http';
import { TopHeadlines } from '../models/TopHeadlines';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'mfe-news-component',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  @Input() pageSize: string | undefined = undefined;
  @Input() page: string | undefined = undefined;

  @Output() hasLoaded = new EventEmitter<void>();

  articles: Article[] = [];

  // This is for demo purposes. Don't put your API key in a frontend service..
  apiKey: string = 'Get your API key for free: https://newsapi.org/register/';
  apiKeyNotSharedInRepo = require('./../apiKey.json')['API-KEY'];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getNews(this.pageSize, this.page).pipe(take(1)).subscribe((data: Article[]) => {
      this.articles = data;
      this.hasLoaded.emit();
    });
  }

  getNews(pageSize: string = "3", page: string = "1"): Observable<Article[]>{
    return this.httpClient.get<TopHeadlines>(`https://newsapi.org/v2/top-headlines?pageSize=${parseInt(pageSize)}&page=${parseInt(page)}&sources=techcrunch&apiKey=${this.apiKeyNotSharedInRepo ? this.apiKeyNotSharedInRepo : this.apiKey}`).pipe(map( x => x.articles));
  }
}
