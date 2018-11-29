import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { trigger, state, style, animate, transition} from '@angular/animations';


@Component({
  selector: 'app-post-views',
  templateUrl: './post-views.component.html',
  styleUrls: ['./post-views.component.css'],
  animations: [
    trigger('flyInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave',
        animate(1000)
      )
    ])
  ]
})
export class PostViewsComponent implements OnInit {

  posts : Array<Object>;

  constructor(private articlesService : ArticlesService) { }

  ngOnInit() {
    this.articlesService.getAllArticles().subscribe(data=>{
      this.posts=null;
      this.posts=(data.sort((a,b) => Number.parseInt(b['acf'].View) - Number.parseInt(a['acf'].View)));
      console.log(JSON.stringify(this.posts));
    })
  }
}
