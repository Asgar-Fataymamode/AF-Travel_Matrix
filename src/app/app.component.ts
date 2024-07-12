// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'company_travel_tracker';
// }


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  subtitles: string[] = [
    'Your Ultimate Travel Companion',
    'Stay Connected Globally',
    'Streamlined Travel Tracking',
    'Coordinate Meetings Easily'
  ];
  currentSubtitleIndex: number = 0;

  ngOnInit() {
    // this.startTypingEffect();

    setTimeout(() => {
      this.startTypingEffect();
    }, 800); // 1-second delay before starting the typing effect
  }

  startTypingEffect() {
    const typingElement = document.getElementById('typing') as HTMLElement;
    this.typeText(typingElement, this.subtitles[this.currentSubtitleIndex]);
  }

  typeText(element: HTMLElement, text: string) {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          this.eraseText(element, text);
        }, 300); // Wait for 2 seconds before erasing
      }
    }, 100); // Typing speed
  }

  eraseText(element: HTMLElement, text: string) {
    let index = text.length;
    const eraseInterval = setInterval(() => {
      if (index > 0) {
        element.textContent = text.substring(0, index - 1);
        index--;
      } else {
        clearInterval(eraseInterval);
        this.currentSubtitleIndex = (this.currentSubtitleIndex + 1) % this.subtitles.length;
        setTimeout(() => {
          this.typeText(element, this.subtitles[this.currentSubtitleIndex]);
        }, 30); // Wait for 0.5 seconds before typing the next text
      }
    }, 50); // Erasing speed
  }
}
