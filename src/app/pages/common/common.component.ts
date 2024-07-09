import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
	LayoutBodyComponent,
	LayoutComponent,
	LayoutHeaderComponent,
	LayoutSidebarComponent,
	LayoutTopbarComponent,
} from '../../../../projects/components/src/lib/layout';
import { HeaderComponent } from '../../@app/header/header.component';
import { SidebarComponent } from '../../@app/sidebar/sidebar.component';

@Component({
	standalone: true,
	imports: [
		RouterOutlet,
		HeaderComponent,
		SidebarComponent,
		LayoutComponent,
		LayoutBodyComponent,
		LayoutSidebarComponent,
		LayoutHeaderComponent,
		LayoutTopbarComponent,
	],
	templateUrl: './common.component.html',
})
export class CommonComponent {}
