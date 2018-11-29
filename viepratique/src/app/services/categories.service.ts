import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getOneCategories(id) {
    return this.http.get('http://localhost/wp-json/wp/v2/categories/' + id);
  }
  getCategories() {
    return this.http.get('http://localhost/wp-json/wp/v2/categories');
  }
}
