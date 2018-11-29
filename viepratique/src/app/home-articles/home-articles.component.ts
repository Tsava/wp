import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { CategoriesService } from '../services/categories.service';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-home-articles',
  templateUrl: './home-articles.component.html',
  styleUrls: ['./home-articles.component.css'],
  animations: [
    trigger('flyInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave',
        animate(1000)
      )
    ])
  ]
})
export class HomeArticlesComponent implements OnInit {

  articles: Object;
  categories: Object;
  articles2: Array<Object>;
  per_page: number;

  constructor(private articleService: ArticlesService, private router: Router, private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.per_page = 10;
    this.populateHome();
  }

  populateHome() {
    this.articleService.getArticles(this.per_page).subscribe(data => {
      this.articles = null;
      this.articles = data;
    });
  }
  moreDetails() {
    this.per_page += 10;
    this.populateHome();

  }

  details(id) {
    this.router.navigate(['/postDetails/' + id]);
  }


  checkIndex(index) {
    if (index === 0 || index % 3 === 0) {
      return 'post col-12' ;
    } else {
      return 'post col-6' ;
    }
  }

  checkTitleIndex(index) {
    if (index === 0 || index % 3 === 0) {
      return 'centered display-3 title';
    } else {
      return 'centered title text';
    }
  }
}
