import {
	AfterContentInit,
	ChangeDetectorRef,
	Component,
	ContentChildren,
	DestroyRef,
	Input,
	QueryList,
	inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationApiService } from '../navigation-api.service';
import { NavigationItemComponent } from '../public-api';

@Component({
	selector: 'lib-navigation-group-menu',
	exportAs: 'libNavigationGroupMenu',
	templateUrl: './navigation-group-menu.component.html',
	styleUrl: './navigation-group-menu.component.css',
	host: {
		// eslint-disable-next-line prettier/prettier
    'class': 'navigation-group-menu',
		'[class.is-active]': 'active',
	},
})
export class NavigationGroupMenuComponent implements AfterContentInit {
	readonly api = inject(NavigationApiService);
	private _cdr = inject(ChangeDetectorRef);
	private _destroyRef = inject(DestroyRef);

	@ContentChildren(NavigationItemComponent, { descendants: true, emitDistinctChangesOnly: true })
	private _items!: QueryList<NavigationItemComponent>;

	@Input()
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	key!: any;

	get active(): boolean {
		return this.api.isGroupActive(this.key);
	}

	ngAfterContentInit() {
		this._detectGroupIsActive();
		this.api
			.activeItemChanged()
			.pipe(takeUntilDestroyed(this._destroyRef))
			.subscribe(() => {
				this._detectGroupIsActive();
			});
	}

	private _detectGroupIsActive() {
		const isGroupActive =
			this._items.filter(itemComponent => this.api.isItemActive(itemComponent.key)).length > 0;

		if (isGroupActive) {
			if (!this.api.isGroupActive(this.key)) {
				this.api.showGroup(this.key);
			}
		} else {
			if (this.api.isGroupActive(this.key)) {
				this.api.hideGroup();
			}
		}

		this._cdr.markForCheck();
	}
}
