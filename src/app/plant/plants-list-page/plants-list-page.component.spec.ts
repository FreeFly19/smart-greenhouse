import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsListPageComponent } from './plants-list-page.component';

describe('PlantsListPageComponent', () => {
  let component: PlantsListPageComponent;
  let fixture: ComponentFixture<PlantsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
