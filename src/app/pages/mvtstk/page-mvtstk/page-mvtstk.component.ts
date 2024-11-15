import { Component, OnInit } from '@angular/core';
import { ArticleDto } from 'src/gs-api/src/models';
import { ArticleService } from 'src/app/services/article/article.service';
@Component({
  selector: 'app-page-mvtstk',
  templateUrl: './page-mvtstk.component.html',
  styleUrls: ['./page-mvtstk.component.scss']
})
export class PageMvtstkComponent implements OnInit {
  listarticle:Array<ArticleDto>=[];
  constructor(private ArticleService:ArticleService) { }

  ngOnInit(): void {
    this.findListArticle();
    
  }
  findListArticle(): void {
    this.ArticleService.findAllArticles()
    .subscribe(articles => {
      this.listarticle = articles;
    });
  }

}
