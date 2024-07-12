// import { Component, OnInit } from '@angular/core';
// import { AllVisitorsService } from '../services/all-visitors.service';
// import { ForthcomingVisitor } from '../models/forthcoming-visitor.model';
// import { OutgoingVisitor } from '../models/outgoing-visitor.model';

// import { trigger, transition, style, animate } from '@angular/animations';


// @Component({
//   selector: 'app-all-visitors',
//   templateUrl: './all-visitors.component.html',
//   styleUrls: ['./all-visitors.component.scss'],

 

//   animations: [
//     trigger('scaleIn', [
//       transition(':enter', [
//         style({ opacity: 0, transform: 'scale(0.5)' }),
//         animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
//       ]),
//       transition(':leave', [
//         animate('500ms ease-in', style({ opacity: 0, transform: 'scale(0.5)' }))
//       ])
//     ])
//   ]
// })
// export class AllVisitorsComponent implements OnInit {
//   forthcomingVisitors: ForthcomingVisitor[] = [];
//   outgoingVisitors: OutgoingVisitor[] = [];

//   constructor(private allVisitorsService: AllVisitorsService) { }

//   ngOnInit(): void {
//     this.loadForthcomingVisitors();
//     this.loadOutgoingVisitors();
//   }

//   loadForthcomingVisitors(): void {
//     this.allVisitorsService.getForthcomingVisitors().subscribe({
//       next: (data) => {
//         this.forthcomingVisitors = data;
//       },
//       error: (err) => {
//         console.error('Error loading forthcoming visitors:', err);
//       }
//     });
//   }

//   loadOutgoingVisitors(): void {
//     this.allVisitorsService.getOutgoingVisitors().subscribe({
//       next: (data) => {
//         this.outgoingVisitors = data;
//       },
//       error: (err) => {
//         console.error('Error loading outgoing visitors:', err);
//       }
//     });
//   }





//   deleteVisitor(visitor: ForthcomingVisitor | OutgoingVisitor, type: string): void {
   
//     if (type === 'forthcoming') {
//       this.allVisitorsService.deleteForthcomingVisitor(visitor.id).subscribe({
//         next: () => {
//           this.loadForthcomingVisitors();
//         },
//         error: (err) => {
//           console.error('Error deleting forthcoming visitor:', err);
//         }
//       });
//     } else {
//       this.allVisitorsService.deleteOutgoingVisitor(visitor.id).subscribe({
//         next: () => {
//           this.loadOutgoingVisitors();
//         },
//         error: (err) => {
//           console.error('Error deleting outgoing visitor:', err);
//         }
//       });
      
//     }
//   }







  



// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { AllVisitorsService } from '../services/all-visitors.service';
import { ForthcomingVisitor } from '../models/forthcoming-visitor.model';
import { OutgoingVisitor } from '../models/outgoing-visitor.model';

import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-all-visitors',
  templateUrl: './all-visitors.component.html',
  styleUrls: ['./all-visitors.component.scss'],
  animations: [
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({ opacity: 0, transform: 'scale(0.5)' }))
      ])
    ])
  ]
})
export class AllVisitorsComponent implements OnInit {
  forthcomingVisitors: ForthcomingVisitor[] = [];
  outgoingVisitors: OutgoingVisitor[] = [];
  editIndex: number | null = null;
  editIndexOutgoing: number | null = null;

  visitorForm: FormGroup;

  constructor(private fb: FormBuilder, private allVisitorsService: AllVisitorsService) {
    this.visitorForm = this.fb.group({
      forthcomingVisitors: this.fb.array([]),
      outgoingVisitors: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.loadForthcomingVisitors();
    this.loadOutgoingVisitors();
  }

  get forthcomingVisitorsFormArray() {
    return this.visitorForm.get('forthcomingVisitors') as FormArray;
  }

  get outgoingVisitorsFormArray() {
    return this.visitorForm.get('outgoingVisitors') as FormArray;
  }

  loadForthcomingVisitors(): void {
    this.allVisitorsService.getForthcomingVisitors().subscribe({
      next: (data) => {
        this.forthcomingVisitors = data;
        this.forthcomingVisitorsFormArray.clear();
        this.forthcomingVisitors.forEach(visitor => this.forthcomingVisitorsFormArray.push(this.fb.group(visitor)));
      },
      error: (err) => {
        console.error('Error loading forthcoming visitors:', err);
      }
    });
  }

  loadOutgoingVisitors(): void {
    this.allVisitorsService.getOutgoingVisitors().subscribe({
      next: (data) => {
        this.outgoingVisitors = data;
        this.outgoingVisitorsFormArray.clear();
        this.outgoingVisitors.forEach(visitor => this.outgoingVisitorsFormArray.push(this.fb.group(visitor)));
      },
      error: (err) => {
        console.error('Error loading outgoing visitors:', err);
      }
    });
  }

  startEdit(index: number): void {
    this.editIndex = index;
  }

  startEditOutgoing(index: number): void {
    this.editIndexOutgoing = index;
  }

  saveEdit(visitorIndex: number, type: string): void {
    if (type === 'forthcoming') {
      const updatedVisitor = this.forthcomingVisitorsFormArray.at(visitorIndex).value;
      this.allVisitorsService.updateForthcomingVisitor(updatedVisitor).subscribe({
        next: () => {
          this.forthcomingVisitors[visitorIndex] = updatedVisitor;
          this.forthcomingVisitorsFormArray.at(visitorIndex).patchValue(updatedVisitor);
          this.editIndex = null;
        },
        error: (err) => {
          console.error('Error updating forthcoming visitor:', err);
        }
      });
    } else if (type === 'outgoing') {
      const updatedVisitor = this.outgoingVisitorsFormArray.at(visitorIndex).value;
      this.allVisitorsService.updateOutgoingVisitor(updatedVisitor).subscribe({
        next: () => {
          this.outgoingVisitors[visitorIndex] = updatedVisitor;
          this.outgoingVisitorsFormArray.at(visitorIndex).patchValue(updatedVisitor);
          this.editIndexOutgoing = null;
        },
        error: (err) => {
          console.error('Error updating outgoing visitor:', err);
        }
      });
    }
  }

  deleteVisitor(visitor: ForthcomingVisitor | OutgoingVisitor, type: string): void {
    if (type === 'forthcoming') {
      this.allVisitorsService.deleteForthcomingVisitor(visitor.id).subscribe({
        next: () => {
          this.forthcomingVisitors = this.forthcomingVisitors.filter(v => v.id !== visitor.id);
          this.forthcomingVisitorsFormArray.clear();
          this.forthcomingVisitors.forEach(v => this.forthcomingVisitorsFormArray.push(this.fb.group(v)));
        },
        error: (err) => {
          console.error('Error deleting forthcoming visitor:', err);
        }
      });
    } else if (type === 'outgoing') {
      this.allVisitorsService.deleteOutgoingVisitor(visitor.id).subscribe({
        next: () => {
          this.outgoingVisitors = this.outgoingVisitors.filter(v => v.id !== visitor.id);
          this.outgoingVisitorsFormArray.clear();
          this.outgoingVisitors.forEach(v => this.outgoingVisitorsFormArray.push(this.fb.group(v)));
        },
        error: (err) => {
          console.error('Error deleting outgoing visitor:', err);
        }
      });
    }
  }
}
