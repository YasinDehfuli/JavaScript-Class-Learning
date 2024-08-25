import {PersonalInfo} from "./personalInfo";

export class Staffs extends PersonalInfo {
    count: number;
    list: string[];
    id: number;
    subject: string;
    yearOfExperience: number;
    insurance: boolean;
    workingHours: string;
    department: string;
    role: string;

    constructor(
        name: string,
        family: string,
        fatherName: string,
        motherName: string,
        familyMemberCount: number,
        religion: string,
        dateOfBirth: number,
        grade: string,
        email: string,
        phone: string,
        address: string,
        marriage: boolean,
        count: number,
        list: string[],
        id: number,
        subject: string,
        yearOfExperience: number,
        insurance: boolean,
        workingHours: string,
        department: string,
        role: string
    ) {
        super(name,
            family,
            fatherName,
            motherName,
            familyMemberCount,
            religion,
            dateOfBirth,
            grade,
            email,
            phone,
            address,
            marriage)
        this.count = count;
        this.list = list;
        this.id = id;
        this.subject = subject;
        this.yearOfExperience = yearOfExperience;
        this.insurance = insurance;
        this.workingHours = workingHours;
        this.department = department;
        this.role = role;
    }
}
