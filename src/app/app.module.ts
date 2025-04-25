// app.module.ts (ejemplo tradicional)
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PollCreateComponent } from './poll-create/poll-create.component'
import { PollComponent } from "./poll/poll.component";
import { PollVoteComponent } from "./poll-vote/poll-vote.component";
import { PollService } from './poll-service/poll.service';

@NgModule({
  declarations: [AppComponent, PollCreateComponent, PollComponent, PollVoteComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
  providers: [PollService],
})
export class AppModule {}