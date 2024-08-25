import {Staffs} from "./staffs";

class VicePrincipalStaff extends Staffs {
    disciplinaryCases: string[];
    supervisedClasses: string[];
    studentAttendance: Record<string, any>; // Assuming a flexible structure for attendance records
    teacherSupport: string[];
    schoolEventsCoordination: string[];
    parentCommunication: string[];
    safetyAndSecurity: string[];
    crisisManagement: string[];
    extracurricularActivities: string[];
    teacherEvaluation: string[];
    scheduleManagement: string[];
    behavioralInterventions: string[];

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
        disciplinaryCases: string[],
        supervisedClasses: string[],
        studentAttendance: Record<string, any>,
        teacherSupport: string[],
        schoolEventsCoordination: string[],
        parentCommunication: string[],
        safetyAndSecurity: string[],
        crisisManagement: string[],
        extracurricularActivities: string[],
        teacherEvaluation: string[],
        scheduleManagement: string[],
        behavioralInterventions: string[]
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

        this.disciplinaryCases = disciplinaryCases;
        this.supervisedClasses = supervisedClasses;
        this.studentAttendance = studentAttendance;
        this.teacherSupport = teacherSupport;
        this.schoolEventsCoordination = schoolEventsCoordination;
        this.parentCommunication = parentCommunication;
        this.safetyAndSecurity = safetyAndSecurity;
        this.crisisManagement = crisisManagement;
        this.extracurricularActivities = extracurricularActivities;
        this.teacherEvaluation = teacherEvaluation;
        this.scheduleManagement = scheduleManagement;
        this.behavioralInterventions = behavioralInterventions;
    }
}
