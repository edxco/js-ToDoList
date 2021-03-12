import projectList from '../src/js/projectList';

test('confirms that projectListDiv is an object', () => {
  expect(typeof projectList()).toBe('object');
});

test('confirms that projectListDiv is not a string', () => {
  expect(typeof projectList()).not.toBe('string');
});

test('Print the right class name', () => {
  expect(projectList().className).toBe('antialiased w-full');
});

test('confirms that projectListDiv child is listProj', () => {
  expect(projectList().innerHTML).toBe('<ul class="list-disc list-inside mt-7 ml-8 text-lg"></ul>');
});
