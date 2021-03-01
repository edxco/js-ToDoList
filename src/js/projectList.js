const projectList = () => { 

    const projectListDiv = document.createElement('div');
    projectListDiv.className = 'antialiased w-full';

    const listProj = document.createElement('ul');
    listProj.className = 'list-disc list-inside mt-7 ml-8 text-lg';

    for (let i = 0; i < localStorage.length; i += 1) {
        const key = localStorage.key(i);
        let li = document.createElement('li');
        li.className = 'cursor-pointer mt-1 btnListPro text-blue-900 btn-List';
        li.id = localStorage.key(i);
        li.textContent = `${key}` //Put the varable of localstorage to loop here

        listProj.append(li);
    }

    projectListDiv.append(listProj);

    return projectListDiv;
}

export default projectList;
