import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlantPageComponent } from './create-plant-page.component';

describe('CreatePlantPageComponent', () => {
  let component: CreatePlantPageComponent;
  let fixture: ComponentFixture<CreatePlantPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePlantPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePlantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
