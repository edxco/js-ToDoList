import projectAddForm from '../src/js/projectAddForm';

const {
  projectAddFormDiv,
  projectAddFormSubmit,
  projectAddFormCancel,
  projectAddFormInput,
  projectFieldValidation,
} = projectAddForm();

test('Confirms that projectAddFormDiv is an object', () => {
  expect(typeof projectAddFormDiv).toBe('object');
});

test('Confirms that projectAddFormDiv does not return any other thing other than object ',
  () => {
    expect(typeof projectAddFormDiv).not.toBe('string');
  });

test('Confirms that projectAddFormDiv style attribute is display', () => {
  expect(projectAddFormDiv.getAttribute('style')).toBe('display: none');
});

test('Confirms that projectAddFormSubmit is an object', () => {
  expect(typeof projectAddFormSubmit).toBe('object');
});

test('Confirms that projectAddFormSubmit does not return any other thing other than object ',
  () => {
    expect(typeof projectAddFormSubmit).not.toBe('string');
  });

test('Confirms that projectAddFormDiv type attribute is button', () => {
  expect(projectAddFormSubmit.getAttribute('type')).toBe('button');
});

test('Confirms that projectAddFormDivSubmit displays Add Project', () => {
  expect(projectAddFormSubmit.textContent).toBe('Add Project');
});

test('Confirms that projectAddFormCancel is an object', () => {
  expect(typeof projectAddFormCancel).toBe('object');
});

test('Confirms that projectAddFormCancel does not return any other thing other than object ',
  () => {
    expect(typeof projectAddFormCancel).not.toBe('string');
  });

test('Confirms that projectAddFormCancel type attribute is button', () => {
  expect(projectAddFormCancel.getAttribute('type')).toBe('button');
});

test('Confirms that projectAddFormDivCancel displays Cancel', () => {
  expect(projectAddFormCancel.textContent).toBe('Cancel');
});

test('Confirms that projectAddFormInput is an object', () => {
  expect(typeof projectAddFormInput).toBe('object');
});

test('Confirms that projectAddFormInput does not return any other thing other than object ',
  () => {
    expect(typeof projectAddFormInput).not.toBe('string');
  });

test('Confirms that projectAddFormInput type attribute is text', () => {
  expect(projectAddFormInput.getAttribute('type')).toBe('text');
});

test('Confirms that projectAddFormDivInput placeholder is Add project name', () => {
  expect(projectAddFormInput.getAttribute('placeholder')).toBe('Add project name');
});

test('Confirms that projectAddFormDivInput id is projectName', () => {
  expect(projectAddFormInput.getAttribute('id')).toBe('projectName');
});

test('Confirms that projectAddFormDivInput class name is addProjectInput', () => {
  expect(projectAddFormInput.className).toBe('addProjectInput');
});

test('Confirms that projectFieldValidation is an object', () => {
  expect(typeof projectFieldValidation).toBe('object');
});

test('Confirms that projectFieldValidation does not return any other thing other than object ',
  () => {
    expect(typeof projectFieldValidation).not.toBe('string');
  });

test('Confirms that projectFieldValidation style attribute is display: none class', () => {
  expect(projectFieldValidation.getAttribute('style')).toBe('display: none');
});

test('Confirms that projectFieldValidation class name is correct', () => {
  expect(projectFieldValidation.className).toBe('bg-yellow-100 font-light font-xs text-center rounded mb-3 p-2 text-gray-600');
});
