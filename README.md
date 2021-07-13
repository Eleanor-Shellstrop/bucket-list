# Seasonal "Bucket Lists"
Project by Anne Ensign

DEMO HERE: https://eleanor-shellstrop.github.io/bucket-list/

## About:
This project is for Code Louisville's JavaScript Class, Summer 2021.

Every summer, my stepsister and her family put together a "Summer Bucket List." She, her husband and four kids brainstorm all the fun things they want to do, write it out and check them off as they complete them. 

Inspired to have more fun and enjoy being "in the moment," my family made our own list for this summer with pen to paper. Then I thought, "Why stop there?"

This is an app to make customizable, printable lists for all seasons. Included are some generated activities to add, but users can write in their own as well. 

## IN PROGRESS, WORKING WITH FIREBASE.

### Special Instructions:
- A server or proxy is needed to run this project since modules are imported.
  - Demo is also available on Git Pages (see above).
  - Try Live Server Extension.
  - [Link to instructions on setting up a local testing server.](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server "MDN")

### Project Requirements Met:
- Responsive Design
  - Layout changes to grid on large screens.
- At least 5 commits in Git
- Retrieve data from an external API.
  - Random activity generator with [Bored API](https://www.boredapi.com) in "Find a Random Activity."  
- Create an array and populate it with multiple values, display it in the application.
  - Multiple arrays in js folder, modules imported to "app.js."
  - Displayed when "season" is selected from dropdown menu in "Activity Suggestions."
- Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event).
  - When "Christmas" is chosen for the season, a countdown clock appears in the header telling the user how many days until Christmas
- Other:
  - Special printing that only displays header, Bucket List area and checkboxes.