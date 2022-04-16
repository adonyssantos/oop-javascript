import CourseClass from './classes/CourseClass.mjs';
import Course from './classes/Course.mjs';
import LearningPath from './classes/LearningPath.mjs';
import FreeStudent from './classes/FreeStudent.mjs';
import BasicStudent from './classes/BasicStudent.mjs';
import ExpertStudent from './classes/ExpertStudent.mjs';
import TeacherStudent from './classes/TeacherStudent.mjs';

// Course Classes
const introduction = new CourseClass({
  id: 1,
  title: 'Intro to software engineering',
  description: 'Learn how to build a simple web app',
});

// Courses
const html = new Course({
  id: 1,
  title: 'HTML',
  classes: [introduction],
  isFree: true,
});

const css = new Course({
  id: 2,
  title: 'CSS',
  classes: [introduction],
  isBasic: true,
});

const js = new Course({
  id: 3,
  title: 'JavaScript',
  classes: [introduction],
  isBasic: true,
});

const react = new Course({
  id: 4,
  title: 'React',
  classes: [introduction],
  isBasic: true,
});

const python = new Course({
  id: 5,
  title: 'Python',
  classes: [introduction],
  isBasic: true,
});

const web3 = new Course({
  id: 6,
  title: 'Web3',
  classes: [introduction],
});

const bitcoinCore = new Course({
  id: 7,
  title: 'Bitcoin Core',
  classes: [introduction],
});

const blockchain = new Course({
  id: 8,
  title: 'Blockchain',
  classes: [introduction],
});

const eth = new Course({
  id: 9,
  title: 'Ethereum',
  classes: [introduction],
});

const solidity = new Course({
  id: 10,
  title: 'Solidity',
  classes: [introduction],
});

// Learning Paths
const webDev = new LearningPath({
  id: 1,
  title: 'Web Development',
  description: 'Learn how to build a website',
  courses: [html, css, js, react, python],
});

const blockChain = new LearningPath({
  id: 2,
  title: 'Blockchain',
  description: 'Learn how to build a blockchain',
  courses: [bitcoinCore, blockchain, eth, solidity, web3, python],
});

// Students
const adonys = new FreeStudent({
  id: 1,
  name: 'Adonys',
  email: 'adonys@adonys.me',
  surname: 'Santos',
  age: 18,
  instagram: 'adonyssantos_',
  twitter: 'adonyssantos_',
  learningPaths: [webDev, blockChain],
});

const samuel = new BasicStudent({
  id: 2,
  name: 'Samuel',
  email: 'samuel@adonys.me',
  surname: 'Santos',
  age: 18,
  learningPaths: [webDev],
});

const matias = new ExpertStudent({
  id: 3,
  name: 'Matias',
  email: 'matias@adonys.me',
  surname: 'Santos',
  age: 18,
  learningPaths: [blockChain],
});

const eljefe = new TeacherStudent({
  id: 4,
  name: 'El Jefe',
  email: 'eljefe@adonys.me',
  age: 18,
});

adonys.postComment('I love this course!');
samuel.postComment('I love this course!');
matias.postComment('I love this course!');
eljefe.postComment('I love this course!');
