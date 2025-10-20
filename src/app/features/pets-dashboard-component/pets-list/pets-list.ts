import { Component } from '@angular/core';
import { PetItem } from '../pet-item/pet-item';

@Component({
  selector: 'app-pets-list',
  imports: [PetItem],
  templateUrl: './pets-list.html',
  styleUrl: './pets-list.scss',
})
export class PetsList {}
