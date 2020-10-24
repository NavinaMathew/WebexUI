export class MeetingForm{
    constructor(
        public title: string,
        public password: string,
        public start: string,
        public end: string,
        public invitees: [],
        public agenda: [],
        public enabledAutoRecordMeeting: boolean = false,
        public allowAnyUserToBeCoHost: boolean = false  
  
    ){}

    
   
  }