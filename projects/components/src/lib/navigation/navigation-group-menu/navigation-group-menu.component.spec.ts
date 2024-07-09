import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationGroupMenuComponent } from './navigation-group-menu.component';

describe('NavigationGroupMenuComponent', () => {
  let component: NavigationGroupMenuComponent;
  let fixture: ComponentFixture<NavigationGroupMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationGroupMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationGroupMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
