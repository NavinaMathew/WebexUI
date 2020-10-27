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
  MeetingModel = new meetingForm('title','password', 'start date and time', 'end date and time', 'navmathe@cisco.com', 'agenditems', '10',false,false);

  constructor(
    private _sharedservice: SharedService  ) {
      // this.value = new Date("1/1/2019 1:30 PM");
  }
  invitee_list: any=[];
  inviteeList: any=[];
  inviteeDict: any={};
  inviteeDicttoList: any=[];
  new_dictionary: any={};
  new_dictionarytolist: any=[];
  new_dictionaryAgendaItem: any=[];
  new_dictionaryAgendatolist: any=[];

    title: string;
    password: string;
    start: string;
    start_new: string;
    end: string;
    end_new: string;
    invitees:string;
    agendaitems: string;
    agendatimes: string;
    enabledAutoRecordMeeting: boolean = false;
    allowAnyUserToBeCoHost: boolean = false;  
  
  
    ngOnInit() {

      this.getInviteesRec();

  
  }
 // make true/false sections if null to be "false"
 // invitee and agenda if null to be []

 containers=[];
 add() {
  this.containers.push(this.containers.length);
}
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
      this.new_dictionaryAgendaItem = {};
      this.new_dictionaryAgendaItem['minutes'] = parseInt(this.agendatimes);
      this.new_dictionaryAgendaItem['message'] = this.agendaitems;
      this.new_dictionaryAgendatolist.push(this.new_dictionaryAgendaItem);



      // Start End date and time
      console.log(JSON.stringify(this.start));
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
  // .set('title', this.title)
  // .set('password', this.password)
  // .set('start', this.start_new)
  // .set('end', this.end_new)
  // .set('invitees', this.invitee_list)
  // .set('meetingAgenda', this.new_dictionaryAgendatolist)
  // .set('enabledAutoRecordMeeting', JSON.stringify(this.enabledAutoRecordMeeting))
  // .set('allowAnyUserToBeCoHost', JSON.stringify(this.allowAnyUserToBeCoHost));
  var url = "http://127.0.0.1:5000/addmeeting";

  this._sharedservice.addMeetingPostService(url, JSON.stringify(addmeetingDict)).subscribe(result =>{

  // console.log('params', JSON.stringify(params));
  var url = "http://127.0.0.1:5000/addmeeting";
  // this._sharedservice.addMeetingPostService(url, params).subscribe(result =>{

    // INVITEES
    // result.map((i) =>{
    // this.inviteearray = result.invitees.split(',');
    
    // (this.inviteeDicttoList).map(element => {
    //   if((this.inviteearray.indexOf(element.email)) > -1 ){
    //     this.new_dictionary = {};
    //     this.new_dictionary['name'] = element['name'];
    //     this.new_dictionary['email'] = element['email'];
    //     this.new_dictionary['coHost'] = false;
    //     this.new_dictionarytolist.append(this.new_dictionary);
    //   }

    // });
    // result.invitees = this.new_dictionarytolist;


    // // AGENDA
    //   this.new_dictionaryAgendaItem = {};
    //   this.new_dictionaryAgendaItem['minutes'] = <number>i.agendatimes;
    //   this.new_dictionaryAgendaItem['message'] = i.agendaitems;
    //   this.new_dictionaryAgendatolist.append(this.new_dictionaryAgendaItem);

    //   // Start End date and time
    //   result.start.replace('T', ' ').replace('.000Z', '');
    //   result.end.replace('T', ' ').replace('.000Z', '');



    //   });

    console.log('GOOD', result);


  },
  (err: any) => {
    console.log('errors', err);
  }

  );

 }
 

  // result.map((i) =>{
  //   this.inviteearray = result.split(',');
  //   (this.inviteeDicttoList).map(element => {
  //     if((this.inviteearray.indexOf(element.email)) > -1 ){
  //       this.new_dictionary = {};
  //       this.new_dictionary['name'] = element['name'];
  //       this.new_dictionary['email'] = element['email'];
  //       this.new_dictionary['coHost'] = false;
  //       this.new_dictionarytolist.append(this.new_dictionary);
  //     },
  //     (err: any) => {
  //       console.log('errors', err);
  //     }
  //   );
  //   console.log('new_dictionarytolist', this.new_dictionarytolist);
  //   }
  // }

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
  


  hi(){
    alert('HI');
  }

}
