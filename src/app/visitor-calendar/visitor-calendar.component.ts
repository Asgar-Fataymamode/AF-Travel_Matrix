

import { Component, OnInit } from '@angular/core';
import { AllVisitorsService } from '../services/all-visitors.service';
import { ForthcomingVisitor } from '../models/forthcoming-visitor.model';
import { OutgoingVisitor } from '../models/outgoing-visitor.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './visitor-calendar.component.html',
  styleUrls: ['./visitor-calendar.component.css']
})
export class VisitorCalendarComponent implements OnInit {
  weeks: number[][] = [];
  selectedDate: string | null = null;
  availableMembers: any[] = [];

  forthcomingVisitors: ForthcomingVisitor[] = [];
  outgoingVisitors: OutgoingVisitor[] = [];

  currentMonth: number;
  currentYear: number;
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  constructor(private allVisitorsService: AllVisitorsService) {
    const today = new Date();
    this.currentMonth = today.getMonth();
    this.currentYear = today.getFullYear();
  }

  ngOnInit(): void {
    this.generateCalendar(this.currentMonth, this.currentYear);
    this.loadVisitors();
  }

  generateCalendar(month: number, year: number): void {
    this.weeks = [];
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let currentDay = 1;
    for (let i = 0; i < 6; i++) {
      const week: number[] = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDay) || currentDay > daysInMonth) {
          week.push(0);
        } else {
          week.push(currentDay++);
        }
      }
      this.weeks.push(week);
    }
  }

  loadVisitors(): void {
    this.allVisitorsService.getForthcomingVisitors().subscribe({
      next: (data) => {
        this.forthcomingVisitors = data;
      },
      error: (err) => {
        console.error('Error loading forthcoming visitors:', err);
      }
    });

    this.allVisitorsService.getOutgoingVisitors().subscribe({
      next: (data) => {
        this.outgoingVisitors = data;
      },
      error: (err) => {
        console.error('Error loading outgoing visitors:', err);
      }
    });
  }

  onDayClick(day: number): void {
    if (day > 0) {
      this.selectedDate = `${this.currentYear}-${this.currentMonth + 1 < 10 ? '0' : ''}${this.currentMonth + 1}-${day < 10 ? '0' : ''}${day}`;
      this.getAvailableMembers(this.selectedDate);
    }
  }

  getAvailableMembers(date: string): void {
    const selectedDate = new Date(date);

    const allMembers = [
      ...this.forthcomingVisitors.map(visitor => ({
        name: `${visitor.firstName} ${visitor.lastName}`,
        available: selectedDate >= new Date(visitor.arrivalDate) && selectedDate <= new Date(visitor.departureDate)
      })),
      ...this.outgoingVisitors.map(visitor => ({
        name: `${visitor.firstName} ${visitor.lastName}`,
        available: selectedDate < new Date(visitor.arrivalDate) || selectedDate > new Date(visitor.departureDate)
      }))
    ];

    this.availableMembers = allMembers.filter(member => member.available);
  }

  nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar(this.currentMonth, this.currentYear);
  }

  previousMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar(this.currentMonth, this.currentYear);
  }
}
