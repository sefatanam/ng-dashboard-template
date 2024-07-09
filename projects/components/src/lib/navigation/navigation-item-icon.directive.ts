import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
	selector: '[libNavigationItemIcon]',
	exportAs: 'navigationItemIcon',
	host: {
		class: 'navigation-item-icon',
	},
})
export class NavigationItemIconDirective {
	public readonly templateRef = inject(TemplateRef, { optional: true });
}
