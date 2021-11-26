import { ApplicationRef } from '@angular/core';
import {
  fakeAsync,
  flush,
  inject,
  TestBed,
  tick
} from '@angular/core/testing';

import {
  SkyAppTestModule
} from '@skyux-sdk/builder/runtime/testing/browser';

import {
  expect
} from '@skyux-sdk/testing';
import { SkyModalConfiguration, SkyModalHostService, SkyModalInstance, SkyModalService } from '@skyux/modals';
import { of } from 'rxjs';
import { MyFormComponent } from './my-form.component';



import {
  MyModalComponent
} from './my-modal.component';

describe('My modal component', () => {
  let applicationRef: ApplicationRef;
  /**
   * This configureTestingModule function imports SkyAppTestModule, which brings in all of
   * the SKY UX modules and components in your application for testing convenience. If this has
   * an adverse effect on your test performance, you can individually bring in each of your app
   * components and the SKY UX modules that those components rely upon.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule],
      providers :[ {
        provide: SkyModalInstance,
        useValue: {
          save: () => {},
          cancel: () => {},
          helpOpened: of('')
        }
      },
    {
      provide: SkyModalHostService,
      useValue : new SkyModalHostService()
    },{
      provide: SkyModalConfiguration,
      useValue : new SkyModalConfiguration()
    }]
    });
  });

  beforeEach(
    inject(
      [
        SkyModalService,
        ApplicationRef
      ],
      (
        _modalService: SkyModalService,
        _applicationRef: ApplicationRef
      ) => {
        _modalService.dispose();
        applicationRef = _applicationRef;
      }
    )
  );

it('should call method', fakeAsync(() =>{
  const fixture = TestBed.createComponent(MyFormComponent);
  fixture.detectChanges();
    var demo = fixture.componentInstance;
    expect(demo.demoMethod()).toMatch('Hello World');
    flush();
}));

  it('should launch and save data with the modal', fakeAsync(() => {
    const fixture = TestBed.createComponent(MyFormComponent);
    fixture.detectChanges();

    tick();
    let launchModalButtonEl
      = fixture.nativeElement.querySelector('.sky-btn.sky-btn-default') as HTMLButtonElement;
    launchModalButtonEl.click();
    applicationRef.tick();
    let saveButton = document.querySelector('.sky-btn.sky-btn-primary.sky-margin-inline-compact') as HTMLButtonElement;
    expect(saveButton).not.toBeNull();
    saveButton.click();
    applicationRef.tick();
    let refreshButton = document.querySelector('.sky-btn.sky-btn-default.register') as HTMLButtonElement;
    expect(refreshButton).not.toBeNull();
    refreshButton.click();
    applicationRef.tick();
    fixture.detectChanges();
    flush();
  }));
  it('should do something', () => {
    const fixture = TestBed.createComponent(MyModalComponent);

    fixture.detectChanges();

    expect(false).toBe(false);
  });

});
