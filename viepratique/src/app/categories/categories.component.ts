import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../services/articles.service';
import { CategoriesService } from '../services/categories.service';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  animations: [
    trigger('flyInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave',
        animate(700)
      )
    ])
  ]
})

export class CategoriesComponent implements OnInit {

  id: any;
  articles: Object;
  categorie: Object

  constructor(private activatedRoute: ActivatedRoute, private articlesService: ArticlesService, private router: Router, private categoriesService: CategoriesService) {

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }


  ngOnInit() {

    this.activatedRoute.params.subscribe(data => {
      this.id = data['id'];
    })

    this.getArticles();

    this.categoriesService.getOneCategories(this.id).subscribe(data => {
      this.categorie = data;
    })
  }


  getArticles() {
    this.articlesService.getArticleByCategorie(this.id).subscribe(data => {
      this.articles = data;
    })
  }
  details(id) {
    this.router.navigate(['/postDetails/' + id]);
  }

  checkIndex(index) {
    if (index == 0 || index % 3 == 0) {
      return "post col-12";
    } else {
      return "post col-6";
    }

  }


}
