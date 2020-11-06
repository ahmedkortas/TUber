import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapMapSearchComponent } from './bootstrap-map-search.component';

describe('BootstrapMapSearchComponent', () => {
  let component: BootstrapMapSearchComponent;
  let fixture: ComponentFixture<BootstrapMapSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapMapSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapMapSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
