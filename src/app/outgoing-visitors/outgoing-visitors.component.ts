
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OutgoingVisitorService } from '../services/outgoing-visitor.service'; // Import the service
import { OutgoingVisitor } from '../models/outgoing-visitor.model'; // Import the model

import { trigger, transition, style, animate } from '@angular/animations';



@Component({
  selector: 'app-outgoing-visitors',
  templateUrl: './outgoing-visitors.component.html',
  styleUrls: ['./outgoing-visitors.component.scss'],

  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class OutgoingVisitorsComponent implements OnInit {
  public visitorForm!: FormGroup;
  submissionSuccess:boolean= false;

  constructor(private fb: FormBuilder, private visitorService: OutgoingVisitorService) {} // Inject the service

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.visitorForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      employeeId: ['', Validators.required],
      employeePosition: ['', Validators.required],
      branchTravellingFrom: ['', Validators.required],
      departureDate: ['', Validators.required],
      arrivalDate: ['', Validators.required],
      // departureDate: ['', Validators.required],
      purposeOfVisit: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.visitorForm.valid) {
      console.log('Form is valid, submitting...');
      const newVisitor: OutgoingVisitor = this.visitorForm.value;
      this.visitorService.addVisitor(newVisitor).subscribe({
        next: (response) => {
          console.log('Visitor added:', response);
          // Handle success

          this.submissionSuccess = true;
          setTimeout(() => this.submissionSuccess = false, 2000);


          this.visitorForm.reset();
        },
        error: (error) => {
          console.error('Error adding visitor:', error);
          // Handle error
        }
      });
    } else {
      console.log('Form is invalid, not submitting.');
    }
  }
}

