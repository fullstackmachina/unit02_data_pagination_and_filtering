// Required variables
let studentsPerPage = 9;
const buttonsContainer = document.querySelector(".link-list");
const studentsList = document.querySelector(".student-list");

// Add a search component dynamically
const header = document.querySelector("header");

header.insertAdjacentHTML(
  "beforeend",
  ` <label for="search" class="student-search">
            <span>Search by name</span>
            <input id="search" placeholder="Search by name...">
            <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
          </label>`,
);

// Add a search functionality
const searchBar = document.getElementById("search");
searchBar.addEventListener("input", () => {
  const userSearch = searchBar.value.toLowerCase().trim();

  const filteredStudents = [];

  for (let i = 0; i < data.length; i++) {
    const fullName = `${data[i].name.first} ${data[i].name.last}`.toLowerCase();
    if (fullName.includes(userSearch)) {
      filteredStudents.push(data[i]);
    }
  }

  if (filteredStudents.length > 0) {
    showPage(filteredStudents, 1);
    addPagination(filteredStudents);
  } else {
    studentsList.innerHTML = ""; // don't put <h3> inside a <ul>
    buttonsContainer.innerHTML = "";
    studentsList.insertAdjacentHTML(
      "beforeend",
      "<li><h3>No students were found.</h3></li>",
    );
  }
});

// Renders a specific page of students
function showPage(list, page) {
  const start = page * studentsPerPage - studentsPerPage;
  const end = page * studentsPerPage;

  studentsList.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    if (i >= start && i < end) {
      const html = `
        <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${list[i].registered.date}</span>
          </div>
        </li>
      `;
      studentsList.insertAdjacentHTML("beforeend", html);
    }
  }
}

// Creates pagination buttons and handles page changes
function addPagination(list) {
  const requiredButtons = Math.ceil(list.length / studentsPerPage);
  buttonsContainer.innerHTML = "";
  for (let i = 1; i <= requiredButtons; i++) {
    const html = `<li>
            <button>${i}</button>
        </li>`;
    console.log(html);
    buttonsContainer.insertAdjacentHTML("beforeend", html);
  }
  buttonsContainer.querySelector("button").classList.add("active");
  // Handles pagination clicks and updates the active page
  buttonsContainer.addEventListener("click", (e) => {
    const activeButton = buttonsContainer.querySelector(".active");
    const clickedButton = e.target.closest("button");

    if (clickedButton) {
      activeButton.classList.remove("active");
      clickedButton.classList.add("active");
    }
    showPage(list, clickedButton.textContent);
  });
}

// Call functions
showPage(data, 1);
addPagination(data);
