import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-page-not-found',
	standalone: true,
	imports: [RouterLink, MatAnchor, MatSlideToggle, MatAnchor, RouterLink],
	templateUrl: './page-not-found.component.html',
	styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {}
