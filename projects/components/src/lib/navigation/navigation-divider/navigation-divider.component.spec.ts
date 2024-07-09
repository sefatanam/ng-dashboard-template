import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationDividerComponent } from './navigation-divider.component';

describe('NavigationDividerComponent', () => {
  let component: NavigationDividerComponent;
  let fixture: ComponentFixture<NavigationDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationDividerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
