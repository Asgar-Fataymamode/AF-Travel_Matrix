

import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  @ViewChild('introSection') introSection!: ElementRef;

  scrollToIntro(): void {
    this.introSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}


