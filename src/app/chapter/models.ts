import { ChapterComponent } from "../chapter-component/models";

export class Chapter {
    id: number;
    title: string;
    description?: string;
    chapterComponents: ChapterComponent[] = [];
}