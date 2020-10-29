export class meetingForm{
    constructor(
        public title: string,
        public password: string,
        public start: string,
        public end: string,
        public invitees: string,
        public agendaitems: any[]=[{agendaitem: '',agendatime: ''}],
        public enabledAutoRecordMeeting: boolean = false,
        public allowAnyUserToBeCoHost: boolean = false  
  
    ){}

    
   
  }