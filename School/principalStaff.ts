import {Staffs} from "./staffs";

class PrincipalStaff extends Staffs {
    leadershipStyle: string;
    parentMeetingsSchedule: Record<string, any>;
    adjustAnnualBudget: boolean;
    evaluateTeacherPerformance: boolean;
    schoolVision: string;
    schoolPolicies: string[];
    teacherProfessionalDevelopment: string[];
    studentDisciplinaryActions: string[];
    communityOutreachPrograms: string[];
    infrastructureProjects: string[];
    emergencyPlans: string[];
    academicPerformanceReports: string[];
    teacherHiringPlan: string[];

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
        marriage: boolean,
        insurance: boolean,
        workingHours: string,
        department: string,
        role: string,
        leadershipStyle: string,
        parentMeetingsSchedule: Record<string, any>,
        adjustAnnualBudget: boolean,
        evaluateTeacherPerformance: boolean,
        schoolVision: string,
        schoolPolicies: string[],
        teacherProfessionalDevelopment: string[],
        studentDisciplinaryActions: string[],
        communityOutreachPrograms: string[],
        infrastructureProjects: string[],
        emergencyPlans: string[],
        academicPerformanceReports: string[],
        teacherHiringPlan: string[]
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
            role
        );

        this.leadershipStyle = leadershipStyle;
        this.parentMeetingsSchedule = parentMeetingsSchedule;
        this.adjustAnnualBudget = adjustAnnualBudget;
        this.evaluateTeacherPerformance = evaluateTeacherPerformance;
        this.schoolVision = schoolVision;
        this.schoolPolicies = schoolPolicies;
        this.teacherProfessionalDevelopment = teacherProfessionalDevelopment;
        this.studentDisciplinaryActions = studentDisciplinaryActions;
        this.communityOutreachPrograms = communityOutreachPrograms;
        this.infrastructureProjects = infrastructureProjects;
        this.emergencyPlans = emergencyPlans;
        this.academicPerformanceReports = academicPerformanceReports;
        this.teacherHiringPlan = teacherHiringPlan;
    }
}
