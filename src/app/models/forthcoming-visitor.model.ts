// src/app/models/forthcoming-visitor.model.ts
export interface ForthcomingVisitor {
    id: number;
    firstName: string;
    lastName: string;
    employeeId: string;
    employeePosition: string;
    branchTravellingFrom: string;
    arrivalDate: Date;
    departureDate: Date;
    purposeOfVisit: string;
  }
  