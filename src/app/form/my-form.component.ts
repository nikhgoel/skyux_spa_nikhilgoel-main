import {
  Component, Input, OnInit
} from '@angular/core';
import { SkyModalService } from '@skyux/modals';
import { SkyTheme, SkyThemeMode, SkyThemeSettings } from '@skyux/theme';
import { ColDef } from 'ag-grid-community';
import { MyModalComponent } from './my-modal.component';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {

  columnDefs: ColDef[] = [
    { field: 'Name' },
    { field: 'Lastname' },
    { field: 'Contactnumber'},
    { field: 'Email'},
    {field : 'DOB'},
    {field : 'Address'}
];
public data = '';
rowData : any = [];
constructor(private modal: SkyModalService, private commonService : CommonService){

}
  ngOnInit(): void {
    this.data = this.commonService.tempData;
    this.rowData = [];
    this.commonService.observerData.subscribe(
      value =>  {this.rowData = value;
        if(this.gridApi != undefined){
        this.gridApi.setRowData(this.rowData);}}
    );
  }

  @Input()
  public message: string;
  public helpKey: string = 'help-demo.html';
  private gridApi : any;

  public modalSize: string = 'medium';
  public modernLightTheme = new SkyThemeSettings(
    SkyTheme.presets.modern,
    SkyThemeMode.presets.light
  );

  public onOpenModalClick(): void {
    const modalInstanceType: any = MyModalComponent;
    const options: any = {
      helpKey: this.helpKey,
      size: this.modalSize
    };

    this.modal.open(modalInstanceType, options);
  }

  onGridReady(params: { api: any; }) {
    this.gridApi = params.api; // To access the grids API
  }
  refresh(){
    this.rowData = this.commonService.data;
    this.gridApi.setRowData(this.rowData);
  }
  demoMethod(){
    return 'Hello World';
  }
}
