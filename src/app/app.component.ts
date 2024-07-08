import { Component, inject, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { PageLoadingBarComponent } from '../../projects/components/src';
// eslint-disable-next-line prettier/prettier
import { ScreenLoaderService } from '../../projects/components/src/lib/_services/screen-loader.service';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, PageLoadingBarComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
	private _screenLoader = inject(ScreenLoaderService);

	pageLoaded = signal(false);
	private _router = inject(Router);

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
	}
}
