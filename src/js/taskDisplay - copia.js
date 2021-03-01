import taskEmpty from './taskEmpty';

const taskDisplay = (currentProject) => {
    const mainList = document.createElement('section');
    mainList.className = 'w-full px-10 pt-12';
    mainList.id = 'taskListContainer';

    const div11 = document.createElement('div');
    div11.className = '-my-8 divide-y-2 divide-gray-100';
    //div11.id = 'taskListContainer';

    const btnNewTask = document.createElement('button');
    btnNewTask.className = 'w-full text-white bg-blue-500 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg';
    btnNewTask.textContent = 'Add New Task';
    btnNewTask.id = 'showNewTaskForm'

    const containerNewTask = document.createElement('div');
    containerNewTask.className = 'mx-auto mb-10 p-6 bg-gray-50 rounded-b-md';
    containerNewTask.setAttribute('style', 'display: none');
    containerNewTask.id = 'taskFormDisplay';

    const divList = document.createElement('div');
    divList.className = 'pt-16';
    let testStorage = localStorage.getItem(currentProject);

    if (testStorage === '') {
        
        divList.append(taskEmpty(currentProject));

    } else {
        
        let storage = JSON.parse(localStorage.getItem(currentProject));
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
            erase.className = 'text-red-600 cursor-pointer deleteBtnTask';
            erase.textContent = 'Delete'
            erase.setAttribute('key', currentProject);
            erase.setAttribute('position', i);

            const div4 = document.createElement('div');
            div4.className = 'md:flex-grow';
            const h1 = document.createElement('h2');
            h1.className = 'text-2xl font-medium text-blue-800 title-font mb-2';
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
    }
        mainList.append(div11, divList);
        div11.append(btnNewTask, containerNewTask);

        return mainList;
}

export default taskDisplay;