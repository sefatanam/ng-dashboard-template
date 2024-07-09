import { Component } from '@angular/core';

@Component({
	selector: 'lib-navigation-group',
	exportAs: 'libNavigationGroup',
	templateUrl: './navigation-group.component.html',
	styleUrl: './navigation-group.component.css',
	host: {
		// eslint-disable-next-line prettier/prettier
    'class': 'navigation-group'
	},
})
export class NavigationGroupComponent {}
