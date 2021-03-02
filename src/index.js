import './style.css';
import projectAddForm from './js/projectAddForm';
import projectAddBtn from './js/projectAddBtn';
import projectList from './js/projectList';
import showHide from './js/showHide';
import taskNoSelection from './js/taskNoSelection';
import taskDisplay from './js/taskDisplay';
import taskAddForm from './js/taskAddForm';
import projectAddFormValidation from './js/projectAddFormValidation';
import taskAddFormValidation from './js/taskAddFormValidation';
import taskConfirmDelete from './js/taskConfirmDelete';

// Global variables
let currentProject;
let currentTaskPosition;
let currentTasKey;

// Grab an especific element from HTML
const [projectAddBtnCont, projectListCont, contentTask] = ['project-AddBtn', 'project-List', 'content-Task'].map(id => document.getElementById(id));

// Destructuring JS modules
const {
  projectAddFormDiv,
  projectAddFormSubmit,
  projectAddFormCancel,
  projectAddFormInput,
  projectFieldValidation,
} = projectAddForm();

const {
  projectAddBtnDiv,
  btnAddProj,
} = projectAddBtn();

const {
  taskAddFormDiv,
  taskIn1,
  taskIn2,
  taskIn3,
  taskAddSelect,
  taskAddSubmit,
  taskValidationForm,
} = taskAddForm();

// functions
const taskContainer = (currentProject) => {
  contentTask.innerHTML = '';
  contentTask.append(taskDisplay(currentProject));
};

const closeAddProjectForm = () => {
  projectAddFormDiv.style.display = 'none';
};

const clearProjectForm = () => {
  taskIn1.value = '';
  taskIn2.value = '';
  taskIn3.value = '';
  taskAddSelect.value = 'Select Priority';
};

const showAddProjectForm = () => {
  const showAddProjectF = document.getElementById('project-AddBtn');
  taskAddSubmit.textContent = 'Add Task';
  if (taskAddSubmit.textContent === 'Add Task') {
    clearProjectForm();
  }
  showAddProjectF.append(projectAddFormDiv);
  showHide(projectAddFormDiv);
};

const taskDelBtn = () => {
  const deleteBtnTask = document.getElementsByClassName('deleteBtnTask');
  const buttonsDeleteTask = Object.values(deleteBtnTask);
  buttonsDeleteTask.forEach(element => {
    element.addEventListener('click', taskItemDelete);
  });
};

const selectProject = (e) => {
  currentProject = e.target.id;
  taskContainer(currentProject);
  btnAddTask();
  taskDelBtn();
  taskEditBtn();
};

const clickEachProject = () => {
  const projectListBtns = document.getElementsByClassName('btn-List');
  const projectListBtnsArr = Object.values(projectListBtns);
  projectListBtnsArr.forEach(item => {
    item.addEventListener('click', selectProject);
  });
};

const addProject = () => {
  projectFieldValidation.innerHTML = '';
  const name = projectAddFormInput.value;
  const x = projectAddFormValidation(name);
  if (x === undefined) {
    localStorage.setItem(name, '');
    projectAddFormDiv.style.display = 'none';
    projectAddFormInput.value = '';
    projectListCont.innerHTML = '';
    projectListCont.append(projectList());
    clickEachProject();
  } else {
    projectFieldValidation.textContent = `${x}`;
    showHide(projectFieldValidation);
  }
};

const showAddTaskForm = (action) => {
  const showAddProjectF = document.getElementById('taskFormDisplay');
  taskAddSubmit.textContent = action;
  showAddProjectF.append(taskAddFormDiv);
  showHide(showAddProjectF);
  if (taskAddSubmit.textContent === 'Add Task') {
    clearProjectForm();
  }
};

const btnAddTask = () => {
  const taskNewBtnSelect = document.getElementById('showNewTaskForm');
  taskNewBtnSelect.addEventListener('click', () => {
    showAddTaskForm('Add Task');
  });
};

const TaskValues = (task, description, date, priority) => ({
  task,
  description,
  date,
  priority,
});

const taskAddNew = () => {
  const [i1, i2, i3, select] = [taskIn1.value, taskIn2.value, taskIn3.value, taskAddSelect.value];
  const task = TaskValues(i1, i2, i3, select);
  let taskObj;
  if (localStorage.getItem(currentProject) === '') {
    taskObj = [];
  } else {
    taskObj = JSON.parse(localStorage.getItem(currentProject));
  }

  const msgError = taskAddFormValidation(currentProject, i1, i2, i3, select);

  if (taskAddSubmit.textContent === 'Edit Task') {
    taskObj.splice(currentTaskPosition, 1);
    storage(taskObj, currentTasKey, task);
    clearProjectForm();
    taskContainer(currentProject);
  } else if (msgError === undefined || msgError === '') {
    storage(taskObj, currentProject, task);
    clearProjectForm();
    taskContainer(currentProject);
  } else {
    taskValidationForm.textContent = `${msgError}`;
    showHide(taskValidationForm);
  }

  btnAddTask();
  taskDelBtn();
  taskEditBtn();
};

const storage = (arr, key, input) => {
  arr.push(input);
  localStorage.setItem(key, JSON.stringify(arr));
};

const taskItemDelete = (e) => {
  const deleteElement = e.target;
  const delkey = deleteElement.getAttribute('key');
  const deletePos = deleteElement.getAttribute('position');

  let existingEntries = JSON.parse(localStorage.getItem(delkey));

  const selectDelete = existingEntries[deletePos].task;
  deleteConfirm(selectDelete, existingEntries, deletePos, delkey);

  const yes = document.getElementById(`yes${selectDelete}`);

  yes.addEventListener('click', () => {
    existingEntries.splice(deletePos, 1);
    existingEntries = JSON.stringify(existingEntries);
    localStorage.setItem(delkey, existingEntries);

    taskContainer(currentProject);
    btnAddTask();
    taskDelBtn();
    taskEditBtn();
  });

  const no = document.getElementById(`no${selectDelete}`);

  no.addEventListener('click', () => {
    taskContainer(currentProject);
    btnAddTask();
    taskDelBtn();
    taskEditBtn();
  });
};

const deleteConfirm = (selectDelete) => {
  const selectDeleteDiv = document.getElementById(selectDelete);
  selectDeleteDiv.innerHTML = '';
  selectDeleteDiv.append(taskConfirmDelete(selectDelete));
};

const taskItemEdit = (e) => {
  const editElement = e.target;
  const editkey = editElement.getAttribute('key');
  const editPos = editElement.getAttribute('position');

  const taskValues = JSON.parse(localStorage.getItem(editkey));
  showAddTaskForm('Edit Task');
  taskIn1.value = taskValues[+editPos].task;
  taskIn2.value = taskValues[+editPos].description;
  taskIn3.value = taskValues[+editPos].date;
  taskAddSelect.value = taskValues[+editPos].priority;

  currentTaskPosition = editPos;
  currentTasKey = editkey;
};

const taskEditBtn = () => {
  const editBtnTask = document.getElementsByClassName('editBtnTask');
  const buttonsEditTask = Object.values(editBtnTask);
  buttonsEditTask.forEach(element => {
    element.addEventListener('click', taskItemEdit);
  });
};

// Layout
projectAddBtnCont.append(projectAddBtnDiv);
projectListCont.append(projectList());
clickEachProject();
contentTask.append(taskNoSelection());

// DOM events
btnAddProj.addEventListener('click', showAddProjectForm);
projectAddFormCancel.addEventListener('click', closeAddProjectForm);
projectAddFormSubmit.addEventListener('click', addProject);
taskAddSubmit.addEventListener('click', taskAddNew);
projectAddFormInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    addProject();
  }
});