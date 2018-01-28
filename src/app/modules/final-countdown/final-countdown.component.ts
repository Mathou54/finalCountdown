import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/map'

@Component({
  selector: 'final-countdown',
  templateUrl: './final-countdown.component.html',
  styleUrls: ['./final-countdown.component.css']
})
export class FinalCountdownComponent implements OnInit {

  @Input()
  public endDate: string;

  @Input()
  overdue: string = 'Overdue!';

  @Input()
  days: string = 'days';

  @Input()
  hours: string = 'h';

  @Input()
  minutes: string = 'm';

  @Input()
  seconds: string = 's';

  @Input()
  left: string = 'left.';

  public counter: Observable<string>;

  constructor() {
    this.counter = Observable.interval(1000)
      .map(() => this.getCountDown());
  }

  ngOnInit() {
  }

  public getCountDown(): string {
    if (!this.endDate) {
      return '';
    }

    let actualDate = new Date();
    let endDate = new Date(this.endDate);

    let secondsToGo = endDate.getTime() - actualDate.getTime();

    if (secondsToGo <= 0) {
      return this.overdue;
    }

    let days = Math.floor(secondsToGo / (1000 * 60 * 60 * 24));
    let hours = Math.floor((secondsToGo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((secondsToGo % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((secondsToGo % (1000 * 60)) / 1000);

    if (days > 0) {
      return `${days}${this.days} ${hours}${this.hours} ${minutes}${this.minutes} ${seconds}${this.seconds} ${this.left}`;
    } else if (hours > 0) {
      return `${hours}${this.hours} ${minutes}${this.minutes} ${seconds}${this.seconds} ${this.left}`;
    } else if (minutes > 0) {
      return `${minutes}${this.minutes} ${seconds}${this.seconds} ${this.left}`;
    } else {
      return `${seconds}${this.seconds} ${this.left}`;
    }
  }

}
