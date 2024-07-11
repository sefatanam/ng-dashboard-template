import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'sign-in',
		loadComponent: () => import('./signin/signin.component').then(c => c.SigninComponent),
	},
	{
		path: 'sign-up',
		loadComponent: () => import('./signup/signup.component').then(c => c.SignupComponent),
	},
	{
		path: 'fotget-passwor',
		loadComponent: () =>
			import('./forget-password/forget-password.component').then(c => c.ForgetPasswordComponent),
	},
	{
		path: 'password-reset',
		loadComponent: () =>
			import('./password-reset/password-reset.component').then(c => c.PasswordResetComponent),
	},
	{
		path: 'set-new-password',
		loadComponent: () =>
			import('./set-new-password/set-new-password.component').then(c => c.SetNewPasswordComponent),
	},
	{
		path: 'done',
		loadComponent: () => import('./done/done.component').then(c => c.DONEComponent),
	},
	{
		path: 'create-account',
		loadComponent: () =>
			import('./create-account/create-account.component').then(c => c.CreateAccountComponent),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthRoutingModule {}
