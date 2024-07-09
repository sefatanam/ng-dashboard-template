import { Component } from '@angular/core';

@Component({
	selector: 'lib-navigation-divider',
	exportAs: 'libNavigationDivider',
	templateUrl: './navigation-divider.component.html',
	styleUrl: './navigation-divider.component.css',
	host: {
		// eslint-disable-next-line prettier/prettier
		'class': 'navigation-divider',
	},
})
export class NavigationDividerComponent {}
