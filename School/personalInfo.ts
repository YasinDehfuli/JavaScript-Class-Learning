export class PersonalInfo {
    name: string;
    family: string;
    fatherName: string;
    motherName: string;
    familyMemberCount: number;
    religion: string;
    dateOfBirth: number;
    grade: string;
    email: string;
    phone: string;
    address: string;
    marriage: boolean

    constructor(name: string,
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
                marriage: boolean) {
        this.name = name;
        this.family = family
        this.fatherName = fatherName;
        this.motherName = motherName;
        this.familyMemberCount = familyMemberCount;
        this.religion = religion;
        this.dateOfBirth = dateOfBirth;
        this.grade = grade;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.marriage = marriage;
    }
}