// app.module.ts (ejemplo tradicional)
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PollCreateComponent } from './poll-create/poll-create.component'
import { PollComponent } from "./poll/poll.component";

@NgModule({
  declarations: [AppComponent, PollCreateComponent, PollComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, ],
  bootstrap: [AppComponent]
})
export class AppModule {}