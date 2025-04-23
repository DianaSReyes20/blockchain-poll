import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrl: './poll.component.scss',
  standalone: false,
})
export class PollComponent implements OnInit {
  @Input() question: string = '';
  @Input() votes: number[] = [];
  @Input() voted: boolean = false;
  @Input() pollImage: string = '';

  numberOfVotes: number = 0;

  constructor() {
    
  }

  ngOnInit(): void {
    if (this.votes.length){
      this.numberOfVotes = this.votes.reduce((acc, curr) => {
        return (acc += curr);
      });
    }
  }
}
