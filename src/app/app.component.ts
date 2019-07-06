import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet-angular2';

  posts = [
    {
      title: 'Premier',
      content: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Esse cillum dolore eu fugiat nulla pariatur. Et harum quidem rerum facilis est et expedita distinctio.',
      loveIts: 0,
      created_at: 'Saturday July 06 2019 16:33'
    },
    {
      title: 'Deuxieme',
      content: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Esse cillum dolore eu fugiat nulla pariatur. Et harum quidem rerum facilis est et expedita distinctio.',
      loveIts: 0,
      created_at: 'Saturday July 06 2019 16:34'
    },
    {
      title: 'Troisieme',
      content: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Esse cillum dolore eu fugiat nulla pariatur. Et harum quidem rerum facilis est et expedita distinctio.',
      loveIts: 0,
      created_at: 'Saturday July 06 2019 16:36'
    },
  ];
}
