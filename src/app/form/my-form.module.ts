import {
    NgModule
  } from '@angular/core';
  
  import {
    CommonModule
  } from '@angular/common';
  
  import {
    FormsModule
  } from '@angular/forms';
  
  import {
    SkyIdModule
  } from '@skyux/core';
  
  import {
    SkyInputBoxModule
  } from '@skyux/forms';
  
  import {
    SkyModalModule
  } from '@skyux/modals';
import { MyModalComponent } from './my-modal.component';
import { BrowserModule } from '@angular/platform-browser';
  
  @NgModule({
    imports: [
      CommonModule,
      FormsModule,
      SkyIdModule,
      SkyInputBoxModule,
      SkyModalModule,
      BrowserModule
    ],
    entryComponents: [
        MyModalComponent
    ]
  })
  
  export class MyFormModule {
  }