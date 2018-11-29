import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('flyInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave',
        animate(700)
      )
    ])
  ]
})
export class NavbarComponent implements OnInit {

  categories: Object;
  search: string;

  constructor(private categoriesService: CategoriesService,private router:Router) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  searchIt() {
    if(this.search!==null || this.search!=undefined){
    this.router.navigate(['/search/'+this.search]);
    }
  }

}
