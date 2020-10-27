export class meetingForm{
    constructor(
        public title: string,
        public password: string,
        public start: string,
        public end: string,
        public invitees: string,
        public agendaitems: string,
        public agendatimes: string,
        public enabledAutoRecordMeeting: boolean = false,
        public allowAnyUserToBeCoHost: boolean = false  
  
    ){}

    
   
  }