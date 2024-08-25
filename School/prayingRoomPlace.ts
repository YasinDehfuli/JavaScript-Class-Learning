import {Places} from "./places";

class PrayerRoom extends Places {
    public numberOfPrayerMats: number;
    public numberOfCarpets: number;
    public numberOfPrayerSpaces: number;
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
        numberOfPrayerMats: number,
        numberOfCarpets: number,
        numberOfPrayerSpaces: number,
        cleanlinessStatus: string
    ) {
        super(placeId, name, location, capacity, resources, schedule, "Prayer Room", specialFeatures, maintenanceStatus, accessibility, floor, buildingName);
        this.numberOfPrayerMats = numberOfPrayerMats;
        this.numberOfCarpets = numberOfCarpets;
        this.numberOfPrayerSpaces = numberOfPrayerSpaces;
        this.cleanlinessStatus = cleanlinessStatus;
    }
}