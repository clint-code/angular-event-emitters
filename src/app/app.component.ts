import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-event-emitters';
  currentItem = 'Television';

  items = [];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

}
