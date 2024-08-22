class Doctor extends Doctors {
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
              medicalRecords,
              dailyCheckups,
              emergencyCare,
              chronicConditions,
              immunizationRecords,
              healthEducation,
              medicationAdministration,
              healthScreenings,
              referrals,
              parentConsultations,
              staffHealthManagement,
              injuryReports) {
    super(name, family, fatherName, motherName, count, list, id, subject, yearOfExperience, email, phone, age, marriage, insurance, workingHours, department, role, medicalCode, duty,);
    
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