import { Component } from '@angular/core';
import { PetsToolbar } from "../pets-toolbar/pets-toolbar";
import { PetsList } from "../pets-list/pets-list";
import { PetsPaginator } from "../pets-paginator/pets-paginator";

@Component({
  selector: 'app-pets-dashboard',
  imports: [PetsToolbar, PetsList, PetsPaginator],
  templateUrl: './pets-dashboard.html',
  styleUrl: './pets-dashboard.css'
})
export class PetsDashboard {

}
