import { Component } from '@angular/core';
import { Poll, PollForm, PollVote } from './types';
import { PollService } from './poll-service/poll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false,
})
export class AppComponent {
  showForm = false;
  activePoll: { id: number, voted: boolean; question: string; options: string[]; results: number[] } | null = null;

  polls: Poll[] = [];

  ngOnInit() {
    this.ps.getPolls().subscribe((polls: Poll[]) => {
      this.polls = polls;
    });
  }

  constructor(private ps: PollService) {
    
  }

  setActivePoll(poll: any) {
    this.activePoll = null;

    setTimeout(() => {
      this.activePoll = poll;
    }, 100);
  }

  handlePollCreate(poll: PollForm) {
    this.ps.createPoll(poll);
  }

  handlePollVote(pollVoted: PollVote) {
    this.ps.vote(pollVoted.id, pollVoted.vote);
  }
}
