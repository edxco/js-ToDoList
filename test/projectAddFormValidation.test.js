import  projectAddFormValidation from '../src/js/projectAddFormValidation';

test('Returns an error message when no input is provided', () => {
  expect(projectAddFormValidation('')).toBe('Please add a name project');
});
