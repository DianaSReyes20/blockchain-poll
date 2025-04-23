import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false,
})
export class AppComponent {
  showForm = false;

  polls = [
    {
      question: '¿Prefieres los gatos o los perros?',
      image: 'https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg',
      votes: [0, 5, 7],
      voted: true,
    },
    {
      question: '¿Cuál es el mejor mes para pasar las vacaciones?',
      image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg',
      votes: [1, 6, 4],
      voted: false,
    },
  ]
}
