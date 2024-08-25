import {Doctors} from "./doctors";

class Psychologist extends Doctors {
    studentAssessments: string[];
    counselingSessions: number;
    behavioralPlans: string[];
    mentalHealthWorkshops: string[];
    crisisInterventions: string[];
    collaborationsWithTeachers: string[];
    parentConsultations: boolean;
    referralsToSpecialists: string[];
    progressReports: string[];
    studentFiles: string[];
    confidentialityAgreements: boolean;
    psychologicalTestsAdministered: string[];

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
        medicalCode: string,
        duty: string,
        studentAssessments: string[],
        counselingSessions: number,
        behavioralPlans: string[],
        mentalHealthWorkshops: string[],
        crisisInterventions: string[],
        collaborationsWithTeachers: string[],
        parentConsultations: boolean,
        referralsToSpecialists: string[],
        progressReports: string[],
        studentFiles: string[],
        confidentialityAgreements: boolean,
        psychologicalTestsAdministered: string[]
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

        this.studentAssessments = studentAssessments;
        this.counselingSessions = counselingSessions;
        this.behavioralPlans = behavioralPlans;
        this.mentalHealthWorkshops = mentalHealthWorkshops;
        this.crisisInterventions = crisisInterventions;
        this.collaborationsWithTeachers = collaborationsWithTeachers;
        this.parentConsultations = parentConsultations;
        this.referralsToSpecialists = referralsToSpecialists;
        this.progressReports = progressReports;
        this.studentFiles = studentFiles;
        this.confidentialityAgreements = confidentialityAgreements;
        this.psychologicalTestsAdministered = psychologicalTestsAdministered;
    }
}
