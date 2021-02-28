// import { list } from "postcss";
import down from '../img/chevron-down.png';
import plus from '../img/plus.png';

const projectMenu = () => { 

    const projectMenuDiv = document.createElement('div');
    projectMenuDiv.className = 'antialiased w-full';
    projectMenuDiv.id = 'listProjectDiv';

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

    const listProj = document.createElement('ul');
    listProj.className = 'list-disc list-inside mt-7 ml-8 text-lg';
    listProj.id = 'btnList';

    for (let i = 0; i < localStorage.length; i += 1) {
        const key = localStorage.key(i);
        let li = document.createElement('li');
        li.className = 'cursor-pointer mt-1 btnListPro text-blue-900';
        li.id = localStorage.key(i);
        li.textContent = `${key}` //Put the varable of localstorage to loop here

        listProj.append(li);
    }

    projectMenuDiv.append(btnAddProj, listProj)
    
    btnAddProj.append(div_down, div_title, imagePlus);
    div_down.append(imageDown);

    return {
        projectMenuDiv,
        btnAddProj
    }
}

export default projectMenu;
