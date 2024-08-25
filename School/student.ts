import {PersonalInfo} from "./personalInfo";

export class Student extends PersonalInfo {
    studentId: number;
    parentContacts: string;
    medicalHistory: string[];
    yearReport: string[];
    GPA: number;
    fieldOfStudy: string;
    physicalConditions: string[];

    constructor(
        studentId: number,
        name: string,
        family: string,
        fatherName: string,
        motherName: string,
        familyMemberCount: any,
        religion: any,
        grade: any,
        email: any,
        phone: any,
        address: any,
        marriage: boolean,
        dateOfBirth: number,
        parentContacts: string,
        medicalHistory: string[],
        yearReport: string[],
        GPA: number,
        fieldOfStudy: string,
        physicalConditions: string[]
    ) {
        super(name, family, fatherName, motherName, familyMemberCount, religion, dateOfBirth, grade, email, phone, address, marriage)
        this.studentId = studentId;
        this.parentContacts = parentContacts;
        this.medicalHistory = medicalHistory;
        this.yearReport = yearReport;
        this.GPA = GPA;
        this.fieldOfStudy = fieldOfStudy;
        this.physicalConditions = physicalConditions;
    }
}
