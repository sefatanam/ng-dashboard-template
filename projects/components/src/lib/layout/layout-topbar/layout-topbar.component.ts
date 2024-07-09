import { Component } from '@angular/core';

@Component({
	selector: 'lib-layout-topbar',
	exportAs: 'layoutTopbar',
	standalone: true,
	imports: [],
	templateUrl: './layout-topbar.component.html',
	styleUrl: './layout-topbar.component.css',
	host: {
		// eslint-disable-next-line prettier/prettier
    'class': 'layout-topbar'
	},
})
export class LayoutTopbarComponent {}
