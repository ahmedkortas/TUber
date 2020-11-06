import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackovflwAutocompleteComponent } from './stackovflw-autocomplete.component';

describe('StackovflwAutocompleteComponent', () => {
  let component: StackovflwAutocompleteComponent;
  let fixture: ComponentFixture<StackovflwAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackovflwAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackovflwAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
