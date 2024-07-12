export interface OutgoingVisitor {
    id: number;
    firstName: string;
    lastName: string;
    employeeId: string;
    employeePosition: string;
    branchTravellingFrom: string;
    departureDate: Date;
    arrivalDate: Date;
    purposeOfVisit: string;
}
