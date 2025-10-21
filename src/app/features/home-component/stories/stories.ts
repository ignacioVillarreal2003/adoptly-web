import { Component } from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-stories',
  imports: [
    NgStyle
  ],
  templateUrl: './stories.html',
  styleUrl: './stories.scss'
})
export class Stories {
  STORIES = [
    {
      id: 1,
      petName: 'Luna',
      story: 'Luna fue rescatada en Canelones y hoy vive feliz con una familia que la llena de amor y paseos. Su mirada cambió por completo 💛',
      date: '2024-03-15',
      color: '--pinkrose'
    },
    {
      id: 2,
      petName: 'Rocky',
      story: 'Rocky pasó meses en el refugio hasta que encontró a su nuevo compañero de aventuras. Ahora corre cada mañana por la rambla 🐕‍🦺',
      date: '2024-06-02',
      color: '--lavander'
    },
    {
      id: 3,
      petName: 'Misha',
      story: 'Misha fue adoptada por una pareja joven en Montevideo. Le encanta dormir sobre el teclado mientras su dueña trabaja 💻🐱',
      date: '2024-09-10',
      color: '--aqua'
    },
    {
      id: 4,
      petName: 'Simón',
      story: 'Simón llegó flaco y asustado, pero gracias a su nueva familia recuperó fuerzas y confianza. Hoy es el guardián del jardín 🪴',
      date: '2025-01-28',
      color: '--grass'
    },
    {
      id: 5,
      petName: 'Nina',
      story: 'Nina fue adoptada en diciembre y pasó su primera Navidad rodeada de abrazos y juguetes nuevos 🎄❤️',
      date: '2024-12-25',
      color: '--sunflower'
    },
  ];
}
