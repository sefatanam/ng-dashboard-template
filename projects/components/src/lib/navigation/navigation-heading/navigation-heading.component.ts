import { Component } from '@angular/core';

@Component({
	selector: 'lib-navigation-heading',
	exportAs: 'libNavigationHeading',
	templateUrl: './navigation-heading.component.html',
	styleUrl: './navigation-heading.component.css',
	host: {
		class: 'navigation-heading',
	},
})
export class NavigationHeadingComponent {}
