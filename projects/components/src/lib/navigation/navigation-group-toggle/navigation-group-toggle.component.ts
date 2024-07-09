import { Component, ContentChild, HostListener, Input, inject } from '@angular/core';
import { NavigationApiService } from '../navigation-api.service';
import { NavigationGroupToggleIconDirective } from '../navigation-group-toggle-icon.directive';

@Component({
	selector: 'lib-navigation-group-toggle',
	exportAs: 'libNavigationGroupToggle',
	templateUrl: './navigation-group-toggle.component.html',
	styleUrl: './navigation-group-toggle.component.css',
	host: {
		class: 'navigation-group-toggle',
		'[class.is-active]': 'active',
	},
})
export class NavigationGroupToggleComponent {
	readonly api = inject(NavigationApiService);

	@ContentChild(NavigationGroupToggleIconDirective)
	readonly iconRef!: NavigationGroupToggleIconDirective;

	@Input()
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	for!: any;

	get active(): boolean {
		return this.api.isGroupActive(this.for);
	}

	@HostListener('click', ['$event'])
	toggle(event: MouseEvent) {
		event.preventDefault();
		event.stopPropagation();
		this.api.toggleGroup(this.for);
	}
}
