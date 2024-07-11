import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { HDividerComponent } from '../../../../projects/components/src/lib/divider';

@Component({
	selector: 'app-create-account',
	standalone: true,
	imports: [
		FormsModule,
		MatButton,
		MatFormField,
		MatInput,
		MatLabel,
		ReactiveFormsModule,
		RouterLink,
		MatError,
		HDividerComponent,
	],
	templateUrl: './create-account.component.html',
	styleUrl: './create-account.component.scss',
})
export class CreateAccountComponent {
	private _formBuilder = inject(FormBuilder);

	form = this._formBuilder.group({
		firstName: ['', [Validators.required]],
		lastName: ['', [Validators.required]],
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required]],
	});
}
