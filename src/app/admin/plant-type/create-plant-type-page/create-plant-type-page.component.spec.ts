import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlantTypePageComponent } from './create-plant-type-page.component';

describe('CreatePlantTypePageComponent', () => {
  let component: CreatePlantTypePageComponent;
  let fixture: ComponentFixture<CreatePlantTypePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePlantTypePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePlantTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
