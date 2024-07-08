import { Component, viewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { RouterOutlet } from '@angular/router';
import { PageLoadingBarComponent } from '../../projects/components/src';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, PageLoadingBarComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'dive-into-angular';
	accordion = viewChild.required(MatAccordion);
}
