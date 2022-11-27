import { Component, Input } from "@angular/core";
import { Guideline } from "./models";

@Component({
    selector: 'tt-guideline',
    templateUrl: './guideline.component.html',
    styleUrls: ['./guideline.component.scss']
  })

  export class GuidelineComponent{
    @Input() guideline: Guideline;
  }
  