import {Places} from "./places";

class ToiletPlace extends Places {
    public numberOfStalls: number;
    public numberOfDrinkingFountains: number;
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
        numberOfStalls: number,
        numberOfDrinkingFountains: number,
        cleanlinessStatus: string,
    ) {
        super(placeId, name, location, capacity, resources, schedule, "ToiletPlace", specialFeatures, maintenanceStatus, accessibility, floor, buildingName);
        this.numberOfStalls = numberOfStalls;
        this.numberOfDrinkingFountains = numberOfDrinkingFountains;
        this.cleanlinessStatus = cleanlinessStatus;
    }
}