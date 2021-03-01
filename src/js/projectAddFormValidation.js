import projectAddForm from "./projectAddForm"

const projectAddFormValidation = (input) => {
    let errorMsg = '';
    let keysInStorage = [];
    let flag = false;

    for (var i = 0, len = localStorage.length; i < len; ++i) {
        keysInStorage.push(localStorage.key(i));
        if (keysInStorage[i] === input) {
            flag = true;
            break;
        }
    }

    if (input === '') {
        return 'Please add a name project';
    } else if (flag === true) {
        return `Duplicate name: '${input}' already in project list`;
    }
}

export default projectAddFormValidation;