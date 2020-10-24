import { Component, OnInit } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService} from '@syncfusion/ej2-angular-richtexteditor';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { CalendarComponent, FocusEventArgs } from '@syncfusion/ej2-angular-calendars';
import {MeetingForm} from './MeetingForm';
import {SharedService} from 'src/app/services/services';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inviteformpage',
  templateUrl: './inviteformpage.component.html',
  styleUrls: ['./inviteformpage.component.css'],
  providers: [CalendarComponent]

})
export class InviteformpageComponent implements OnInit {
  public month: number = new Date().getMonth();
  public fullYear: number = new Date().getFullYear();
  public minDate: Date = new Date(this.fullYear, this.month , 22, 12);
  // value: Date;
  MeetingModel = new MeetingForm('title','password', 'start date and time', 'end date and time', [], [],false,false);

  constructor(
    private _sharedservice: SharedService,
    // private http: HttpClient
  ) {
      // this.value = new Date("1/1/2019 1:30 PM");
  }
    
  
    ngOnInit() {
      ;
    }

  // addMeeting(){
  //   var url = "http://127.0.0.1:5000/addmeeting";
  //   let body = new HttpClient()
  //   .set('asset_list_param', JSON.stringify());
  //   this._sharedservice.postServiceFormData(url, body).subscribe(result => {
  //     console.log('subsribeList', result);
  //       setTimeout(()=>{    
  //       }, 2500);
      
  //   });

  // }
  

}
