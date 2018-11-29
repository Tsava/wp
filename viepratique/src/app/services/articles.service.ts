import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic U29tZToxMjM0NTY3ODk='
    })
  };


  constructor(private http: HttpClient) { }




  getArticles(i) {
    return this.http.get('http://localhost/wp-json/wp/v2/posts?per_page=' + i);
  }
  getAllArticles(): Observable<Object[]> {
    return this.http.get<Object[]>('http://localhost/wp-json/wp/v2/posts');
  }

  getSingleArticle(id) {
    return this.http.get('http://localhost/wp-json/wp/v2/posts/' + id);
  }


  getPostComments(id) {
    return this.http.get('http://localhost/wp-json/wp/v2/comments?post=' + id);
  }

  AddComment(comment) {
    return this.http.post('http://localhost/wp-json/wp/v2/comments', comment.toString(), this.httpOptions);
  }

  getArticleByCategorie(id) {
    return this.http.get('http://localhost/wp-json/wp/v2/posts?categories=' + id);
  }

  searchArticle(keyWord) {
    return this.http.get('http://localhost/wp-json/wp/v2/search/' + keyWord);
  }
}
