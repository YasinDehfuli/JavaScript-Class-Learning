import {Places} from "./places";

class BathroomPlace extends Places {
    public numberOfShowerCabins: number;
    public numberOfBathtubs: number;
    public numberOfFaucets: number;
    public hasHairDryer: boolean;
    public cleanlinessStatus: string;

    constructor(
        placeId: number,
        name: string,
        location: string,
        capacity: number,
        resources: string[],
        schedule: string,
        specialFeatures: string[],
        maintenanceStatus: string,
        accessibility: boolean,
        floor: number,
        buildingName: string,
        numberOfShowerCabins: number,
        numberOfBathtubs: number,
        numberOfFaucets: number,
        hasHairDryer: boolean,
        cleanlinessStatus: string
    ) {
        super(placeId, name, location, capacity, resources, schedule, "Bathroom", specialFeatures, maintenanceStatus, accessibility, floor, buildingName);
        this.numberOfShowerCabins = numberOfShowerCabins;
        this.numberOfBathtubs = numberOfBathtubs;
        this.numberOfFaucets = numberOfFaucets;
        this.hasHairDryer = hasHairDryer;
        this.cleanlinessStatus = cleanlinessStatus;
    }
}