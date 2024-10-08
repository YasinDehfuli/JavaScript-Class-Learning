import {Staffs} from "./staffs";

class TeacherStaff extends Staffs {
    public qualifications: string[]
    public teachingHistory: string[]
    public performanceReviews: string

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
        qualifications: string[],
        teachingHistory: string[],
        performanceReviews: string,
    ) {
        super(
            name,
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
            marriage,
            count,
            list,
            id,
            subject,
            yearOfExperience,
            insurance,
            workingHours,
            department,
            role,
        )
        this.qualifications = qualifications;
        this.teachingHistory = teachingHistory;
        this.performanceReviews = performanceReviews;
    }
}