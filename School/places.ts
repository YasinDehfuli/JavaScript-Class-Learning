export class Places {
    placeId: number;
    name: string;
    location: string;
    capacity: number;
    resources: string[];
    schedule: Record<string, any>;
    type: string;
    specialFeatures: string[];
    maintenanceStatus: string;
    accessibility: boolean;
    floor: number;
    buildingName: string;

    constructor(
        placeId: number,
        name: string,
        location: string,
        capacity: number,
        resources: string[],
        schedule: Record<string, any>,
        type: string,
        specialFeatures: string[],
        maintenanceStatus: string,
        accessibility: boolean,
        floor: number,
        buildingName: string
    ) {
        this.placeId = placeId;
        this.name = name;
        this.location = location;
        this.capacity = capacity;
        this.resources = resources;
        this.schedule = schedule;
        this.type = type;
        this.specialFeatures = specialFeatures;
        this.maintenanceStatus = maintenanceStatus;
        this.accessibility = accessibility;
        this.floor = floor;
        this.buildingName = buildingName;
    }
}
