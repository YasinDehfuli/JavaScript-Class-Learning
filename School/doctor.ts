import {Doctors} from "./doctors";

class Doctor extends Doctors {
    medicalRecords: string[];
    dailyCheckups: boolean;
    emergencyCare: boolean;
    chronicConditions: string[];
    immunizationRecords: string[];
    healthEducation: string;
    medicationAdministration: string[];
    healthScreenings: boolean;
    referrals: string[];
    parentConsultations: boolean;
    staffHealthManagement: boolean;
    injuryReports: boolean;

    constructor(
        name: string,
        family: string,
        fatherName: string,
        motherName: string,
        familyMemberCount: number,
        religion: string,
        dateOfBirth: number,
        grade: string,
        address: string,
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
        duty: string,
        medicalRecords: string[],
        dailyCheckups: boolean,
        emergencyCare: boolean,
        chronicConditions: string[],
        immunizationRecords: string[],
        healthEducation: string,
        medicationAdministration: string[],
        healthScreenings: boolean,
        referrals: string[],
        parentConsultations: boolean,
        staffHealthManagement: boolean,
        injuryReports: boolean
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
            medicalCode,
            duty
        );

        this.medicalRecords = medicalRecords;
        this.dailyCheckups = dailyCheckups;
        this.emergencyCare = emergencyCare;
        this.chronicConditions = chronicConditions;
        this.immunizationRecords = immunizationRecords;
        this.healthEducation = healthEducation;
        this.medicationAdministration = medicationAdministration;
        this.healthScreenings = healthScreenings;
        this.referrals = referrals;
        this.parentConsultations = parentConsultations;
        this.staffHealthManagement = staffHealthManagement;
        this.injuryReports = injuryReports;
    }
}
