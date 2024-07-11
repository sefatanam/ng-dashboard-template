import { AsyncPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatAnchor, MatButton, MatIconButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatFormField, MatPrefix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { LayoutApiService } from '../../../../projects/components/src';
import { ThemeManagerService } from '../../../../projects/components/src/lib/_services/theme-manager.service';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [
		MatIcon,
		MatIconButton,
		AsyncPipe,
		MatFormField,
		MatInput,
		MatPrefix,
		MatBadge,
		MatMenu,
		MatMenuTrigger,
		MatMenuItem,
		MatDivider,
		MatButton,
		MatTooltip,
		RouterLink,
		MatAnchor,
	],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
	host: {
		// eslint-disable-next-line prettier/prettier
		class: 'block w-full h-full',
	},
})
export class HeaderComponent {
	protected _themeManager = inject(ThemeManagerService);
	private _layoutApi = inject(LayoutApiService);

	@Input()
	sidebarHidden = false;

	toggleSidebar(): void {
		if (!this.sidebarHidden) {
			this._layoutApi.hideSidebar('root');
		} else {
			this._layoutApi.showSidebar('root');
		}

		this.sidebarHidden = !this.sidebarHidden;
	}
}
