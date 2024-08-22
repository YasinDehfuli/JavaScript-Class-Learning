class principalStaff extends staffs {
  constructor(name, family, fatherName, motherName, count, list, id, subject, yearOfExperience, email, phone, age, marriage, insurance, workingHours, department, role, leadershipStyle, parentMeetingsSchedule, adjustAnnualBudget, evaluateTeacherPerformance, schoolVision, schoolPolicies, teacherProfessionalDevelopment, studentDisciplinaryActions, communityOutreachPrograms, infrastructureProjects, emergencyPlans, academicPerformanceReports, teacherHiringPlan) {
    super(name, family, fatherName, motherName, count, list, id, subject, yearOfExperience, email, phone, age, marriage, insurance, workingHours, department, role);
    
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