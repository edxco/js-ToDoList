const defaultData = () => {
  const testing = [{
    task: 'Complete HTML & CSS',
    description: 'HTML is the standard markup language for documents designed to be displayed in a web browser',
    date: '2020-09-24',
    priority: 'Normal',
  },
  {
    task: 'Complete Rails',
    description: 'Rails is a web-application framework that includes everything needed to create database-backed web',
    date: '2020-12-02',
    priority: 'Important',
  },
  {
    task: 'Get a Job',
    description: 'Earn $400K / year',
    date: '2021-04-08',
    priority: 'Important',
  },
  ];

  localStorage.setItem('Microverse Program', JSON.stringify(testing));
};

const defaultValues = () => {
  let flagStatus = false;

  const y = localStorage.length;

  for (let i = 0; i < y; i += 1) {
    if (localStorage.key(i) === 'Microverse Program') {
      flagStatus = true;
      break;
    }
  }

  if (flagStatus === false) {
    defaultData();
  }
};

export default defaultValues;