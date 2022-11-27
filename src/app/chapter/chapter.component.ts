import { Component, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ComponentPickerComponent } from "../component-picker/component-picker.component";
import { Chapter } from "./models";

@Component({
    selector: 'tt-chapter',
    templateUrl: './chapter.component.html',
    styleUrls: ['./chapter.component.scss']
  })

  export class ChapterComponent {
    @Input() chapter: Chapter;
    constructor(public dialog: MatDialog) {}
    openComponentPicker() {
      const dialogRef = this.dialog.open(ComponentPickerComponent, {
        height: '80%',
        width: '60%',
        data: {
          chapter: this.chapter
        }
    });
    }
  }
  

