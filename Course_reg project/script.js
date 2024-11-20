let courseTypes = [];
let courses = [];
let publishedCourses = [];
let registrations = [];
''
function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  updateDropdowns();
}

function addCourseType() {
  const name = document.getElementById('courseTypeName').value.trim();
  if (name && !courseTypes.includes(name)) {
    courseTypes.push(name);
    updateCourseTypeList();
    updateDropdowns();
  }
  document.getElementById('courseTypeName').value = '';
}

function addCourse() {
  const name = document.getElementById('courseName').value.trim();
  if (name && !courses.includes(name)) {
    courses.push(name);
    updateCourseList();
    updateDropdowns();
  }
  document.getElementById('courseName').value = '';
}

function publishCourse() {
  const courseType = document.getElementById('courseTypeDropdown').value;
  const course = document.getElementById('courseDropdown').value;
  if (courseType && course && !publishedCourses.some(c => c.courseType === courseType && c.course === course)) {
    publishedCourses.push({ courseType, course });
    updatePublishedCourseList();
  }
}

function registerStudent() {
  const studentName = document.getElementById('studentName').value.trim();
  const studentEmail = document.getElementById('studentEmail').value.trim();
  const courseType = document.getElementById('filterCourseTypeDropdown').value;
  const course = document.getElementById('filteredCourseDropdown').value;

  if (studentName && studentEmail && courseType && course) {
    registrations.push({ studentName, studentEmail, courseType, course });
    updateRegistrationList();
    document.getElementById('studentName').value = '';
    document.getElementById('studentEmail').value = '';
  }
}

function updateCourseTypeList() {
  const list = document.getElementById('courseTypeList').querySelector('tbody');
  list.innerHTML = courseTypes.map(name => `<tr><td>${name}</td><td></td></tr>`).join('');
}

function updateCourseList() {
  const list = document.getElementById('courseList').querySelector('tbody');
  list.innerHTML = courses.map(name => `<tr><td>${name}</td><td></td></tr>`).join('');
}

function updatePublishedCourseList() {
  const list = document.getElementById('publishedCourseList').querySelector('tbody');
  list.innerHTML = publishedCourses.map(c => `<tr><td>${c.courseType}</td><td>${c.course}</td><td></td></tr>`).join('');
}

function updateRegistrationList() {
  const list = document.getElementById('registrationList').querySelector('tbody');
  list.innerHTML = registrations.map(r => `<tr><td>${r.studentName}</td><td>${r.studentEmail}</td><td>${r.courseType}</td><td>${r.course}</td><td></td></tr>`).join('');
}

function updateDropdowns() {
  const courseTypeDropdowns = document.querySelectorAll('#courseTypeDropdown, #filterCourseTypeDropdown');
  courseTypeDropdowns.forEach(dropdown => {
    dropdown.innerHTML = courseTypes.map(name => `<option value="${name}">${name}</option>`).join('');
  });

  const courseDropdowns = document.querySelectorAll('#courseDropdown, #filteredCourseDropdown');
  courseDropdowns.forEach(dropdown => {
    dropdown.innerHTML = courses.map(name => `<option value="${name}">${name}</option>`).join('');
  });
}

function filterCourses() {
  const courseType = document.getElementById('filterCourseTypeDropdown').value;
  const filteredCourses = publishedCourses.filter(c => c.courseType === courseType).map(c => c.course);
  const dropdown = document.getElementById('filteredCourseDropdown');
  dropdown.innerHTML = filteredCourses.map(name => `<option value="${name}">${name}</option>`).join('');
}

showTab('course-types');
