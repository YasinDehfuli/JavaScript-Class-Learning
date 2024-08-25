import {Staffs} from "./staffs";

export class Doctors extends Staffs {
    medicalCode: string;
    duty: string;

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
        role: string,
        medicalCode: string,
        duty: string
    ) {
        super(name, family, fatherName, motherName, familyMemberCount, religion, dateOfBirth, grade, email, phone, address, marriage, count, list, id, subject, yearOfExperience, insurance, workingHours, department, role)

        this.medicalCode = medicalCode;
        this.duty = duty;
    }
}
