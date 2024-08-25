import {Staffs} from "./staffs";

class SecurityStaff extends Staffs {
    public certifications: string[]
    public emergencyResponseTraining: boolean
    public currentStatus: string
    public incidentReports: string[]

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
        certifications: string[],
        emergencyResponseTraining: boolean,
        currentStatus: string,
        incidentReports: string[],
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
        this.certifications = certifications;
        this.emergencyResponseTraining = emergencyResponseTraining;
        this.currentStatus = currentStatus;
        this.incidentReports = incidentReports;
    }
}