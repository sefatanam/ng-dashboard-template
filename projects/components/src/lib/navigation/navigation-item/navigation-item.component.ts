import {
	booleanAttribute,
	Component,
	ContentChild,
	ElementRef,
	HostListener,
	inject,
	Input,
} from '@angular/core';
import { NavigationApiService } from '../navigation-api.service';
import { NavigationItemIconDirective } from '../navigation-item-icon.directive';

@Component({
	selector: 'lib-navigation-item,[lib-navigation-item]',
	exportAs: 'libNavigationItem',
	templateUrl: './navigation-item.component.html',
	styleUrls: ['./navigation-item.component.scss'],
	host: {
		// eslint-disable-next-line prettier/prettier
    'class': 'navigation-item',
		'[class.is-active]': 'forceActive || active',
	},
})
export class NavigationItemComponent {
	private _api = inject(NavigationApiService);
	private _elementRef = inject(ElementRef);

	@ContentChild(NavigationItemIconDirective)
	iconRef!: NavigationItemIconDirective;

	get api() {
		return {
			isActive: () => this.active,
		};
	}

	@Input()
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	key: any = Math.random();

	@Input({ transform: booleanAttribute })
	forceActive = false;

	@HostListener('click', ['$event'])
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	click(_event: MouseEvent) {
		if (!this.key) {
			return;
		}

		this._api.activateItem(this.key);
	}

	get active(): boolean {
		return this._api.isItemActive(this.key);
	}

	get _hostElement(): ElementRef {
		return this._elementRef;
	}
}
