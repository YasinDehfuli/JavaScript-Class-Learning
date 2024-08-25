import {Books} from "./books";

class HistoryBook extends Books {
    public historicalPeriod: string;
    public historicalFigures: string[];

    constructor(
        title: string,
        authors: string[],
        fieldOfStudy: string,
        isRequired: boolean,
        historicalPeriod: string,
        historicalFigures: string[]
    ) {
        super(title, authors, "History", fieldOfStudy, isRequired);
        this.historicalPeriod = historicalPeriod;
        this.historicalFigures = historicalFigures;
    }
}