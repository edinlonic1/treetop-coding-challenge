import { Component, Input } from "@angular/core";
import { ChapterComponent } from "./models";

@Component({
    selector: 'tt-component',
    templateUrl: './chapter-component.component.html',
    styleUrls: ['./chapter-component.component.scss']
  })

  export class ChapterComponentComponent {
    @Input() component: ChapterComponent;
  }
  