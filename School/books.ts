export class Books {
    public title: string;
    public authors: string[];
    public subject: string;
    public fieldOfStudy: string;
    public isRequired: boolean;

    constructor(
        title: string,
        authors: string[],
        subject: string,
        fieldOfStudy: string,
        isRequired: boolean
    ) {
        this.title = title;
        this.authors = authors;
        this.subject = subject;
        this.fieldOfStudy = fieldOfStudy;
        this.isRequired = isRequired;
    }
}