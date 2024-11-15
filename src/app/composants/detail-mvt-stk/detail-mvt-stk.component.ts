import { Component, Input, OnInit } from '@angular/core';
import { MvtStk, MvtStkDto } from 'src/gs-api/src/models';
import { MvtstkService } from 'src/gs-api/src/services';

@Component({
  selector: 'app-detail-mvt-stk',
  templateUrl: './detail-mvt-stk.component.html',
  styleUrls: ['./detail-mvt-stk.component.scss']
})
export class DetailMvtStkComponent implements OnInit {
  @Input()
  mvtstklist:Array<MvtStkDto>=[];
  @Input()
  articleid:number=0;


  constructor(private mvtstockService: MvtstkService) { }

  ngOnInit(): void {
    this.findListMVT();
  }
  findListMVT(): void {
    this.mvtstockService.mvtStkArticle(this.articleid)
    .subscribe(mvt => {
      this.mvtstklist = mvt;
    });
  }
  

}
