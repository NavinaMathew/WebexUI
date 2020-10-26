import { Component, OnInit } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService} from '@syncfusion/ej2-angular-richtexteditor';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { CalendarComponent, FocusEventArgs } from '@syncfusion/ej2-angular-calendars';
import {MeetingForm} from './MeetingForm';
import {SharedService} from 'src/app/services/services';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

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
    private _sharedservice: SharedService  ) {
      // this.value = new Date("1/1/2019 1:30 PM");
  }
  inviteeList: any=[];
  
    ngOnInit() {
    
      this.getInviteesRec();
    }
 // make true/false sections if null to be "false"
 // invitee and agenda if null to be []

  // addMeeting(meetinginfo){
  //   let params = new HttpParams()
  //   .set('body',JSON.stringify(meetinginfo));
  //   var url = "http://127.0.0.1:5000/addmeeting";
  //   this._sharedservice.addMeetingPostService(url, params).subscribe(result => {
  //     console.log('meetinginfo', result);
  //       setTimeout(()=>{    
  //       }, 2500);
      
  //   });

  // }

  getInviteesRec(){
    var url = "http://127.0.0.1:5000/namerecommendations";
    this._sharedservice.getInviteesRecGetService(url).subscribe(result => {
      console.log('get invitee recs', result);
      this.inviteeList = result['list'];
    },
    (err: any) => {
      console.log('errors', err);
     
    }
    );

  }
  

}
