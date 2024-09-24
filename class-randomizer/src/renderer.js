let students = [];
let availableStudents = [];

// Function to add a new student
function addStudent() {
  const studentNameInput = document.getElementById('studentName');
  const studentName = studentNameInput.value.trim();
  
  if (studentName) {
    students.push(studentName);
    studentNameInput.value = ''; // Clear the input field
    displayStudents();
  } else {
    alert('Please enter a student name.');
  }
}

// Function to display the list of students with checkboxes
function displayStudents() {
  const studentList = document.getElementById('studentList');
  studentList.innerHTML = '';

  students.forEach((student, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<input type="checkbox" id="student-${index}" onchange="toggleStudentAvailability(${index})"> ${student}`;
    studentList.appendChild(li);
  });
}

// Function to toggle the availability of a student
function toggleStudentAvailability(index) {
  const checkbox = document.getElementById(`student-${index}`);
  const studentName = students[index];

  if (checkbox.checked) {
    if (!availableStudents.includes(studentName)) {
      availableStudents.push(studentName);
    }
  } else {
    availableStudents = availableStudents.filter(name => name !== studentName);
  }
}

// Function to randomize the available students into groups
function randomizeGroups() {
  if (availableStudents.length < 2) {
    alert('At least two students are needed to form groups.');
    return;
  }

  const shuffledStudents = availableStudents.sort(() => 0.5 - Math.random());
  const groupSize = Math.ceil(shuffledStudents.length / 2); // Change group size as needed
  const groups = [];

  for (let i = 0; i < shuffledStudents.length; i += groupSize) {
    groups.push(shuffledStudents.slice(i, i + groupSize));
  }

  displayGroups(groups);
}

// Function to display the groups
function displayGroups(groups) {
  const groupList = document.getElementById('groupList');
  groupList.innerHTML = '';

  groups.forEach((group, index) => {
    const li = document.createElement('li');
    li.textContent = `Group ${index + 1}: ${group.join(', ')}`;
    groupList.appendChild(li);
  });
}
