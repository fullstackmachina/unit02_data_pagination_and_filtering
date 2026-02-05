Project Instructions
To complete this project, follow the instructions below. If you get stuck, ask a question on Slack or in the Treehouse Community.

 4 steps
Getting Started with the Project Files
If you haven’t already, download the project's starter files, unzip them, add them to your project folder, and push them to your GitHub repo.

Open the project in your text editor, open the script.js file, load the index.html file in Chrome, and open the Chrome DevTools Console.
If you have trouble with any of the above steps, be sure to reach out to your Slack team.
The showPage Function
This function will be responsible for rendering the student cards to the page. Depending on which page is requested by the user the corresponding students from a given array will be shown on the page.

Create a new function called showPage and give it two parameters:
A list parameter to represent an array of student objects.
A page parameter to represent the requested page number.
In the body of the function:
Create two variables to store the start index and the end index of the list items to be displayed on the given page. To make this function dynamic, use the page parameter and some basic math to calculate the value of these variables like so:
Start Index = (page * items per page) - items per page
End Index = page * items per page
Select the ul element with a class of student-list and assign its value to a variable.
Use the innerHTML property to set the HTML content of the student-list variable you just created to an empty string. This will remove any students that might have previously been displayed.
Loop over the list of students.
Inside the loop:
Write a conditional statement that checks if the current index (i) is greater than or equal to the start index variable and less than the end index variable.
Inside that conditional:
Create the DOM elements needed to display the information for each matching student as you iterate over the list parameter. You can find an example of what the final version of these elements should look like at the bottom of this step.
Insert the elements you have created into the student-list variable you created earlier. The insertAdjacentHTML method and beforeend option work well for this.
<li class="student-item cf">
  <div class="student-details">
    <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
    <h3>Ethel Dean</h3>
    <span class="email">ethel.dean@example.com</span>
  </div>
  <div class="joined-details">
    <span class="date">Joined 12-15-2005</span>
  </div>
</li>
Pro Tip
Because you will need to create multiple elements to display the information for each student, you might consider using a template literal for this.
The addPagination Function
This function will be responsible for rendering the pagination buttons to the page. When clicking one of these buttons the showPage function will be called to update the student cards to match the requested page.

Create a new function called addPagination
Add a list parameter to represent the array of student objects.
In the body of the function:

Create a variable to store the number of pagination buttons needed. You can calculate this using the length of the list. Remember, you will want to display nine students per page.
Select the ul element with a class of link-list and store it in a variable.
Use the innerHTML property to set the HTML content of the link-list variable you just created to an empty string. This will remove any pagination buttons that might have previously been displayed.
Loop over the variable that contains the number of pages.
Inside the loop:

Create a new button element for each of the pages. Here is an example of what the final version of these DOM elements should look like:
 <li>
   <button type="button">1</button>
 </li>
Append these elements to the .link-list element. The insertAdjacentHTML method and beforeend option work well for this.
Select the first pagination button and give it a class name of active.

Create an event listener to listen for clicks on the .link-list element.

Inside this event listener:

Create a conditional that checks if the clicked element is a <button>. This will ensure that the function will only be called if one of the buttons is clicked. If the conditional evaluates to be true:
Remove the active class from any other pagination button.
Add the active class to the button that was just clicked.
Call the showPage function and pass it the list and page number to display.
Finishing the Project
The final stage of the project is perhaps the most important. This is where your developer skills really shine as you carefully double-check that you've accomplished all requirements and that your project is ready for submission.

Code comments - It’s a best practice for development code to be well commented. Replace provided comments with your own to briefly describe your code.
Code readability - Readability is second only to functionality. Double-check your code to ensure the spacing and indentation are consistent.
Quality Assurance Testing - This is the keystone step in the development process.
Open and run your app.
Open the Chrome DevTools console.
Pretend to be a user and test all aspects of functionality and every possible state of the app, while monitoring the console for bugs and resolving any that arise.
Pro Tip
Before submitting your project it's always a good idea to get an additional pair of eyes on it. This will avoid your project from being returned to you if you missed one of the requirements. You can share a link to your GitHub repository in the #review-my-project channel on Slack and a fellow student or staff member will happily have a look at it.

Extra Credit
To get an "exceeds" rating, complete all of the steps below:

 4 steps
Add a Search Component
Dynamically create and add a search bar. Avoid making any changes in the index.html file and instead, use your JavaScript skills for this. Below is an example of the HTML for the search bar. If you follow the example below, the provided CSS will style the elements for you.

<label for="search" class="student-search">
  <span>Search by name</span>
  <input id="search" placeholder="Search by name...">
  <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>
Add Search Functionality
When the "Search" is performed, the student data is filtered so that only students whose name includes the search value are shown. The search should be case-insensitive and work for partial matches. For example, if the value B or b is typed into the search field, students with “Bill” in the name would be shown. Likewise, if LL were typed into the search field, students with the first name "Bill" would appear, as well as students with the last name "Williams".

To improve the functionality and user experience, consider adding a keyup event listener to the search input so that the list filters in real-time as the user types. This should be in addition to making the search button clickable since pasting text into the search bar might not trigger the keyup event.

Pro Tip
Remember you have already created a function to show nine students per page. All you really need to do here is create a new student list based on the search matches and then use that new list as an argument when calling the already existing function to display the students.

Add Pagination for Search Results
The pagination buttons should change based on the number of matches to the search. For example: if nine or fewer matches are found, there should be 0 or 1 pagination button. If 22 matches are found, there should be 3 pagination buttons.

Clicking on a pagination button should display the corresponding matching students for that page.

Pro Tip
Remember you already created a function to create pagination buttons. Use this existing pagination function along with the matching student list you created in the previous step as an argument to create pagination for your search results.

Handle No Search Matches
If no matches are found for a search, display a “No results found” type message on the page.

Note:
Don't use the built-in alert() method for this. The "No results found" message should be printed to the page.
NOTE: Getting an "Exceed Expectations" grade.

See the rubric in the "How You'll Be Graded" tab above for details on what you need to receive an "Exceed Expectations" grade.
Passing grades are final. If you try for the "Exceeds Expectations" grade, but miss an item and receive a “Meets Expectations” grade, you won’t get a second chance. Exceptions can be made for items that have been misgraded in review.
Always mention in the comments of your submission or any resubmission, what grade you are going for. Some students want their project to be rejected if they do not meet all Exceeds Expectations Requirements, others will try for all the "exceeds" requirement but do not mind if they pass with a Meets Expectations grade. Leaving a comment in your submission will help the reviewer understand which grade you are specifically going for