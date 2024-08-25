import {Books} from "./books";

class LanguageBook extends Books {
    public languageTaught: string;
    public proficiencyLevel: string;
    public supplementaryMaterials: string[];

    constructor(
        title: string,
        authors: string[],
        fieldOfStudy: string,
        isRequired: boolean,
        languageTaught: string,
        proficiencyLevel: string,
        supplementaryMaterials: string[]
    ) {
        super(title, authors, "Language", fieldOfStudy, isRequired);
        this.languageTaught = languageTaught;
        this.proficiencyLevel = proficiencyLevel;
        this.supplementaryMaterials = supplementaryMaterials;
    }
}