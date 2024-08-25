import {Address} from "./address";

class School extends Address {
    name: string;
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
        super(address,
            street,
            city,
            state,
            postalCode,
            country)

        this.name = name;
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
