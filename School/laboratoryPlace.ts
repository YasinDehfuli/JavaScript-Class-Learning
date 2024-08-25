import {Places} from "./places";

class LaboratoryPlace extends Places {
    public labType: string;
    public safetyEquipment: string[];
    public ventilationSystem: boolean;

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
        labType: string,
        safetyEquipment: string[],
        ventilationSystem: boolean
    ) {
        super(placeId, name, location, capacity, resources, schedule, "Laboratory", specialFeatures, maintenanceStatus, accessibility, floor, buildingName);
        this.labType = labType;
        this.safetyEquipment = safetyEquipment;
        this.ventilationSystem = ventilationSystem;
    }
}