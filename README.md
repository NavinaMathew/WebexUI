# WebexUI
Webex Hackathon UI

# Setup Instructions
1. Make sure you set up the API locally on your system first. If you have not, follow these instructions to set it up in this README: https://github.com/dixitaayush8/WebEx-hackathon-api.

2. Install npm. You can do this via Homebrew with `brew install npm`.

3. Clone the repo, navigate to the "my-app" folder.

4. Delete the "node_modules" folder and "package-lock.json" and then run `npm install`.

5. If you get a schema validation error, run `npm uninstall @angular-devkit/build-angular` and then run `npm install @angular-devkit/build-angular@0.13.0`.

6. Run `ng serve`, open the URL specified in your Terminal on your browser.