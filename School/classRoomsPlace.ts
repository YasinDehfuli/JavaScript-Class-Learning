import {Places} from "./places";

class ClassRoomsPlace extends Places {
    public className: string;
    public teacher: string;
    public students: string[];

    constructor(
        placeId: number,
        name: string,
        location: string,
        capacity: number,
        resources: string[],
        schedule: string,
        type: string,
        specialFeatures: string[],
        maintenanceStatus: string,
        accessibility: boolean,
        floor: number,
        buildingName: string,
        className: string,
        teacher: string,
        students: string[],
    ) {
        super(
            placeId,
            name,
            location,
            capacity,
            resources,
            schedule,
            type,
            specialFeatures,
            maintenanceStatus,
            accessibility,
            floor,
            buildingName,
        )
        this.className = className;
        this.teacher = teacher;
        this.students = students;

    }
}