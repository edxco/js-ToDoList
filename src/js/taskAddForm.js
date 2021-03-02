const taskAddForm = () => {
  const taskAddFormDiv = document.createElement('div');

  const taskValidationForm = document.createElement('div');
  taskValidationForm.className = 'bg-yellow-100 my-4 rounded text-gray-600 p-2 text-center font-light';
  taskValidationForm.setAttribute('style', 'display: none');
  // taskValidationForm.textContent = 'Error Message';

  const taskAddFormDiv1 = document.createElement('div');
  taskAddFormDiv1.className = 'flex flex-wrap -m-2';

  const divInput = document.createElement('div');
  divInput.className = 'p-2 w-1/2';
  const div3 = document.createElement('div');
  div3.className = 'relative';
  const taskIn1 = document.createElement('input');
  taskIn1.className = 'addTaskInput';
  taskIn1.setAttribute('type', 'text');
  taskIn1.setAttribute('placeholder', 'What will you do?');

  const divInput1 = document.createElement('div');
  divInput1.className = 'p-2 w-1/2';
  const div5 = document.createElement('div');
  div5.className = 'relative';
  const taskIn2 = document.createElement('input');
  taskIn2.className = 'addTaskInput';
  taskIn2.setAttribute('type', 'text');
  taskIn2.setAttribute('placeholder', 'Notes');

  const divInput2 = document.createElement('div');
  divInput2.className = 'p-2 w-1/2';
  const div7 = document.createElement('div');
  div7.className = 'relative';
  const label1 = document.createElement('label');
  label1.className = 'leading-7 required text-sm text-gray-600';
  label1.textContent = 'Due date';
  const taskIn3 = document.createElement('input');
  taskIn3.className = 'addTaskInput';
  taskIn3.setAttribute('type', 'date');

  const divInput3 = document.createElement('div');
  divInput3.className = 'p-2 w-1/2';
  const div9 = document.createElement('div');
  div9.className = 'relative';
  const label2 = document.createElement('label');
  label2.className = 'leading-7 required text-sm text-gray-600';
  label2.textContent = 'Select the priority';
  const divSelect = document.createElement('div');
  divSelect.className = 'flex items-center';
  const divSelect1 = document.createElement('div');
  divSelect1.className = 'relative mt-0.5';
  const taskAddSelect = document.createElement('select');
  taskAddSelect.className = 'rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10';
  const option = document.createElement('option');
  option.setAttribute('selected', '');
  option.setAttribute('disabled', '');
  option.setAttribute('hidden', '');
  option.textContent = 'Select Priority';
  const option1 = document.createElement('option');
  option1.textContent = 'Important';
  const option2 = document.createElement('option');
  option2.textContent = 'Normal';
  const option3 = document.createElement('option');
  option3.textContent = 'Low';
  const spanSelect = document.createElement('span');
  spanSelect.className = 'absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center';
  spanSelect.innerHTML = '<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"></path></svg>';
  const btnDiv = document.createElement('div');
  btnDiv.className = 'p-2 w-full';
  const taskAddSubmit = document.createElement('button');
  taskAddSubmit.className = 'btnAddTask';


  taskAddFormDiv.append(taskValidationForm, taskAddFormDiv1);
  taskAddFormDiv1.append(divInput, divInput1, divInput2, divInput3, btnDiv);
  divInput.append(div3);
  div3.append(taskIn1);
  divInput1.append(div5);
  div5.append(taskIn2);
  divInput2.append(div7);
  div7.append(label1, taskIn3);
  divInput3.append(div9);
  div9.append(label2, divSelect);
  divSelect.append(divSelect1);
  divSelect1.append(taskAddSelect, spanSelect);
  taskAddSelect.append(option, option1, option2, option3);
  btnDiv.append(taskAddSubmit);

  return {
    taskAddFormDiv,
    taskIn1,
    taskIn2,
    taskIn3,
    taskAddSelect,
    taskAddSubmit,
    taskValidationForm,
  };
};

export default taskAddForm;