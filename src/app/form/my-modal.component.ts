import {
  Component, OnInit
} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SkyFileAttachmentChange, SkyFileAttachmentClick, SkyFileItem } from '@skyux/forms';
import { SkyModalInstance } from '@skyux/modals';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss']
})
export class MyModalComponent implements OnInit {
constructor(public instance: SkyModalInstance, private commonService : CommonService,private formBuilder: FormBuilder){
}
  ngOnInit(): void {
    this.attachment = new FormControl(undefined, Validators.required);
    this.fileForm = this.formBuilder.group({
      attachment: this.attachment
    });
  }
public Name : any = '';
public LastName : any = '';
public ContactNumber : any = 0;
public Email : any = '';
public DOB : any = new Date();
public Address : any = '';
public attachment: FormControl;
public fileForm: FormGroup;
public maxFileSize: number = 4000000;
public reactiveUploadError: string;

public get reactiveFile(): AbstractControl {
  return this.fileForm.get('attachment');
}
public fileClick($event: SkyFileAttachmentClick): void {
  const link = document.createElement('a');
  link.download = $event.file.file.name;
  link.href = $event.file.url;
  link.click();
}

public reactiveFileUpdated(result: SkyFileAttachmentChange): void {
  const file = result.file;

  if (file && file.errorType) {
    this.reactiveFile.setValue(undefined);
    this.reactiveUploadError = this.getErrorMessage(file.errorType, file.errorParam);

  } else {
    this.reactiveFile.setValue(file);
    this.reactiveUploadError = undefined;
  }
}

public validateFile(file: SkyFileItem): string {
  if (file.file.name.indexOf('a') === 0) {
    return 'You may not upload a file that begins with the letter "a."';
  } else {
    return '';
  }
}

private getErrorMessage(errorType: string, errorParam: string): string {
  if (errorType === 'fileType') {
    return `Please upload a file of type ${errorParam}.`;
  } else if (errorType === 'maxFileSize') {
    return `Please upload a file smaller than ${errorParam} KB.`;
  } else {
    return errorParam;
  }
}

SaveData(){
  var tempData : any = {};
  tempData.Name = this.Name;
  tempData.Lastname = this.LastName;
  tempData.Contactnumber = this.ContactNumber;
  tempData.Email = this.Email;
  tempData.DOB = this.DOB;
  tempData.Address = this.Address;
  this.commonService.data.push(tempData);
  this.instance.close();
  console.log(this.commonService.data);
  this.commonService.observerData.next(this.commonService.data);
}
}
