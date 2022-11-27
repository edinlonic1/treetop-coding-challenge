import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChapterComponentComponent } from './chapter-component/chapter-component.component';
import { ChapterComponent } from './chapter/chapter.component';
import { GuidelineComponent } from './guideline/guideline.component';
import { OverviewComponent } from './overview/overview.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ComponentPickerComponent } from './component-picker/component-picker.component';
@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    GuidelineComponent,
    ChapterComponentComponent,
    ChapterComponent,
    ComponentPickerComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule
  ],
  exports: [
    AngularMaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
