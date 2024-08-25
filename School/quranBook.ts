import {Books} from "./books";

class QuranBook extends Books {
    public numberOfSurahs: number;
    public translationAvailable: boolean;
    public recitationVersion: string;

    constructor(
        title: string,
        authors: string[],
        fieldOfStudy: string,
        isRequired: boolean,
        numberOfSurahs: number,
        translationAvailable: boolean,
        recitationVersion: string
    ) {
        super(title, authors, "Religion", fieldOfStudy, isRequired);
        this.numberOfSurahs = numberOfSurahs;
        this.translationAvailable = translationAvailable;
        this.recitationVersion = recitationVersion;
    }
}