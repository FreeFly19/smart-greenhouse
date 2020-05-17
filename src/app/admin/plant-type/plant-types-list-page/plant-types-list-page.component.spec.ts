import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantTypesListPageComponent } from './plant-types-list-page.component';

describe('PlantTypesListPageComponent', () => {
  let component: PlantTypesListPageComponent;
  let fixture: ComponentFixture<PlantTypesListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantTypesListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantTypesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
