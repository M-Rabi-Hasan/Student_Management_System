// Grab form elements and resume display sections
var nameInput = document.getElementById('name');
var contactInput = document.getElementById('contact');
var educationInput = document.getElementById('education');
var skillsInput = document.getElementById('skills');
var workInput = document.getElementById('work');
var updateButton = document.getElementById('update-resume');
// Grab resume display elements
var displayName = document.getElementById('display-name');
var displayContact = document.getElementById('display-contact');
var displayEducation = document.getElementById('display-education');
var displaySkills = document.getElementById('display-skills');
var displayWork = document.getElementById('display-work');
// Function to update resume dynamically
updateButton.addEventListener('click', function () {
    // Update name
    displayName.textContent = nameInput.value || "Rabi Hassan";
    // Update contact information
    displayContact.textContent = contactInput.value || "rabihassanshaikh3@gmail.com | Phone: 03131289017";
    // Update education
    var educationList = educationInput.value ? educationInput.value.split(',') : [
        "Intermediate from science (Pre engineering)",
        "Bachelor's degree in BBA (continue)"
    ];
    displayEducation.innerHTML = educationList.map(function (item) { return "<li>".concat(item, "</li>"); }).join('');
    // Update skills
    var skillsList = skillsInput.value ? skillsInput.value.split(',') : ["HTML", "CSS", "TypeScript", "React", "Next.js", "MySQL"];
    displaySkills.innerHTML = skillsList.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join('');
    // Update work experience
    var workList = workInput.value ? workInput.value.split(',') : ["(Next.JS) Internship at Systems Limited"];
    displayWork.innerHTML = workList.map(function (work) { return "<li>".concat(work.trim(), "</li>"); }).join('');
});
