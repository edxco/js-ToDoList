import taskEmptyImg from '../img/taskEmpty.jpg';

const taskEmpty = (currentProject) => {
    const taskEmptyDiv = document.createElement('div');
    taskEmptyDiv.className = 'w-full text-center';

    const p1 = document.createElement('p');
    p1.className = 'text-3xl font-light text-blue-900 mb-3';
    const span1 = document.createElement('span');
    span1.className = 'font-semibold'
    span1.textContent = `${currentProject}`;
    const span2 = document.createElement('span');
    span2.textContent = `'s project has no tasks yet`;
    const p2 = document.createElement('p');
    p2.className = 'text-xl text-gray-700';
    p2.textContent = 'Create a new task'

    const bulletImg = document.createElement('img');
    bulletImg.className = 'w-2/4 opacity-75 mx-auto mt-10';
    bulletImg.src = taskEmptyImg;

    taskEmptyDiv.append(p1, p2, bulletImg);
    p1.append(span1, span2);

    return taskEmptyDiv;
}

export default taskEmpty;