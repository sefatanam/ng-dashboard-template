import { Component, Input, booleanAttribute } from '@angular/core';
import { LAYOUT } from '../types';

@Component({
	selector: 'lib-layout',
	exportAs: 'layout',
	standalone: true,
	imports: [],
	templateUrl: './layout.component.html',
	styleUrl: './layout.component.css',
	providers: [
		{
			provide: LAYOUT,
			useExisting: LayoutComponent,
		},
	],
	host: {
		// eslint-disable-next-line prettier/prettier
		'class': 'layout',
		'[class.is-window-mode]': 'windowMode',
	},
})
export class LayoutComponent {
	@Input()
	layoutId: string | undefined;

	@Input({ transform: booleanAttribute })
	windowMode = false;
}
