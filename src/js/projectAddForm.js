const projectAddForm = () => {
    const projectAddFormDiv = document.createElement('div');
    projectAddFormDiv.className = 'container px-8 pt-48 pb-24 lg:px-4 modal shadow-md';
    projectAddFormDiv.setAttribute('style', 'display: none');

    const form = document.createElement('form');
    form.className = 'addProjectForm';

    const div1 = document.createElement('div');
    div1.className = 'relative';

    const projectAddFormInput = document.createElement('input');
    projectAddFormInput.setAttribute('id', 'projectName');
    projectAddFormInput.setAttribute('placeholder', 'Add project name');
    projectAddFormInput.setAttribute('type', 'text');
    projectAddFormInput.className = 'addProjectInput';

    const projectAddFormSubmit = document.createElement('button');
    projectAddFormSubmit.className = 'bg-blue-600 hover:bg-blue-700 addProjectBtn mb-3';
    projectAddFormSubmit.textContent = 'Add Project';
    projectAddFormSubmit.setAttribute('type', 'button');
    
    const projectAddFormCancel = document.createElement('button');
    projectAddFormCancel.className = 'bg-red-700 hover:bg-red-800 addProjectBtn';
    projectAddFormCancel.textContent = 'Cancel';
    projectAddFormCancel.setAttribute('type', 'button');

    projectAddFormDiv.append(form);
    form.append(div1, projectAddFormSubmit, projectAddFormCancel);
    div1.append(projectAddFormInput);

    return {
        projectAddFormDiv,
        projectAddFormSubmit,
        projectAddFormCancel,
        projectAddFormInput
    };

}


export default projectAddForm;
