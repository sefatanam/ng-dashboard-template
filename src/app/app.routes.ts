import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'pages',
		loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
	},
	{
		path: 'auth',
		loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
	},
	{
		path: '',
		redirectTo: 'pages',
		pathMatch: 'full',
	},
	{
		path: '**',
		title: 'Page Not Found',
		loadComponent: () =>
			import('./error/page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent),
	},
];
