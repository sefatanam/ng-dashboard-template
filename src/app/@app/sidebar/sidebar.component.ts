import { Location } from '@angular/common';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { NavigationModule, OrderByPipe } from '../../../../projects/components/src';
import { ToolbarComponent } from './_toolbar/toolbar.component';
export interface NavItem {
	type: string;
	name: string;
	icon?: string;
	id?: string | number;
	link?: string;
	children?: NavItem[];
}
@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [MatIcon, RouterLink, NavigationModule, MatRipple, ToolbarComponent, OrderByPipe],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss',
	host: {
		class: 'sidebar',
	},
})
export class SidebarComponent implements OnInit {
	router = inject(Router);
	location = inject(Location);
	height: string | null = '200px';

	@ViewChild('navigation', { static: true })
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	navigation!: any;

	navItems: NavItem[] = [
		{
			id: 'customization',
			type: 'group',
			name: 'Customization',
			icon: 'tune',
			children: [
				{
					type: 'link',
					name: 'Colors',
					link: '/pages/customization/colors',
				},
				{
					type: 'link',
					name: 'Themes',
					link: '/pages/customization/themes',
				},
			],
		},
		{
			id: 'baseLayouts',
			type: 'group',
			name: 'Base Layouts',
			icon: 'space_dashboard',
			children: [
				{
					type: 'link',
					name: 'Dual tier sidebar layout',
					link: '/base-layouts/dual-tier-sidebar-layout',
				},
			],
		},
	];
	navItemLinks: NavItem[] = [];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	activeLinkId: any = '/';

	ngOnInit() {
		this.navItems.forEach(navItem => {
			this.navItemLinks.push(navItem);

			if (navItem.children) {
				this.navItemLinks = this.navItemLinks.concat(navItem.children as NavItem[]);
			}
		});
		this._activateLink();
		this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
			this._activateLink();
		});
	}

	private _activateLink() {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		const activeLink = this.navItemLinks.find(navItem => navItem.link === this.location.path());

		if (activeLink) {
			this.activeLinkId = activeLink.link;
		} else {
			this.activeLinkId = null;
		}
	}
}
