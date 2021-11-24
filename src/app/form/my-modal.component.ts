import {
  Component
} from '@angular/core';
import { SkyModalInstance } from '@skyux/modals';
import {  Observable } from 'rxjs';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss']
})
export class MyModalComponent {
constructor(public instance: SkyModalInstance, private commonService : CommonService){
}
public Name : any = '';
public LastName : any = '';
public ContactNumber : any = 0;
public Email : any = '';
public DOB : any = new Date();
public Address : any = '';

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
