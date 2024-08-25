import {Places} from "./places";

class OfficePlace extends Places {
    public numberOfWorkstations: number;
    public hasConferenceRoom: boolean;
    public isAdministrative: boolean;

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
        numberOfWorkstations: number,
        hasConferenceRoom: boolean,
        isAdministrative: boolean
    ) {
        super(placeId, name, location, capacity, resources, schedule, "Office", specialFeatures, maintenanceStatus, accessibility, floor, buildingName);
        this.numberOfWorkstations = numberOfWorkstations;
        this.hasConferenceRoom = hasConferenceRoom;
        this.isAdministrative = isAdministrative;
    }
}