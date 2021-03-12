import projectAddBtn from '../src/js/projectAddBtn';

const {
  projectAddBtnDiv,
  btnAddProj,
} = projectAddBtn();

test('confirms that projectAddBtnDiv is an object', () => {
  expect(typeof projectAddBtnDiv).toBe('object');
});

test('confirms that projectAddBtnDiv is not a string', () => {
  expect(typeof projectAddBtnDiv).not.toBe('string');
});

test('Print the right class name', () => {
  expect(projectAddBtnDiv.className).toBe('antialiased w-full');
});

test('confirms that btnAddProj is an object', () => {
  expect(typeof btnAddProj).toBe('object');
});

test('confirms that btnAddProj is not a string', () => {
  expect(typeof btnAddProj).not.toBe('string');
});

test('Print the right id', () => {
  expect(btnAddProj.id).toBe('addProjectBtnHTML');
});
