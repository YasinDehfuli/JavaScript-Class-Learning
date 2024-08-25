import {Staffs} from "./staffs";

export class Doctors extends Staffs {
    medicalCode: string;
    duty: string;

    constructor(
        name: string,
        family: string,
        fatherName: string,
        motherName: string,
        count: number,
        list: string[],
        id: number,
        subject: string,
        yearOfExperience: number,
        email: string,
        phone: string,
        age: number,
        marriage: boolean,
        insurance: boolean,
        workingHours: string,
        department: string,
        role: string,
        medicalCode: string,
        duty: string
    ) {
        super(
            name,
            family,
            fatherName,
            motherName,
            count,
            list,
            id,
            subject,
            yearOfExperience,
            email,
            phone,
            age,
            marriage,
            insurance,
            workingHours,
            department,
            role
        );

        this.medicalCode = medicalCode;
        this.duty = duty;
    }
}
