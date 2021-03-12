const projectAddBtn = () => {
  const projectAddBtnDiv = document.createElement('div');
  projectAddBtnDiv.className = 'antialiased w-full';
  const btnAddProj = document.createElement('div');
  btnAddProj.className = 'flex flex-row w-4/5 items-center bg-white hover:bg-gray-300 h-10 my-5 cursor-pointer';
  btnAddProj.id = 'addProjectBtnHTML';
  const divDown = document.createElement('div');
  const imageDown = document.createElement('img');
  imageDown.className = 'w-3 ml-4 mr-7';
  imageDown.src = './media/chevron-down.png';
  const divTitle = document.createElement('div');
  divTitle.className = 'w-full text-center text-gray-700';
  divTitle.textContent = 'Projects List';
  const imagePlus = document.createElement('img');
  imagePlus.className = 'mx-5';
  imagePlus.src = './media/plus.png';
  projectAddBtnDiv.append(btnAddProj);
  btnAddProj.append(divDown, divTitle, imagePlus);
  divDown.append(imageDown);
  return {
    projectAddBtnDiv,
    btnAddProj,
  };
};

export default projectAddBtn;
