import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliesListPageComponent } from './families-list-page.component';

describe('FamiliesListPageComponent', () => {
  let component: FamiliesListPageComponent;
  let fixture: ComponentFixture<FamiliesListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiliesListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
