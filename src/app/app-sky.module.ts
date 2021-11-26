import {
  NgModule
} from '@angular/core';
import { HttpModule } from '@angular/http';
import {
  SkyAvatarModule
} from '@skyux/avatar';
import { SkyFileAttachmentsModule, SkyInputBoxModule } from '@skyux/forms';
import { FormsModule } from '@angular/forms';
import {
  SkyAlertModule,
  SkyKeyInfoModule
} from '@skyux/indicators';

import {
  SkyFluidGridModule
} from '@skyux/layout';

import {
  SkyNavbarModule
} from '@skyux/navbar';
import { SkyDatepickerModule } from '@skyux/datetime';
import { SkyThemeModule } from '@skyux/theme';
import { SkyModalModule } from '@skyux/modals';
import { MyFormModule } from './form/my-form.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [HttpModule,    MyFormModule,      BrowserModule, FormsModule],
  exports: [
    SkyAvatarModule,
    SkyAlertModule,
    SkyKeyInfoModule,
    SkyFluidGridModule,
    SkyNavbarModule,
    SkyInputBoxModule,
    SkyDatepickerModule,
    SkyThemeModule,
    SkyModalModule,
    SkyFileAttachmentsModule
  ]
})
export class AppSkyModule { }
