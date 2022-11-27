import { Chapter } from "../chapter/models";

export class Guideline {
    id: number;
    title: string;
    description: string;
    chapters: Chapter[] = [];
}