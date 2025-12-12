import { Component } from '@angular/core';
import { PasswordSettings } from "./password-settings/password-settings";
import { ProfileData } from "./profile-data/profile-data";

@Component({
  selector: 'app-account-settings-component',
  imports: [PasswordSettings, ProfileData],
  templateUrl: './account-settings-component.html',
  styleUrl: './account-settings-component.css'
})
export class AccountSettingsComponent {

}
