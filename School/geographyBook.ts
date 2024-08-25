import {Books} from "./books";

class GeographyBook extends Books {
    public bookNumber: number;

    constructor(
        title: string,
        authors: string[],
        fieldOfStudy: string,
        isRequired: boolean,
        bookNumber: number,
    ) {
        super(title, authors, "Geography", fieldOfStudy, isRequired);
        this.bookNumber = bookNumber;
    }
}