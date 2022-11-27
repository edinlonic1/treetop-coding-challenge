import { Component, Input, OnInit } from "@angular/core";
import { Guideline } from "../guideline/models";
import { GUIDELINES_MOCK } from "../mock/mock-data";
import { OverviewApiService } from "./overview-api.service";

@Component({
    selector: 'tt-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss'],
  })

  export class OverviewComponent implements OnInit {
    constructor(private overviewApiService: OverviewApiService) { }
    guidelines: Guideline[] = [];
    ngOnInit(): void {
      // this can be called in an overview.resolver if we had routing, so that the data loads before the component starts rendering
      this.guidelines = this.overviewApiService.loadGuideLines();
    }
  }
  