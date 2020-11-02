# WebexUI
Webex Hackathon UI

# Setup Instructions
1. Make sure you set up the API locally on your system first. If you have not, follow these instructions to set it up in this README: https://github.com/dixitaayush8/WebEx-hackathon-api.

2. Install npm. You can do this via Homebrew with `brew install npm`.

3. Clone the repo, navigate to the "my-app" folder.

4. Delete the "node_modules" folder and "package-lock.json" and then run `npm install`.

5. If you get a schema validation error, run `npm uninstall @angular-devkit/build-angular` and then run `npm install @angular-devkit/build-angular@0.13.0`.

6. Run `ng serve`, open the URL specified in your Terminal on your browser.

# Angular App Instructions

Once the app is running on http://localhost:4200/, here are a few notes to consider when completing the meeting form.


1. Password: must be a decent password that has uppercase, lowercase, numbers, and special characters (at least 6 characters in length)
  - uses standard password requirements from Webex API
2. Start date and time: Set the the start date as the current date; time should be set to a few minutes ahead of the current time. 
3. Invitees: all emails must be separated with a comma (,) and no spaces: example -> navmathe@cisco.com,aaydixit@cisco.com
  - User can click on any of the top 7 meeting invitees on the UI and the email will be added to the form
  - User can also type emails on the invitee field. 
4. Agenda: Have at least 1 agenda item.
  - Agenda Item : the message a user will receive through webex teamspace notifications
  - Time: agenda item will appear after #__ of minutes since the meeting started 
  example: 
  agenda item: "discuss challenges" time: = 2 min, this means the a teamspace notification will appear 2 min after the meeting starts and will say "discuss challeneges" in the teamspace 
 5. Auto record meeting --> set to False
 6. Allow any user to be cohost --> set to False
 7. Submit button - do not press submit button until invitee recommendations has loaded on the form and all fields are completed. 
  - After form is submitted by pressing the submit button, wait for the page to reload.
  - After the page reloads, the form should be blank.
  - To test the meeting form again, refresh the page and continue. 
  
  
