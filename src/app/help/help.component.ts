import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  faqs = [
    {
      question: 'What is the AF Travel Matrix?',
      answer: 'It is a tool designed to help you manage and keep track of all the travel plans and itineraries of your employees',
      open: false
    },
    {
      question: 'What is a forthcoming visitor?',
      answer: 'A forthcoming visitor is someone who is coming to our branch for a given time interval',
      open: false
    },
    {
      question: 'What is an outgoing visitor?',
      answer: 'An outgoing visitor is someone who is leaving our branch for a given time interval',
      open: false
    },
    {
      question: 'Where can I view all team members?',
      answer: 'Go to the "All Visitors" tab to view all forthcoming and outgoing visitors',
      open: false
    },
    {
      question: 'Can I edit a forthcoming or outgoing visitor?',
      answer: 'Go to the "Yes, you can edit a travel log by going to the "All Visitors" section and clicking the edit button next to the respective travel log and then clicking save',
      open: false
    },
    {
      question: 'Can I delete a forthcoming or outgoing visitor?',
      answer: 'Yes, you can delete a travel log by going to the "All Visitors" section and clicking the delete button next to the respective travel log',
      open: false
    },
    {
      question: 'How do I check the availability of team members?',
      answer: 'To check the availability of team members, go to the "Calendar" section, click on the desired date, and you will see a list of available members for that date',
      open: false
    },
    {
      question: 'Where does the connect tab redirect me?',
      answer: 'It redirects you to the personal website of the designer and developer of Af Travel Matrix, namely Asgar Fataymamode',
      open: false
    }
  ];

  toggleAnswer(faq: any): void {
    faq.open = !faq.open;
  }
}
