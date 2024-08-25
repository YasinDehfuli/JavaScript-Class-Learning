class School {
  name: string;
  address: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  yearFounded: number;
  area: number;
  type: string;
  email: string;
  website: string;
  budget: number;
  motto: string;
  investor: string;
  numberOfTeachers: number;
  numberOfStudents: number;

  constructor(
      name: string,
      address: string,
      street: string,
      city: string,
      state: string,
      postalCode: string,
      country: string,
      yearFounded: number,
      area: number,
      type: string,
      email: string,
      website: string,
      budget: number,
      motto: string,
      investor: string,
      numberOfTeachers: number,
      numberOfStudents: number
  ) {
    this.name = name;
    this.address = address;
    this.street = street;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.country = country;
    this.yearFounded = yearFounded;
    this.area = area;
    this.type = type;
    this.email = email;
    this.website = website;
    this.budget = budget;
    this.motto = motto;
    this.investor = investor;
    this.numberOfTeachers = numberOfTeachers;
    this.numberOfStudents = numberOfStudents;
  }
}
