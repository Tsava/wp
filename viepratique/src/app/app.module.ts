import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeArticlesComponent } from './home-articles/home-articles.component';
import { ArticlesService } from './services/articles.service';
import { CategoriesService } from './services/categories.service';
import { PostDetailsComponent } from './post-details/post-details.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { PostViewsComponent } from './post-views/post-views.component';

const appRoute: Routes = [
  { path: 'Home', component: HomeArticlesComponent },
  { path: 'postDetails/:id', component: PostDetailsComponent },
  { path: 'categories/:id', component: CategoriesComponent },
  { path: 'mostViewed', component: PostViewsComponent },
  { path: 'search/:keyWord', component: SearchComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '**', redirectTo: 'Home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeArticlesComponent,
    PostDetailsComponent,
    CategoriesComponent,
    FooterComponent,
    SearchComponent,
    PostViewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule
  ],
  providers: [
    ArticlesService,
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
