import './style.css';

import projectMenu from './js/projectMenu';
import projectAddForm from './js/projectAddForm';
import showHide from './js/showHidde';

// Destructuring JS modules
let {
    projectAddFormDiv,
    projectAddFormSubmit,
    projectAddFormCancel,
    projectAddFormInput
  } = projectAddForm();

let {
    projectMenuDiv,
    btnAddProj
} = projectMenu();

//functions
const closeAddProjectForm = () => {
    projectAddFormDiv.style.display = 'none';
};

const showProjectForm = () => {
    content.append(projectAddFormDiv);
    showHide(projectAddFormDiv);
};

// Global variables
localStorage.setItem('First Project Element', '');
let currentProject = 'First Element';

// Grab an especific element
const [menuProject, content] = ['menuProjectHTML', 'content'].map(id => document.getElementById(id));

// Building Layout
menuProject.append(projectMenuDiv);

// DOM events
btnAddProj.addEventListener('click', showProjectForm);
projectAddFormCancel.addEventListener('click', closeAddProjectForm);


