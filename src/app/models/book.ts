import { Character } from "./character";

export interface Book {
    name:string,
    url:string,
    numberOfPages: number,
    released: string,
    isbn: string,
    authors: string[],
    publisher:string,
    country: string,
    mediaType: string,
    characters: string[],
    povCharacters: string[],
}
