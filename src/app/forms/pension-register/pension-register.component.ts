import { Component } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pension-register',
  templateUrl: './pension-register.component.html',
  styleUrls: ['./pension-register.component.css']
})
export class PensionRegisterComponent {
  model: NgbDateStruct | undefined;
	date: { year: number; month: number; } | undefined;
  showCalendar = false;

  constructor(private calendar: NgbCalendar) {}


  selectToday() {
		this.model = this.calendar.getToday();
	}

}
