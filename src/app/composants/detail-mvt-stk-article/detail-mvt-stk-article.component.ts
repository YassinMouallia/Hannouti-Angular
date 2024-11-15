import { Component, Input, OnInit } from '@angular/core';
import { ArticleDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-detail-mvt-stk-article',
  templateUrl: './detail-mvt-stk-article.component.html',
  styleUrls: ['./detail-mvt-stk-article.component.scss']
})
export class DetailMvtStkArticleComponent implements OnInit {
  @Input()
  articleDto: ArticleDto = {};
  constructor() { }

  ngOnInit(): void {
  }

}
