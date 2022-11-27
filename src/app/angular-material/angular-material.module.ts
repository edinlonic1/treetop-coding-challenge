import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
@NgModule({
    imports: [
      BrowserModule,
      CommonModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatTableModule,
      MatExpansionModule,
      MatDialogModule,
      MatCardModule,
      MatPaginatorModule,
      MatFormFieldModule,
      MatInputModule
    ],
    exports: [
      MatButtonModule,
      MatTableModule,
      MatExpansionModule,
      MatDialogModule,
      MatCardModule,
      MatPaginatorModule,
      MatFormFieldModule,
      MatInputModule
    ],
    providers: [],
  })
  export class AngularMaterialModule { }
  