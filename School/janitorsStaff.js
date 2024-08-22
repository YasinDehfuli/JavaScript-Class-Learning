class janitorsStaff extends staffs {
  constructor(name, family, fatherName, motherName, count, list, id, subject, yearOfExperience, email, phone, age, marriage, insurance, workingHours, department, role, shift, cleaningAreas) {
    super(name, family, fatherName, motherName, count, list, id, subject, yearOfExperience, email, phone, age, marriage, insurance, workingHours, department, role);
    
    this.shift = shift;
    this.cleaningAreas = cleaningAreas;
  }
}