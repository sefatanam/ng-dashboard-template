import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatAnchor, MatButton, MatIconButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatFormField, MatPrefix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

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
})
export class HeaderComponent {}
