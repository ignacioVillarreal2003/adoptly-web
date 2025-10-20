import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainSidebar} from './shared/components/main-sidebar/main-sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainSidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('adoptly-web');
}
