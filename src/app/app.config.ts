import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
/* export function initializeApp() {
	const envService = inject(EnvironmentService);
	const globalStore = inject(GlobalStore);
	return (): Promise<any> =>
		new Promise((resolve, reject) => {
			globalStore.setPageTitle(envService.getValue('pageTitle'));
			resolve(true);
		});
} */
export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes, withViewTransitions()),
		provideAnimationsAsync(),
		provideClientHydration(),
		provideHttpClient(withFetch()),
		provideStore(),
		provideNativeDateAdapter(),
		/* {
			provide: ENVIRONMENT,
			useValue: environment
		}, */
		/* {
			provide: APP_INITIALIZER,
			useFactory: initializeApp,
			multi: true,
		}, */
		/* {
			provide: TitleStrategy,
			useClass: PageTitleStrategyService
		}, */
		{
			provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
			useValue: { appearance: 'outline' },
		},
	],
};
