import {Books} from "./books";

class LiteratureBook extends Books {
    public literaryGenre: string;

    constructor(
        title: string,
        authors: string[],
        fieldOfStudy: string,
        isRequired: boolean,
        literaryGenre: string,
    ) {
        super(title, authors, "Literature", fieldOfStudy, isRequired);
        this.literaryGenre = literaryGenre;
    }
}