const taskAddFormValidation = (currentProj, input1, input2, input3, select) => {
  let errorMsg = '';

  let compare = localStorage.getItem(currentProj);

  if (compare === '') {
    errorMsg = '';
  } else {
    compare = JSON.parse(localStorage.getItem(currentProj));
  }

  for (let i = 0; i < compare.length; i += 1) {
    if (compare[i].task === input1) {
      errorMsg = `There is already a task named '${input1}'`;
      break;
    }
  }

  if (input1 === '' || input2 === '' || input3 === '' || select === '') {
    errorMsg = 'There is one input empty, Please check';
  }

  return errorMsg;
};

export default taskAddFormValidation;