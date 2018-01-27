import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  endDate: string | number | Date;

  newDate: string;

  ngOnInit(): void {
    let date = new Date();
    date.setMinutes(date.getMinutes() + 1);

    this.endDate = date.getTime();
  }

  setDate(newDate: string | Date): void {
    this.endDate = newDate;
  }

  setDateIn2Days(): void {
    let newDate = new Date();
    newDate.setDate(newDate.getDate() + 2);

    this.setDate(newDate);
  }

  setDateIn2Hours(): void {
    let newDate = new Date();
    newDate.setHours(newDate.getHours() + 2);

    this.setDate(newDate);
  }

  setDateIn2Minutes(): void {
    let newDate = new Date();
    newDate.setMinutes(newDate.getMinutes() + 2);

    this.setDate(newDate);
  }
}
