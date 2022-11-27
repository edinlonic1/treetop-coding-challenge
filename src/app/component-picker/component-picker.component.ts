import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material/table";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChapterComponent } from "../chapter-component/models";
import { AfterViewInit, Component, Inject, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { COMPONENTS_MOCK } from "../mock/mock-data";
import { Chapter } from "../chapter/models";
import { ComponentPickerService } from "./component-picker.service";
import { ComponentPickerDialogData } from "../shared/models";
@Component({
  selector: 'tt-component-picker',
  templateUrl: './component-picker.component.html',
  styleUrls: ['./component-picker.component.scss']
})
export class ComponentPickerComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  disableAddButton: boolean = false;
  currentChapter: Chapter;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ComponentPickerDialogData, private componentPickerService: ComponentPickerService) {
    this.currentChapter = data.chapter;
    this.dataSource.data = COMPONENTS_MOCK;
  }
  dataSource = new MatTableDataSource<ChapterComponent>([]);
  displayedColumns: string[] = ['title', 'code'];
  selection = new SelectionModel<ChapterComponent>(true, []);

  selectedComponent?: ChapterComponent;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  selectRow(selectedComponent: ChapterComponent): void {
    this.disableAddButton = this.componentPickerService.componentExistsInChapter(this.currentChapter, selectedComponent);
    this.selectedComponent = selectedComponent;
  }

  applyFilter(event: Event) {
    this.selectedComponent = undefined;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  removeComponent(component: ChapterComponent): void {
    const succesfull = this.componentPickerService.removeComponent(this.currentChapter, component);
    if (succesfull) {
      this.disableAddButton = false;
    }
  }

  addComponent(component: ChapterComponent): void {
    const succesfull = this.componentPickerService.addComponent(this.currentChapter, component);
    if (succesfull) {
      this.disableAddButton = true;
    }
  }
}