import './style.css';
import projectAddForm from './js/projectAddForm';
import projectAddBtn from './js/projectAddBtn';
import projectList from './js/projectList';
import showHide from './js/showHide';
import taskNoSelection from './js/taskNoSelection';
import taskDisplay from './js/taskDisplay';
import taskAddForm from './js/taskAddForm';
import projectAddFormValidation from './js/projectAddFormValidation';

// Global variables
let currentProject;
let currentTaskPosition;
let currentTasKey;

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
  taskAddInput1,
  taskAddInput2,
  taskAddInput3,
  taskAddSelect,
  taskAddSubmit
} = taskAddForm();

//functions
const closeAddProjectForm = () => {
  projectAddFormDiv.style.display = 'none';
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

const addProject = () => {
  projectFieldValidation.innerHTML = '';
  let name = projectAddFormInput.value;
  let x = projectAddFormValidation(name);
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

const taskContainer = (currentProject) => {
  contentTask.innerHTML = '';
  contentTask.append(taskDisplay(currentProject));
};

const btnAddTask = () => {
  const taskNewBtnSelect = document.getElementById('showNewTaskForm');
  taskNewBtnSelect.addEventListener('click', function () {
    showAddTaskForm('Add Task');
  });
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

const TaskValues = (task, description, date, priority) => {
  return {
    task,
    description,
    date,
    priority,
  }
};

const clearProjectForm = () => {
  taskAddInput1.value = '';
  taskAddInput2.value = '';
  taskAddInput3.value = '';
  taskAddSelect.value = 'Important';
};

const storage = (arr, key, input) => {
  arr.push(input);
  localStorage.setItem(key, JSON.stringify(arr));
}

const taskAddNew = () => {
  const task = TaskValues(taskAddInput1.value, taskAddInput2.value, taskAddInput3.value, taskAddSelect.value);
  let taskObj;
  if (localStorage.getItem(currentProject) === '') {
    taskObj = [];
  } else {
      taskObj = JSON.parse(localStorage.getItem(currentProject));
  }
  if (taskAddSubmit.textContent === 'Edit Task') {
    taskObj.splice(currentTaskPosition, 1);
    console.log(localStorage.removeItem(currentTasKey));
    storage(taskObj, currentTasKey, task);
  } else {
      storage(taskObj, currentProject, task);
  }
  clearProjectForm();
  taskContainer(currentProject);
  btnAddTask();
  taskDelBtn();
  taskEditBtn();
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

const taskItemDelete = (e) => {
  const confirm = window.confirm('Are you sure you want to delete this Task?');
  if(confirm){
    const deleteElement = e.target;
    const delkey = deleteElement.getAttribute('key');
    const deletePos = deleteElement.getAttribute('position');  
    let existingEntries = JSON.parse(localStorage.getItem(delkey));
    existingEntries.splice(deletePos, 1);
    existingEntries = JSON.stringify(existingEntries);
    localStorage.setItem(delkey, existingEntries);  
  }
  taskContainer(currentProject);
  btnAddTask();
  taskDelBtn();
  taskEditBtn();
}

const taskItemEdit = (e) => {
  const editElement = e.target;
  const editkey = editElement.getAttribute('key');
  const editPos = editElement.getAttribute('position');
  const taskValues = JSON.parse(localStorage.getItem(editkey));
  showAddTaskForm('Edit Task');
  taskAddInput1.value = taskValues[+editPos].task;
  taskAddInput2.value = taskValues[+editPos].description;
  taskAddInput3.value = taskValues[+editPos].date;
  taskAddSelect.value = taskValues[+editPos].priority;
  currentTaskPosition = editPos;
  currentTasKey = editkey;
}

const taskDelBtn = () => {
  const deleteBtnTask = document.getElementsByClassName('deleteBtnTask');
  const buttonsDeleteTask = Object.values(deleteBtnTask);
  buttonsDeleteTask.forEach(element => {
    element.addEventListener('click', taskItemDelete);
  });
};

const taskEditBtn = () => {
  const editBtnTask = document.getElementsByClassName('editBtnTask');
  const buttonsEditTask = Object.values(editBtnTask);
  buttonsEditTask.forEach(element => {
    element.addEventListener('click', taskItemEdit);
  });
};

// Grab an especific element from HTML
const [projectAddBtnCont, projectListCont, contentTask] = ['project-AddBtn', 'project-List', 'content-Task'].map(id => document.getElementById(id));

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
