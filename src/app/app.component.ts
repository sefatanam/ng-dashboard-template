import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { PageLoadingBarComponent } from '../../projects/components/src';

import { isPlatformBrowser } from '@angular/common';
import { ScreenLoaderService } from '../../projects/components/src/lib/_services/screen-loader.service';
import { ThemeManagerService } from '../../projects/components/src/lib/_services/theme-manager.service';
import { ScreenLoaderComponent } from './@app/screen-loader/screen-loader.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, PageLoadingBarComponent, ScreenLoaderComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
	private _themeManager = inject(ThemeManagerService);
	private _screenLoader = inject(ScreenLoaderService);
	loadingText = signal('Application Loading');
	pageLoaded = signal(false);
	private _router = inject(Router);
	private _platformId = inject(PLATFORM_ID);

	ngOnInit(): void {
		this._router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
			window.scrollTo({
				top: 0,
				left: 0,
			});
			setTimeout(() => {
				this._screenLoader.hide();
				this.pageLoaded.set(true);
			}, 3000);
		});
		if (isPlatformBrowser(this._platformId)) {
			setTimeout(() => {
				this.loadingText.set('Initializing Modules');
			}, 1500);
		}
		this._themeManager.setColorScheme(this._themeManager.getPreferredColorScheme());
	}
}
