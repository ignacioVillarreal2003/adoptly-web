import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-pets-paginator',
  imports: [MatIcon],
  templateUrl: './pets-paginator.html',
  styleUrl: './pets-paginator.scss'
})
export class PetsPaginator {
  currentPage: number = 1;
  totalPages: number = 10;

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
