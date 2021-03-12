import taskAddForm from '../src/js/taskAddForm';

const {
  taskAddFormDiv,
  taskIn1,
  taskIn2,
  taskIn3,
  taskAddSelect,
  taskAddSubmit,
  taskValidationForm,
} = taskAddForm();

test('Confirms that taskAddFormDiv is an object', () => {
  expect(typeof taskAddFormDiv).toBe('object');
});

test('Confirms that taskAddFormDiv does not return any other thing other than object ',
     () => {
  expect(typeof taskAddFormDiv).not.toBe('string');
});

test('Confirms that taskIn1 is an object', () => {
  expect(typeof taskIn1).toBe('object');
});

test('Confirms that taskIn1 does not return any other thing other than object ',
     () => {
  expect(typeof taskIn1).not.toBe('string');
});

test('Confirms that taskIn1 type attribute is text', () => {
  expect(taskIn1.getAttribute('type')).toBe('text');
});

test('Confirms that taskIn1 placeholder attribute is what will you do?', () => {
  expect(taskIn1.getAttribute('placeholder')).toBe('What will you do?');
});

test('Confirms that taskIn1 class name is addTaskInput', () => {
  expect(taskIn1.className).toBe('addTaskInput');
});

test('Confirms that taskIn2 is an object', () => {
  expect(typeof taskIn2).toBe('object');
});

test('Confirms that taskIn2 does not return any other thing other than object ',
     () => {
  expect(typeof taskIn2).not.toBe('string');
});

test('Confirms that taskIn2 type attribute is text', () => {
  expect(taskIn2.getAttribute('type')).toBe('text');
});

test('Confirms that taskIn2 placeholder attribute is what will you do?', () => {
  expect(taskIn2.getAttribute('placeholder')).toBe('Notes');
});

test('Confirms that taskIn2 class name is addTaskInput', () => {
  expect(taskIn2.className).toBe('addTaskInput');
});

test('Confirms that taskIn3 is an object', () => {
  expect(typeof taskIn3).toBe('object');
});

test('Confirms that taskIn3 does not return any other thing other than object ',
     () => {
  expect(typeof taskIn3).not.toBe('string');
});

test('Confirms that taskIn3 type attribute is date', () => {
  expect(taskIn3.getAttribute('type')).toBe('date');
});

test('Confirms that taskIn3 class name is addTaskInput', () => {
  expect(taskIn3.className).toBe('addTaskInput');
});

test('Confirms that taskAddSelect is an object', () => {
  expect(typeof taskAddSelect).toBe('object');
});

test('Confirms that taskAddSelect does not return any other thing other than object ',
     () => {
  expect(typeof taskAddSelect).not.toBe('string');
});

test('Confirms that taskAddSubmit is an object', () => {
  expect(typeof taskAddSubmit).toBe('object');
});

test('Confirms that taskAddSubmit does not return any other thing other than object ',
     () => {
  expect(typeof taskAddSubmit).not.toBe('string');
});

test('Confirms that taskValidationForm is an object', () => {
  expect(typeof taskValidationForm).toBe('object');
});

test('Confirms that taskValidationForm does not return any other thing other than object ',
     () => {
  expect(typeof taskValidationForm).not.toBe('string');
});

test('Confirms that taskValidationForm style attribute is display: none', () => {
  expect(taskValidationForm.getAttribute('style')).toBe('display: none');
});

