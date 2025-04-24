import { Component } from '@angular/core';
import { Poll } from './types';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false,
})
export class AppComponent {
  showForm = false;
  activePoll: { voted: boolean; question: string; options: string[]; results: number[] } | null = null;

  polls: Poll[] = [
    {
      id: 1,
      question: '¿Prefieres los gatos o los perros?',
      thumbnail: 'https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg',
      results: [0, 5, 7],
      options: ['Gatos', 'Perros', 'Ambos'],
      voted: true,
    },
    {
      id: 2,
      question: '¿Cuál es el mejor mes para pasar las vacaciones?',
      thumbnail: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg',
      results: [1, 6, 4],
      options: ['Enero', 'Julio', 'Diciembre'],
      voted: false,
    },
  ];

  setActivePoll(poll: any) {
    this.activePoll = null;

    setTimeout(() => {
      this.activePoll = poll;
    }, 100);
  }
}
