import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
	selector: '[libNavigationGroupToggleIcon]',
	exportAs: 'navigationGroupToggleIcon',
	host: {
		class: 'navigation-group-toggle-icon',
	},
})
export class NavigationGroupToggleIconDirective {
	public readonly templateRef = inject(TemplateRef, { optional: true });
}
