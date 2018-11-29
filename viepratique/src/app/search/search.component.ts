import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../services/articles.service';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
    trigger('flyInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave',
        animate(500)
      )
    ])
  ]
})
export class SearchComponent implements OnInit {

  keyWord: string;
  articles: any;
  emptyResult: Boolean;

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticlesService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(data => {
      this.keyWord = data['keyWord'];
    });
    this.getSearchedArticles();


  }

  details(id) {
    this.router.navigate(['/postDetails/' + id]);
  }

  getSearchedArticles() {
    this.articleService.searchArticle(this.keyWord).subscribe(data => {
      this.articles = data;
    });
  }

}
