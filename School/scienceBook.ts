import {Books} from "./books";

class ScienceBook extends Books {
    public labRequired: boolean;
    public numberOfExperiments: number;
    public scientificDiscipline: string;

    constructor(
        title: string,
        authors: string[],
        fieldOfStudy: string,
        isRequired: boolean,
        labRequired: boolean,
        numberOfExperiments: number,
        scientificDiscipline: string
    ) {
        super(title, authors, "Science", fieldOfStudy, isRequired);
        this.labRequired = labRequired;
        this.numberOfExperiments = numberOfExperiments;
        this.scientificDiscipline = scientificDiscipline;
    }
}