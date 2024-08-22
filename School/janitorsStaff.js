class janitorsStaff extends staffs {
  constructor(name, family, fatherName, motherName, count, list, id, subject, yearOfExperience, email, phone, age, marriage, insurance, workingHours, department, role, shift, cleaningAreas, cleaningEquipment, maintenanceSkills, emergencyResponseTraining, supplyInventory, specialProjects, incidentReports, healthAndSafetyCertifications) {
    super(name, family, fatherName, motherName, count, list, id, subject, yearOfExperience, email, phone, age, marriage, insurance, workingHours, department, role);
    
    this.shift = shift;
    this.cleaningAreas = cleaningAreas;
    this.maintenanceSkills = maintenanceSkills;
    this.emergencyResponseTraining = emergencyResponseTraining;
    this.supplyInventory = supplyInventory;
    this.specialProjects = specialProjects;
    this.incidentReports = incidentReports;
    this.healthAndSafetyCertifications = healthAndSafetyCertifications;
  }
}