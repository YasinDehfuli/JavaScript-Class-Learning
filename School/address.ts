export class Address {
    address: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;

    constructor(address: string,
                street: string,
                city: string,
                state: string,
                postalCode: string,
                country: string)
    {
        this.address = address;
        this.street = street;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
        this.country = country;
    }


}