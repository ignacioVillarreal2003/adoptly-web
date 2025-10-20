import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainSidebarService {
  private _isCollapsed = signal(false);
  private _selectedValue = signal("home")
  private _activeProfile = signal("individual");

  readonly isCollapsed = this._isCollapsed.asReadonly();
  readonly selectedValue = this._selectedValue.asReadonly();
  readonly activeProfile = this._activeProfile.asReadonly();

  collapse(): void {
    this._isCollapsed.set(true);
  }

  expand(): void {
    this._isCollapsed.set(false);
  }

  changeSelectedValue(value: 'home' | 'browse' | 'bookmarks' | 'requests' | 'chat' | 'my-pets'): void {
    this._selectedValue.update(v => value)
  }

  toggleActiveProfile(): void {
    if (this.activeProfile() == 'individual') {
      this.changeActiveProfile('organization');
    }
    else {
      this.changeActiveProfile('individual');
    }
    this.changeSelectedValue('home')
  }

  changeActiveProfile(value: 'individual' | 'organization'): void {
    this._activeProfile.update(v => value)
  }
}
