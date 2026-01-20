// Number of students shown per page
const studentsPerPage = 9;
const buttonsContainer = document.querySelector(".link-list");
const studentsList = document.querySelector(".student-list");

// Renders a specific page of students
function showPage(list, page) {
  const start = page * studentsPerPage - studentsPerPage;
  const end = page * studentsPerPage;

  studentsList.innerHTML = "";

  list.forEach((student, index) => {
    if (index >= start && index < end) {
      const html = `
        <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="${student.picture.large}" alt="Profile Picture">
            <h3>${student.name.first} ${student.name.last}</h3>
            <span class="email">${student.email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${student.registered.date}</span>
          </div>
        </li>
      `;
      studentsList.insertAdjacentHTML("beforeend", html);
    }
  });
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
}

// Handles pagination clicks and updates the active page
buttonsContainer.addEventListener("click", (e) => {
  const activeButton = buttonsContainer.querySelector(".active");
  const clickedButton = e.target.closest("button");

  if (clickedButton) {
    activeButton.classList.remove("active");
    clickedButton.classList.add("active");
  }
  showPage(data, clickedButton.innerHTML);
});

// Call functions
showPage(data, 1);
addPagination(data);

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
  const filteredStudents = [];
  const userSearch = searchBar.value.toLowerCase();
  for (let i = 0; i < data.length; i++) {
    const currentStudents =
      `${data[i].name.first} ${data[i].name.last}`.toLowerCase();

    if (currentStudents.includes(userSearch)) {
      filteredStudents.push(data[i]);
    }
  }
  if (filteredStudents.length > 0) {
    addPagination(filteredStudents);
    showPage(filteredStudents, 1);
  } else {
    studentsList.innerHTML = "<h3>No students were found.</h3>";
    buttonsContainer.innerHTML = "";
  }
});
