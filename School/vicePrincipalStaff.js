class VicePrincipalStaff extends Staffs {
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
              disciplinaryCases,
              supervisedClasses,
              studentAttendance,
              teacherSupport,
              schoolEventsCoordination,
              parentCommunication,
              safetyAndSecurity,
              crisisManagement,
              extracurricularActivities,
              teacherEvaluation,
              scheduleManagement,
              behavioralInterventions) {
    super(name, family, fatherName, motherName, count, list, id, subject, yearOfExperience, email, phone, age, marriage, insurance, workingHours, department, role);
    
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