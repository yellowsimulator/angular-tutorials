import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../challenge.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Angular 7';
  challenge: string = "Challenge loading...";
  isLoading: boolean = true;  // set this to true initially as we will be loading data immediately

  constructor(private challengeService: ChallengeService) {}

  ngOnInit() {
    this.getChallenge();
  }

  getChallenge() {
    this.isLoading = true;  // start the spinner before fetching data
    this.challengeService.getPrompt().subscribe(
      data => {
        this.challenge = data.message.replace(/\. (\d)/g, '.<br>$1'); // added replace function for formatting as per previous discussion
        this.isLoading = false;  // stop the spinner when data is received
      },
      error => {
        console.error(error);
        this.isLoading = false;  // stop the spinner when an error occurs
      }
    );
  }

  refreshChallenge() {
    this.challenge = "Loading..."; 
    this.getChallenge(); // getChallenge() will handle the spinner
  }
}
