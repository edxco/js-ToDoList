const projectAddFormValidation = (input) => {
  const keysInStorage = [];
  let msgError;
  let flag = false;
  for (let i = 0, len = localStorage.length; i < len; i += 1) {
    keysInStorage.push(localStorage.key(i));
    if (keysInStorage[i] === input) {
      flag = true;
      break;
    }
  }
  if (input === '') {
    msgError = 'Please add a name project';
  } if (flag === true) {
    msgError = `Duplicate name: '${input}' already in project list`;
  }

  return msgError;
};

export default projectAddFormValidation;
