// import { list } from "postcss";
import down from '../img/chevron-down.png';
import plus from '../img/plus.png';

const projectAddBtn = () => { 

    const projectAddBtnDiv = document.createElement('div');
    projectAddBtnDiv.className = 'antialiased w-full';

    const btnAddProj = document.createElement('div');
    btnAddProj.className = 'flex flex-row w-4/5 items-center bg-white hover:bg-gray-300 h-10 my-5 cursor-pointer';
    btnAddProj.id = 'addProjectBtnHTML';
    const div_down = document.createElement('div');
    const imageDown = document.createElement('img');
    imageDown.className = 'w-3 ml-4 mr-7';
    imageDown.src = down;
    const div_title = document.createElement('div');
    div_title.className = 'w-full text-center text-gray-700';
    div_title.textContent = 'Projects List';
    const imagePlus = document.createElement('img');
    imagePlus.className = 'mx-5';
    imagePlus.src = plus;

    projectAddBtnDiv.append(btnAddProj);    
    btnAddProj.append(div_down, div_title, imagePlus);
    div_down.append(imageDown);

    return {
        projectAddBtnDiv,
        btnAddProj
    }
}

export default projectAddBtn;
