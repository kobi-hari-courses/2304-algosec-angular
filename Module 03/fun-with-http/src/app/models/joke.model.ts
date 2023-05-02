import { Author } from "./author.model";

export interface Joke {
    id:        number;
    text:      string;
    question?: string;
    answer?:   string;
    author:    Author;
    created:   string;
    tags:      string[];
    rating:    number;
}
