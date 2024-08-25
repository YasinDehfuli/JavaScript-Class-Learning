export class Staffs {
    name: string;
    family: string;
    fatherName: string;
    motherName: string;
    count: number;
    list: string[];
    id: number;
    subject: string;
    yearOfExperience: number;
    email: string;
    phone: string;
    age: number;
    marriage: boolean;
    insurance: boolean;
    workingHours: string;
    department: string;
    role: string;

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
        role: string
    ) {
        this.name = name;
        this.family = family;
        this.fatherName = fatherName;
        this.motherName = motherName;
        this.count = count;
        this.list = list;
        this.id = id;
        this.subject = subject;
        this.yearOfExperience = yearOfExperience;
        this.email = email;
        this.phone = phone;
        this.age = age;
        this.marriage = marriage;
        this.insurance = insurance;
        this.workingHours = workingHours;
        this.department = department;
        this.role = role;
    }
}
