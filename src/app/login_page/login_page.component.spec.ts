import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Login_pageComponent } from './login_page.component';

describe('Login_pageComponent', () => {
  let component: Login_pageComponent;
  let fixture: ComponentFixture<Login_pageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login_pageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Login_pageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
