import { Component } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('flyInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave',
        animate(700)
      )
    ])
  ]
})
export class AppComponent {
  title = 'app';
}
