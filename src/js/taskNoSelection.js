import noSelectionImg from '../img/noSelection.png';

const taskNoSelection = () => {
    const taskNoSelectionDiv = document.createElement('div');
    taskNoSelectionDiv.className = 'w-full text-center pt-20';

    const p1 = document.createElement('p');
    p1.className = 'text-5xl font-light text-blue-900 mb-3';
    p1.textContent = 'Ups! Nothing to show'
    const p2 = document.createElement('p');
    p2.className = 'text-xl text-gray-700';
    p2.textContent = 'Create or select a project';

    const bulletImg = document.createElement('img');
    bulletImg.className = 'h-1/4 opacity-75 mx-auto mt-10';
    bulletImg.src = noSelectionImg;

    taskNoSelectionDiv.append(p1, p2, bulletImg);

    return taskNoSelectionDiv;
}

export default taskNoSelection;