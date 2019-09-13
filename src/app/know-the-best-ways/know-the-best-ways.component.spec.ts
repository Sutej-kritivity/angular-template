import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowTheBestWaysComponent } from './know-the-best-ways.component';

describe('KnowTheBestWaysComponent', () => {
  let component: KnowTheBestWaysComponent;
  let fixture: ComponentFixture<KnowTheBestWaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowTheBestWaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowTheBestWaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
