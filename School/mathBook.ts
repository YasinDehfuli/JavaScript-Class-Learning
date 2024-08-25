import {Books} from "./books";

class MathBook extends Books {
    public mathLevel: string;
    public numberOfExercises: number;
    public recommendedPrerequisites: string[];

    constructor(
        title: string,
        authors: string[],
        fieldOfStudy: string,
        isRequired: boolean,
        mathLevel: string,
        numberOfExercises: number,
        recommendedPrerequisites: string[]
    ) {
        super(title, authors, "Math", fieldOfStudy, isRequired);
        this.mathLevel = mathLevel;
        this.numberOfExercises = numberOfExercises;
        this.recommendedPrerequisites = recommendedPrerequisites;
    }
}