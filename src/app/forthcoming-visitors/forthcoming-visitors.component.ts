

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForthcomingVisitorService } from '../services/forthcoming-visitor.service'; // Import the service
import { ForthcomingVisitor } from '../models/forthcoming-visitor.model'; // Import the model


import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertComponent } from '../alert/alert.component';
import { trigger, transition, style, animate } from '@angular/animations';



@Component({
  selector: 'app-forthcoming-visitors',
  templateUrl: './forthcoming-visitors.component.html',
  styleUrls: ['./forthcoming-visitors.component.scss'],


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
export class ForthcomingVisitorsComponent implements OnInit {
  public visitorForm!: FormGroup;
  snackBar: any;

  // isSubmitting: boolean = false;
  submissionSuccess: boolean = false;

  constructor(private fb: FormBuilder, private visitorService: ForthcomingVisitorService) {} // Inject the service

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
      arrivalDate: ['', Validators.required],
      departureDate: ['', Validators.required],
      purposeOfVisit: ['', Validators.required]
    });
  }

  onSubmit() {

    
    
    if (this.visitorForm.valid) {
      console.log('Form is valid, submitting...');
      const newVisitor: ForthcomingVisitor = this.visitorForm.value;
      this.visitorService.addVisitor(newVisitor).subscribe({
        next: (response) => {
          console.log('Visitor added:', response);
          

          // this.dialog.open(AlertComponent, {
          //   data: {
          //     message: 'Submission successful!'
          //   }
          // });

          this.submissionSuccess = true;
          setTimeout(() => this.submissionSuccess = false, 2000);




          this.visitorForm.reset();



        },
        error: (error) => {
          console.error('Error adding visitor:', error);
         
        }
      });

    } else {
      console.log('Form is invalid, not submitting.');
    }
  }

}


