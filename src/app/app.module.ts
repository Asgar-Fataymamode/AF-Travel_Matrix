

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule, provideHttpClient } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { ForthcomingVisitorsComponent } from './forthcoming-visitors/forthcoming-visitors.component';
// import { OutgoingVisitorsComponent } from './outgoing-visitors/outgoing-visitors.component';
// import { AllVisitorsComponent } from './all-visitors/all-visitors.component';
// import { PastTravelsComponent } from './past-travels/past-travels.component';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AlertComponent } from './alert/alert.component';
// import { MatDialogModule } from '@angular/material/dialog';

// @NgModule({
//   declarations: [
//     AppComponent,
//     ForthcomingVisitorsComponent,
//     OutgoingVisitorsComponent,
//     AllVisitorsComponent,
//     PastTravelsComponent,
//     AlertComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     ReactiveFormsModule,
//     MatSnackBarModule,
//     BrowserAnimationsModule,
//     MatDialogModule,
//     HttpClientModule 
//   ],
//   providers: [
//     provideAnimationsAsync()
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForthcomingVisitorsComponent } from './forthcoming-visitors/forthcoming-visitors.component';
import { OutgoingVisitorsComponent } from './outgoing-visitors/outgoing-visitors.component';
import { AllVisitorsComponent } from './all-visitors/all-visitors.component';
// import { PastTravelsComponent } from './calendar/past-travels.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertComponent } from './alert/alert.component';


//

import { FullCalendarModule } from '@fullcalendar/angular';
import { VisitorCalendarComponent } from './visitor-calendar/visitor-calendar.component';
import { HelpComponent } from './help/help.component';
// import { CalendarComponent } from './calendar/calendar.component'; // the main connector



//

@NgModule({
  declarations: [
    AppComponent,
    ForthcomingVisitorsComponent,
    OutgoingVisitorsComponent,
    AllVisitorsComponent,
    // PastTravelsComponent,
    AlertComponent,
    VisitorCalendarComponent,
    HelpComponent
    // CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FullCalendarModule, // import the FullCalendar module
    HttpClientModule // Add HttpClientModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
