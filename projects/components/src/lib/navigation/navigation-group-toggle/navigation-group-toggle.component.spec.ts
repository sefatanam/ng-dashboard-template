import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationGroupToggleComponent } from './navigation-group-toggle.component';

describe('NavigationGroupToggleComponent', () => {
  let component: NavigationGroupToggleComponent;
  let fixture: ComponentFixture<NavigationGroupToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationGroupToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationGroupToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
