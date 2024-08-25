import {Places} from "./places";

class LibraryPlace extends Places {
    public numberOfBooks: number;
    public studyAreas: number;
    public hasDigitalResources: boolean;
    public departmentManager: string

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
        numberOfBooks: number,
        studyAreas: number,
        hasDigitalResources: boolean,
        departmentManager: string
    ) {
        super(placeId, name, location, capacity, resources, schedule, "Library", specialFeatures, maintenanceStatus, accessibility, floor, buildingName);
        this.numberOfBooks = numberOfBooks;
        this.studyAreas = studyAreas;
        this.hasDigitalResources = hasDigitalResources;
        this.departmentManager = departmentManager;
    }
}