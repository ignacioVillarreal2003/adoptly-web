import {Component} from '@angular/core';
import {MainSidebarService} from '../../../core/services/main-sidebar-service';
import {NgClass} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-main-sidebar',
  imports: [
    NgClass,
    MatIcon,
  ],
  templateUrl: './main-sidebar.html',
  styleUrl: './main-sidebar.scss'
})
export class MainSidebar {

  constructor(public mainSidebarService: MainSidebarService) {}

}
