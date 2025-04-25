import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Poll, PollForm } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor() { }

  getPolls(): Observable<Poll[]> {
    return of([
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
    ]).pipe(delay(2000));
  }

  vote(pollId: number, voteNumber: number) {
    console.log(pollId, voteNumber);
  }

  createPoll(poll: PollForm) {
    console.log(poll);
  }
}
