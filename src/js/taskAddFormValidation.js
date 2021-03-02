const taskAddFormValidation = (currentProject, taskAddInput1, taskAddInput2, taskAddInput3, taskAddSelect) => {
    let errorMsg = '';

    let compare = localStorage.getItem(currentProject);

    if (compare === '') {
        errorMsg = ''
    } else {
        compare = JSON.parse(localStorage.getItem(currentProject));
        console.log('compare', compare)
    }

    for (var i = 0; i < compare.length; ++i) {
        if (compare[i].task === taskAddInput1) {
            errorMsg = `There is already a task named ${taskAddInput1}`
            break;
        }
    }

    if (taskAddInput1 === '' || taskAddInput2 === '' || taskAddInput3 === '' || taskAddSelect === '') {
        errorMsg = 'There is one input empty, Please check';
    } 

    return errorMsg
}

export default taskAddFormValidation;