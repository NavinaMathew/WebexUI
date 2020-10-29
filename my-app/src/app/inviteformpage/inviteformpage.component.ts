import { Component, OnInit } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService, keyDown} from '@syncfusion/ej2-angular-richtexteditor';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { CalendarComponent, FocusEventArgs } from '@syncfusion/ej2-angular-calendars';
import {meetingForm} from './MeetingForm';
import {SharedService} from 'src/app/services/services';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { ValueTransformer } from '@angular/compiler/src/util';

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
  public inviteearray: any=[];
  public submit: boolean = false;

  // value: Date;
  MeetingModel = new meetingForm('title','password', 'start date and time', 'end date and time', 'navmathe@cisco.com', [{}],false,false);

  constructor(
    private _sharedservice: SharedService  ) {}
  invitee_list: any=[];
  inviteeList: any=[];
  inviteeDict: any={};
  inviteeDicttoList: any=[];
  new_dictionary: any={};
  new_dictionarytolist: any=[];
  new_dictionaryAgendaItem: any=[];
  new_dictionaryAgendatolist: any=[];

    public title: string;
    public password: string;
    public start: string;
    public start_new: string;
    public end: string;
    public end_new: string;
    public agendaitems:any[]=[{agendaitem: '',agendatime: ''}];
    public invitees:string;
    public enabledAutoRecordMeeting: boolean = false;
    public allowAnyUserToBeCoHost: boolean = false;  
  
  
    ngOnInit() {

      this.getInviteesRec();

  
  }
 // make true/false sections if null to be "false"
 // invitee and agenda if null to be []

 addMeeting(){
    //INVITEES
    this.inviteearray = this.invitees.split(',');
    console.log('this.inviteearray',this.inviteearray);
    
    (this.inviteeDicttoList).map(element => {
      if((this.inviteearray.indexOf(element.email)) > -1 ){
        this.new_dictionary = {};
        this.new_dictionary['name'] = element['name'];
        this.new_dictionary['email'] = element['email'];
        this.new_dictionary['coHost'] = false;
        this.new_dictionarytolist.push(this.new_dictionary);
      }

    });
    this.invitee_list = this.new_dictionarytolist;
    console.log('meetinginfo.invitees',this.invitees);


    // AGENDA
    this.agendaitems.forEach(element => {
      this.new_dictionaryAgendaItem = {};
      this.new_dictionaryAgendaItem['minutes'] = parseInt(element.agendatime);
      this.new_dictionaryAgendaItem['message'] = element.agendaitem;
      this.new_dictionaryAgendatolist.push(this.new_dictionaryAgendaItem);
    });

     // Start End date and time
     this.start_new= JSON.stringify(this.start).replace('T', ' ').replace('.000Z', '').replace(/\"/g, "");
     this.end_new = JSON.stringify(this.end).replace('T', ' ').replace('.000Z', '').replace(/\"/g, "");
      
  let params = new HttpParams()
  var addmeetingDict = {
    "title": this.title,
    "password": this.password,
    "start": this.start_new,
    "end": this.end_new,
    "invitees": this.invitee_list,
    "meetingAgenda": this.new_dictionaryAgendatolist,
    "enabledAutoRecordMeeting": <boolean>this.enabledAutoRecordMeeting,
    "allowAnyUserToBeCoHost": <boolean>this.allowAnyUserToBeCoHost
    
  };

  console.log('addmeetingDict', addmeetingDict);

  var url = "http://127.0.0.1:5000/addmeeting";

  this._sharedservice.addMeetingPostService(url, JSON.stringify(addmeetingDict)).subscribe(result =>{
    console.log('GOOD', result);


  },
  (err: any) => {
    console.log('errors', err);
  }
  );}
  getInviteesRec(){
    
      var url = "http://127.0.0.1:5000/namerecommendations";
    this._sharedservice.getInviteesRecGetService(url).subscribe(result => {
      console.log('get invitee recs', result);
      this.inviteeList = result['list'];
      result.list.map((i) =>{
        this.inviteeDict={},
        this.inviteeDict['email'] = i.email,
        this.inviteeDict['name'] = i.name,      
        this.inviteeDicttoList.push(this.inviteeDict)});      
    },
    (err: any) => {
      console.log('errors', err);
    }

    );
    console.log('inviteeDict', this.inviteeDicttoList);
  }
  
  addAgendaItem() {
    this.agendaitems.push({
      agendaitem: '',
      agendatime: ''
    });
  }

  deleteAgendaItem(i: number) {
    this.agendaitems.splice(i, 1);
  }

}
