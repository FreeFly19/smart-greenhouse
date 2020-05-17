import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFamilyPageComponent } from './create-family-page.component';

describe('CreateFamilyPageComponent', () => {
  let component: CreateFamilyPageComponent;
  let fixture: ComponentFixture<CreateFamilyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFamilyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFamilyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
