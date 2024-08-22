class Psychologist extends Doctors {
  constructor(name,
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
              role,
              medicalCode,
              duty,
              studentAssessments,
              counselingSessions,
              behavioralPlans,
              mentalHealthWorkshops,
              crisisInterventions,
              collaborationsWithTeachers,
              parentConsultations,
              referralsToSpecialists,
              progressReports,
              studentFiles,
              confidentialityAgreements,
              psychologicalTestsAdministered) {
    super(name, family, fatherName, motherName, count, list, id, subject, yearOfExperience, email, phone, age, marriage, insurance, workingHours, department, role, medicalCode, duty,);
    
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