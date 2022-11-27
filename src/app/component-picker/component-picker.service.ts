import { Injectable } from "@angular/core";
import { ChapterComponent } from "../chapter-component/models";
import { Chapter } from "../chapter/models";

@Injectable({
    providedIn: 'root',
  })
  export class ComponentPickerService {
    constructor() { }

    public removeComponent(currentChapter: Chapter, component: ChapterComponent): boolean {
      const index = currentChapter.chapterComponents.findIndex(x => x.id == component.id);
      if (index > -1) {
        currentChapter.chapterComponents.splice(index, 1);
        return true;
      }
      return false;
    }

    public addComponent(currentChapter: Chapter, component: ChapterComponent): boolean {
      if (this.componentExistsInChapter(currentChapter, component)) {
        return false;
      }
      currentChapter.chapterComponents.push(component);
      return true;
    }

    public componentExistsInChapter(currentChapter: Chapter, selectedComponent: ChapterComponent): boolean {
      return currentChapter.chapterComponents?.findIndex(x => x.id == selectedComponent.id) > -1
    }

  }