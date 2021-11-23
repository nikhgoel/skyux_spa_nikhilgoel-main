import {
  NgModule
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import {
  AppSkyModule
} from './app-sky.module';
import { MyFormComponent } from './form/my-form.component';
import { MyFormModule } from './form/my-form.module';
import { CommonService } from './services/common.service';

@NgModule({
  imports: [HttpModule,    MyFormModule,      BrowserModule, FormsModule, AgGridModule.withComponents([MyFormComponent])],
  exports: [
    AppSkyModule,
    AgGridModule
  ],
  providers:[CommonService]
})
export class AppExtrasModule { }
