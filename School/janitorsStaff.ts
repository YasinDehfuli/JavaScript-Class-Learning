import {Staffs} from "./staffs";

class JanitorsStaff extends Staffs {
    shift: string;
    cleaningAreas: string[];
    cleaningEquipment: string[];
    maintenanceSkills: string[];
    emergencyResponseTraining: boolean;
    supplyInventory: string[];
    specialProjects: string[];
    incidentReports: string[];
    healthAndSafetyCertifications: string[];

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
        shift: string,
        cleaningAreas: string[],
        cleaningEquipment: string[],
        maintenanceSkills: string[],
        emergencyResponseTraining: boolean,
        supplyInventory: string[],
        specialProjects: string[],
        incidentReports: string[],
        healthAndSafetyCertifications: string[]
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
        );

        this.shift = shift;
        this.cleaningAreas = cleaningAreas;
        this.cleaningEquipment = cleaningEquipment;
        this.maintenanceSkills = maintenanceSkills;
        this.emergencyResponseTraining = emergencyResponseTraining;
        this.supplyInventory = supplyInventory;
        this.specialProjects = specialProjects;
        this.incidentReports = incidentReports;
        this.healthAndSafetyCertifications = healthAndSafetyCertifications;
    }
}
