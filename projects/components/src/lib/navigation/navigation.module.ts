import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import {
	NavigationComponent,
	NavigationDividerComponent,
	NavigationGroupComponent,
	NavigationGroupMenuComponent,
	NavigationGroupToggleComponent,
	NavigationGroupToggleIconDirective,
	NavigationHeadingComponent,
	NavigationItemComponent,
	NavigationItemIconDirective,
} from './public-api';

@NgModule({
	declarations: [
		NavigationComponent,
		NavigationItemComponent,
		NavigationHeadingComponent,
		NavigationDividerComponent,
		NavigationGroupComponent,
		NavigationGroupToggleComponent,
		NavigationGroupMenuComponent,
		NavigationItemIconDirective,
		NavigationGroupToggleIconDirective,
	],
	imports: [CommonModule, MatRipple],
	exports: [
		NavigationComponent,
		NavigationItemComponent,
		NavigationHeadingComponent,
		NavigationDividerComponent,
		NavigationGroupComponent,
		NavigationGroupToggleComponent,
		NavigationGroupMenuComponent,
		NavigationItemIconDirective,
		NavigationGroupToggleIconDirective,
	],
})
export class NavigationModule {}
