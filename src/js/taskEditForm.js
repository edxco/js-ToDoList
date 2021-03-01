const taskAddForm = () => {
    const taskAddFormDiv = document.createElement('div');
    taskAddFormDiv.className = 'flex flex-wrap -m-2';
    const divInput = document.createElement('div');
    divInput.className = 'p-2 w-1/2';
    const div3 = document.createElement('div');
    div3.className = 'relative';
    const taskAddInput1 = document.createElement('input');
    taskAddInput1.className = 'addTaskInput';
    taskAddInput1.setAttribute('type', 'text');
    taskAddInput1.setAttribute('placeholder', 'What will you do?');

    const divInput1 = document.createElement('div');
    divInput1.className = 'p-2 w-1/2';
    const div5 = document.createElement('div');
    div5.className = 'relative';
    const taskAddInput2 = document.createElement('input');
    taskAddInput2.className = 'addTaskInput';
    taskAddInput2.setAttribute('type', 'text');
    taskAddInput2.setAttribute('placeholder', 'Notes');

    const divInput2 = document.createElement('div');
    divInput2.className = 'p-2 w-1/2';
    const div7 = document.createElement('div');
    div7.className = 'relative';
    const label1 = document.createElement('label');
    label1.className = 'leading-7 required text-sm text-gray-600';
    label1.textContent = 'Due date';
    const taskAddInput3 = document.createElement('input');
    taskAddInput3.className = 'addTaskInput';
    taskAddInput3.setAttribute('type', 'date');

    const divInput3 = document.createElement('div');
    divInput3.className = 'p-2 w-1/2';
    const div9 = document.createElement('div');
    div9.className = 'relative';
    const label2 = document.createElement('label');
    label2.className = 'leading-7 required text-sm text-gray-600';
    label2.textContent = 'Select the priority';
    const div_select = document.createElement('div');
    div_select.className = 'flex items-center';
    const div_select1 = document.createElement('div');
    div_select1.className = 'relative mt-0.5';
    const taskAddSelect = document.createElement('select');
    taskAddSelect.className = 'rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10';
    const option1 = document.createElement('option');
    option1.textContent = 'Important';
    const option2 = document.createElement('option');
    option2.textContent = 'Normal';
    const option3 = document.createElement('option');
    option3.textContent = 'Low';
    const span_select = document.createElement('span');
    span_select.className = 'absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center';
    span_select.innerHTML = '<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"></path></svg>';

    const btnDiv = document.createElement('div');
    btnDiv.className = 'p-2 w-full';
    // const taskAddSubmit = document.createElement('button');
    // taskAddSubmit.className = 'btnAddTask';
    // taskAddSubmit.textContent = 'Add Task'

    const taskAddSubmit = document.createElement('button');
    taskAddSubmit.className = 'btnAddTask';
    taskAddSubmit.textContent = 'Add Task';

    const taskEditSubmit = document.createElement('button');
    taskEditSubmit.className = 'btnAddTask';
    taskEditSubmit.textContent = 'Edit Task';

    taskAddFormDiv.append(divInput, divInput1, divInput2, divInput3, btnDiv);
    divInput.append(div3);
    div3.append(taskAddInput1);
    divInput1.append(div5);
    div5.append(taskAddInput2);
    divInput2.append(div7);
    div7.append(label1, taskAddInput3);
    divInput3.append(div9);
    div9.append(label2, div_select);
    div_select.append(div_select1);
    div_select1.append(taskAddSelect, span_select);
    taskAddSelect.append(option1, option2, option3);
    btnDiv.append(taskAddSubmit);

    return {
        taskAddFormDiv,
        taskAddInput1,
        taskAddInput2,
        taskAddInput3,
        taskAddSelect,
        taskAddSubmit,
    }
}

export default taskAddForm;
