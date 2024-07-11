import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DONEComponent } from './done.component';

describe('DONEComponent', () => {
	let component: DONEComponent;
	let fixture: ComponentFixture<DONEComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DONEComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(DONEComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
