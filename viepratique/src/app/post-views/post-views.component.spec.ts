import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostViewsComponent } from './post-views.component';

describe('PostViewsComponent', () => {
  let component: PostViewsComponent;
  let fixture: ComponentFixture<PostViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
