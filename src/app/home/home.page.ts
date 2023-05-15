import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  memberInfo = {
    name: 'Aaron Saunders',
    title: 'CEO',
    companyName: 'Clearly Innovative Inc',
    bio: 'No news',
    // twitter: string;
    // linkedIn: string;
    website: 'www.clearlyinnovative.com',
  };

  constructor() {}
}
