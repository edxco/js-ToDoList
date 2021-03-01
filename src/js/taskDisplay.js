import taskEmpty from './taskEmpty';
import deleteImg from '../img/delete.png';
import editImg from '../img/edit.png';

let priority;

const taskDisplay = (currentProject) => {
    const mainList = document.createElement('section');
    mainList.className = 'w-full px-10 pt-12';
    mainList.id = 'taskListContainer';

    const div11 = document.createElement('div');
    div11.className = '-my-8 divide-y-2 divide-gray-100';

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
            const taskCont = document.createElement('div');
            taskCont.className = 'flex self-center justify-between container-full border-b border-gray-300 h-16';

            const taskLeft = document.createElement('div');
            taskLeft.className = 'flex self-center';

            priority = storage[i].priority
            let color = changeColor(priority);
            const taskLeft1 = document.createElement('div');
            taskLeft1.className = 'flex flex-col md:flex-row self-center';
            const status1 = document.createElement('div');
            status1.className = `${color[0]}`;
            const status2 = document.createElement('div');
            status2.className = `${color[1]}`;
            status2.textContent = storage[i].priority;

            const taskLeft2 = document.createElement('div');
            taskLeft2.className = 'flex-col w-40 md:w-96'
            const task2 = document.createElement('div');
            task2.className = 'text-gray-500'
            const task2p = document.createElement('p');
            task2p.className = 'truncate text-lg font-semibold';
            task2p.textContent = storage[i].task;
            const task3 = document.createElement('div');
            task3.className = 'text-gray-600 font-light md:w-96';
            const task3p = document.createElement('p');
            task3p.className = 'truncate';
            task3p.textContent = storage[i].description;

            const taskRight = document.createElement('div');
            taskRight.className = 'flex self-center justify-between';

            const taskRight1 = document.createElement('div');
            taskRight1.className = 'text-gray-500 font-semibold mx-2';
            taskRight1.textContent = storage[i].date;
            const taskRightDel = document.createElement('img');
            taskRightDel.className = 'h-4 mx-2 cursor-pointer deleteBtnTask';
            taskRightDel.src = deleteImg;
            taskRightDel.setAttribute('key', currentProject);
            taskRightDel.setAttribute('position', i);
            const taskRightEdit = document.createElement('img');
            taskRightEdit.className = 'h-4 mx-2 cursor-pointer editBtnTask';
            taskRightEdit.src = editImg;
            taskRightEdit.setAttribute('key', currentProject);
            taskRightEdit.setAttribute('position', i);

            divList.append(taskCont);
            taskCont.append(taskLeft, taskRight);

            taskLeft.append(taskLeft1, taskLeft2);
            taskLeft1.append(status1, status2);
            taskLeft2.append(task2, task3);
            task2.append(task2p);
            task3.append(task3p);

            taskRight.append(taskRight1, taskRightEdit, taskRightDel);


            // span1.textContent = storage[i].priority;
            // const span2 = document.createElement('span');
            // span2.className = 'mt-1 text-gray-500 text-sm';
            // span2.textContent = storage[i].date;

            // const actions = document.createElement('div');
            // actions.className = 'mt-3 flex text-sm font-semibold';
            // const edit = document.createElement('div');
            // edit.className = 'text-gray-600 cursor-pointer';
            // edit.textContent = 'Edit';
            // const separator = document.createElement('div');
            // separator.className = 'mx-3';
            // separator.textContent = '|';
            // const erase = document.createElement('div');
            // erase.className = 'text-red-600 cursor-pointer deleteBtnTask';
            // erase.textContent = 'Delete'
            // erase.setAttribute('key', currentProject);
            // erase.setAttribute('position', i);

            // const div4 = document.createElement('div');
            // div4.className = 'md:flex-grow';
            // const h1 = document.createElement('h2');
            // h1.className = 'text-2xl font-medium text-blue-800 title-font mb-2';
            // h1.textContent = storage[i].task;
            // const p = document.createElement('p');
            // p.className = 'leading-relaxed';
            // p.textContent = storage[i].description;

            // divList.append(div2);
            // div2.append(div3, div4);
            // div3.append(span1, span2, actions);
            // actions.append(edit, separator, erase);
            // div4.append(h1, p);

        }
    }
    mainList.append(div11, divList);
    div11.append(btnNewTask, containerNewTask);

    return mainList;
}

const changeColor = (priority) => {
    let color = [];
    switch (priority) {
        case 'Important':
            color[0] = 'self-center rounded-full mb-1 h-4 w-4 border border-red-600 bg-red-100 ml-1 md:ml-3 mr-1.5';
            color[1] = 'w-10 self-center font-semibold text-red-800 text-xs h-5 hidden md:block md:mr-10';
            return color;
        case 'Normal':
            color[0] = 'self-center rounded-full mb-1 h-4 w-4 border border-green-600 bg-green-100 ml-1 md:ml-3 mr-1.5';
            color[1] = 'w-10 self-center font-semibold text-green-800 text-xs h-5 hidden md:block md:mr-10';
            return color;
        case 'Low':
            color[0] = 'self-center rounded-full mb-1 h-4 w-4 border border-gray-900 bg-gray-100 ml-1 md:ml-3 mr-1.5';
            color[1] = 'w-10 self-center font-semibold text-gray-900 text-xs h-5 hidden md:block md:mr-10';
            return color;
    }
}

export default taskDisplay;