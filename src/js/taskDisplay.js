// import addNewTaskForm from './addNewTaskForm';
// import taskCard from './projects';
// import showNewTaskForm from './showNewTaskForm'
// const { div2 } = taskCard();

const taskDisplay = (currentProject) => {
    console.log('Im here');
    const projectMenu = document.createElement('section');
    projectMenu.className = 'container px-5 mt-12 mx-auto';

    const div11 = document.createElement('div');
    div11.className = '-my-8 divide-y-2 divide-gray-100';
    div11.id = 'taskListContainer';

    const btnNewTask = document.createElement('button');
    btnNewTask.className = 'w-full mb-8 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 text-lg';
    btnNewTask.textContent = 'Add New Task';
    btnNewTask.id = 'showNewTaskForm'

    const containerNewTask = document.createElement('div');
    containerNewTask.className = 'lg:w-1/2 md:w-2/3 mx-auto mb-10';
    containerNewTask.setAttribute('style', 'display: none');
    containerNewTask.id = 'taskFormDisplay';

    const note = document.createElement('div');
    note.className = 'h-20 bg-yellow-400 text-2xl text-center text-white font-bold pt-5';
    note.textContent = 'This is a new project. Please Add a New Task'
    const divList = document.createElement('div');
    //divList.append(note);
    
    // let storage = JSON.parse(localStorage.getItem(currentProject));
    let storage = localStorage.getItem(currentProject);
    for (let i = 0; i < storage.length; i += 1) {
        const div2 = document.createElement('div');
        div2.className = 'py-8 flex flex-wrap md:flex-nowrap border-b-2';
        const div3 = document.createElement('div');
        div3.className = 'md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col';
        const span1 = document.createElement('span');
        span1.className = 'font-semibold title-font text-gray-700';
        span1.textContent = storage[i].priority;
        const span2 = document.createElement('span');
        span2.className = 'mt-1 text-gray-500 text-sm';
        span2.textContent = storage[i].date;

        const actions = document.createElement('div');
        actions.className = 'mt-3 flex text-sm font-semibold';
        const edit = document.createElement('div');
        edit.className = 'text-gray-600 cursor-pointer';
        edit.textContent = 'Edit';
        const separator = document.createElement('div');
        separator.className = 'mx-3';
        separator.textContent = '|';
        const erase = document.createElement('div');
        // erase.id = 'deleteTask';
        // erase.setAttribute('onClick', 'deleteTaskItem()');
        erase.className = 'text-red-600 cursor-pointer deleteBtnTask';
        erase.textContent = 'Delete'
        erase.setAttribute('key', currentProject);
        erase.setAttribute('position', i);

        const div4 = document.createElement('div');
        div4.className = 'md:flex-grow';
        const h1 = document.createElement('h2');
        h1.className = 'text-2xl font-medium text-gray-900 title-font mb-2';
        h1.textContent = storage[i].task;
        const p = document.createElement('p');
        p.className = 'leading-relaxed';
        p.textContent = storage[i].description;

        divList.append(div2);
        div2.append(div3, div4);
        div3.append(span1, span2, actions);
        actions.append(edit, separator, erase);
        div4.append(h1, p);
    }

    projectMenu.append(div11, divList);
    div11.append(btnNewTask, containerNewTask);

}

export default taskDisplay;