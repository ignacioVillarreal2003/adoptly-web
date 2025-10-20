import { Component } from '@angular/core';
import {MainSidebar} from '../../shared/components/main-sidebar/main-sidebar';
import {RouterOutlet} from '@angular/router';
import {NgClass} from '@angular/common';
import {MainSidebarService} from '../../core/services/main-sidebar-service';
import {Background} from '../../shared/components/background/background';

@Component({
  selector: 'app-main-layout',
  imports: [
    MainSidebar,
    RouterOutlet,
    NgClass,
    Background,
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {
  constructor(public mainSidebarService: MainSidebarService) {}
}
