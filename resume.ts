// Grab form elements and resume display sections
const nameInput = document.getElementById('name') as HTMLInputElement;
const contactInput = document.getElementById('contact') as HTMLInputElement;
const educationInput = document.getElementById('education') as HTMLInputElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;
const workInput = document.getElementById('work') as HTMLInputElement;
const updateButton = document.getElementById('update-resume') as HTMLButtonElement;

// Grab resume display elements
const displayName = document.getElementById('display-name') as HTMLElement;
const displayContact = document.getElementById('display-contact') as HTMLElement;
const displayEducation = document.getElementById('display-education') as HTMLElement;
const displaySkills = document.getElementById('display-skills') as HTMLElement;
const displayWork = document.getElementById('display-work') as HTMLElement;

// Function to update resume dynamically
updateButton.addEventListener('click', () => {
    // Update name
    displayName.textContent = nameInput.value || "Rabi Hassan";
    
    // Update contact information
    displayContact.textContent = contactInput.value || "rabihassanshaikh3@gmail.com | Phone: 03131289017";
    
    // Update education
    const educationList = educationInput.value ? educationInput.value.split(',') : [
        "Intermediate from science (Pre engineering)",
        "Bachelor's degree in BBA (continue)"
    ];
    displayEducation.innerHTML = educationList.map(item => `<li>${item}</li>`).join('');
    
    // Update skills
    const skillsList = skillsInput.value ? skillsInput.value.split(',') : ["HTML", "CSS", "TypeScript", "React", "Next.js", "MySQL"];
    displaySkills.innerHTML = skillsList.map(skill => `<li>${skill.trim()}</li>`).join('');

    // Update work experience
    const workList = workInput.value ? workInput.value.split(',') : ["(Next.JS) Internship at Systems Limited"];
    displayWork.innerHTML = workList.map(work => `<li>${work.trim()}</li>`).join('');
});
