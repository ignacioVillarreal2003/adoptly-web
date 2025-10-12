import { Component } from '@angular/core';

@Component({
  selector: 'app-main-sidebar',
  imports: [],
  templateUrl: './main-sidebar.html',
  styleUrl: './main-sidebar.scss'
})
export class MainSidebar {
  isCollapsed: boolean = false;
}
