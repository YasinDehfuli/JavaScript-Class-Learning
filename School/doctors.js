class Doctors extends Staffs {
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
              duty) {
    super(name, family, fatherName, motherName, count, list, id, subject, yearOfExperience, email, phone, age, marriage, insurance, workingHours, department, role);
    
    this.medicalCode = medicalCode;
    this.duty = duty;
  }
}