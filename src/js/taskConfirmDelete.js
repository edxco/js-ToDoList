const taskConfirmDelete = (task) => {
  const confirmDeleteDiv = document.createElement('div');
  confirmDeleteDiv.className = 'flex h-6 w-full mt-5';

  const textDiv = document.createElement('div');
  textDiv.className = 'text-gray-500 font-bold';
  textDiv.textContent = `Confirm the delete of task: '${task}'?`;
  const yesDiv = document.createElement('div');
  yesDiv.className = 'rounded px-3 bg-red-600 shadow text-white mx-6 cursor-pointer hover:bg-red-700';
  yesDiv.textContent = 'Yes';
  yesDiv.id = `yes${task}`;
  const noDiv = document.createElement('div');
  noDiv.className = 'rounded px-3 bg-gray-500 shadow text-white cursor-pointer hover:bg-gray-600';
  noDiv.textContent = 'No';
  noDiv.id = `no${task}`;

  confirmDeleteDiv.append(textDiv, yesDiv, noDiv);

  return confirmDeleteDiv;
};

export default taskConfirmDelete;