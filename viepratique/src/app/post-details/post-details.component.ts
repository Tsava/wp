import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../services/articles.service';
import { trigger, state, style, animate, transition} from '@angular/animations';



@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
  animations: [
    trigger('flyInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave',
        animate(500)
      )
    ])
  ]
  
})
export class PostDetailsComponent implements OnInit {

  id: any;
  article: Object;
  comments: Object;



  //----------------Form stuff ---------------------

  comment: string;
  name: string;
  email: string;
  check: any;



  constructor(private activatedRoute: ActivatedRoute, private articlesService: ArticlesService) { }

  ngOnInit() {
    this.postDetails();
    this.getComment();
  }

  postDetails() {
    this.activatedRoute.params.subscribe(data => {
      this.id = data['id'];
    })

    this.articlesService.getSingleArticle(this.id).subscribe(data => {
      this.article = data;
    })

  }
  getComment() {
    this.articlesService.getPostComments(this.id).subscribe(data => {
      this.comments = data;
    })
  }

  addComment() {

    let commen = new URLSearchParams();
    commen.set("author_email", this.email)
    commen.set("content", this.comment)
    commen.set("author_name", this.name)
    commen.set("post", this.id)

    /*let comment = { "author_email": this.email, "author_name": this.name, "content": this.comment, "post": this.id }
    alert(JSON.stringify(comment));*/


    this.articlesService.AddComment(commen).subscribe(data => {
      this.comments = null;
      this.getComment();

    })



  }
  

  /*checkCommentIndex(i){
    if(i % 2 ==0){
      return {"background-color":"gray"}
    }
  }*/

}
