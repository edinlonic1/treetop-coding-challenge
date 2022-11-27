import { Injectable } from "@angular/core";
import { Guideline } from "../guideline/models";
import { GUIDELINES_MOCK } from "../mock/mock-data";

@Injectable({
    providedIn: 'root',
  })
  export class OverviewApiService {
    constructor() { }
  
	loadGuideLines(): Guideline[] {
		return GUIDELINES_MOCK;
	}
  }