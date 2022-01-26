import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  datetime = new Date
  week: any = [
    "Lun",
    "Mar",
    "Mie",
    "Jue",
    "Vie",
    "Sab",
    "Dom"
  ];


  monthSelect:any =28
  dateSelect: any;
  dateValue: any;


  constructor() {

  }

  ngOnInit(): void {
    this.getDaysFromDate(this.datetime.getDay(),this.datetime.getMonth())
  }

  getDaysFromDate(month:any, year:any) {

    const startDate = moment.utc(`${year}/${month}/01`)
    const endDate = startDate.clone().endOf('month')
    this.dateSelect = "ENERO";

    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays = Math.round(diffDays);

    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      a = parseInt(a) + 1;
      const dayObject = this.datetime.getDay();
      return {
        name: dayObject,
        value: a,
        indexWeek: dayObject
      };
    });

  
  }

  changeMonth(flag:any) {
    if (flag < 0) {
      const prevDate = this.dateSelect.clone().subtract(1, "month");
      this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
    } else {
      const nextDate =  this.dateSelect.clone().add(1, "month");
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  clickDay(day:any) {
    const monthYear = this.dateSelect.format('medium')
    const parse = `${monthYear}-${day.value}`
    const objectDate = moment(parse)
    this.dateValue = objectDate;


  }

}
