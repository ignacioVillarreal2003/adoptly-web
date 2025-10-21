import { Component } from '@angular/core';
import {PetsList} from '../../pets-dashboard-component/pets-list/pets-list';
import {PetsPaginator} from '../../pets-dashboard-component/pets-paginator/pets-paginator';
import {PetsToolbar} from '../../pets-dashboard-component/pets-toolbar/pets-toolbar';
import {HomeHero} from '../home-hero/home-hero';
import {FeaturedPets} from '../featured-pets/featured-pets';
import {Stories} from '../stories/stories';

@Component({
  selector: 'app-home',
  imports: [
    PetsList,
    PetsPaginator,
    PetsToolbar,
    HomeHero,
    FeaturedPets,
    Stories
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
