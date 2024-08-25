export class Student {
    studentId: number;
    name: string;
    fatherName: string;
    motherName: string;
    familyMemberCount: number;
    religion: string;
    age: number;
    grade: string;
    email: string;
    phone: string;
    address: string;
    dateOfBirth: Date;
    parentContacts: Record<string, string>;
    medicalHistory: string[];
    yearReport: string[];
    GPA: number;
    fieldOfStudy: string;
    physicalConditions: string[];

    constructor(
        studentId: number,
        name: string,
        fatherName: string,
        motherName: string,
        familyMemberCount: number,
        religion: string,
        age: number,
        grade: string,
        email: string,
        phone: string,
        address: string,
        dateOfBirth: Date,
        parentContacts: Record<string, string>,
        medicalHistory: string[],
        yearReport: string[],
        GPA: number,
        fieldOfStudy: string,
        physicalConditions: string[]
    ) {
        this.studentId = studentId;
        this.name = name;
        this.fatherName = fatherName;
        this.motherName = motherName;
        this.familyMemberCount = familyMemberCount;
        this.religion = religion;
        this.age = age;
        this.grade = grade;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.dateOfBirth = dateOfBirth;
        this.parentContacts = parentContacts;
        this.medicalHistory = medicalHistory;
        this.yearReport = yearReport;
        this.GPA = GPA;
        this.fieldOfStudy = fieldOfStudy;
        this.physicalConditions = physicalConditions;
    }
}
