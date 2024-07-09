import { Component, DestroyRef, Input, OnInit, booleanAttribute, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LayoutApiService } from '../layout-api.service';
import { LayoutComponent } from '../public-api';
import { LAYOUT, LayoutSidebarVisibilityChange } from '../types';

@Component({
	selector: 'lib-layout-sidebar',
	exportAs: 'layoutSidebar',
	standalone: true,
	imports: [],
	templateUrl: './layout-sidebar.component.html',
	styleUrl: './layout-sidebar.component.css',
	host: {
		// eslint-disable-next-line prettier/prettier
    'class': 'layout-sidebar',
		'[class.is-hidden]': 'hidden',
	},
})
export class LayoutSidebarComponent implements OnInit {
	private _parent = inject<LayoutComponent>(LAYOUT);
	private _destroyRef = inject(DestroyRef);
	private _layoutApi = inject(LayoutApiService);

	@Input({ transform: booleanAttribute })
	hidden = false;

	ngOnInit() {
		this._layoutApi.sidebarVisibility
			.pipe(takeUntilDestroyed(this._destroyRef))
			.subscribe((event: LayoutSidebarVisibilityChange) => {
				if (event.layoutId !== this._parent.layoutId) {
					return;
				}

				this.hidden = event.hidden;
			});
	}
}
