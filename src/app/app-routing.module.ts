import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForthcomingVisitorsComponent } from './forthcoming-visitors/forthcoming-visitors.component';
import { OutgoingVisitorsComponent } from './outgoing-visitors/outgoing-visitors.component';

import { AllVisitorsComponent } from './all-visitors/all-visitors.component';

import { HomeComponent } from './home/home.component';

//
import { VisitorCalendarComponent } from './visitor-calendar/visitor-calendar.component';
import { HelpComponent } from './help/help.component';
//

const routes: Routes = [
  { path: 'forthcoming-visitors', component: ForthcomingVisitorsComponent },
  { path: 'outgoing-visitors', component: OutgoingVisitorsComponent },
  { path: 'all-visitors', component: AllVisitorsComponent },
  // { path: 'past-travels', component: PastTravelsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },

  { path: 'calendar', component: VisitorCalendarComponent},

  {path: 'help', component: HelpComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



