import { Component, OnInit } from '@angular/core';
import { PlayService } from './../play.service';
import { Tweet } from './../tweet';
import 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
  providers: [PlayService]
})
export class PlayComponent implements OnInit {

  tweets : Tweet[] = [];
  currentTweet : Tweet = new Tweet();
  answered = false;
  correct = false;
  score = 0;
  finished = false;

  constructor(private playService : PlayService, private router : Router) { }

  getTweets() {
    this.playService.getTweets().subscribe(tweets => this.tweets = tweets);
  }

  play() {
    this.score = 0;
    this.recurse(this.tweets.length);
  }

  recurse(i : number) {
    if (i <= 0) {
      this.finished = true;
      return;
    }
    this.currentTweet = this.tweets[i];
    var self = this;
    document.getElementById("tweet1").addEventListener("click", function() {
      if (self.correct) self.score += 1;
      self.recurse(i-1);
      self.correct = false;
    });
    document.getElementById("tweet2").addEventListener("click", function() {
      if (self.correct) self.score += 1;
      self.recurse(i-1);
      self.correct = false;
    });
  }

  moveOn() {
    this.router.navigate(['/end', this.score]);
  }

  answer(correct : boolean) {
    this.answered = true;
    this.correct = correct;
  }

  ngOnInit() : void {
    this.getTweets();
  }
}
