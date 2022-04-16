import CourseClass from './classes/CourseClass.mjs';
import Course from './classes/Course.mjs';
import LearningPath from './classes/LearningPath.mjs';
import Student from './classes/Student.mjs';

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
});

const css = new Course({
  id: 2,
  title: 'CSS',
  classes: [introduction],
});

const js = new Course({
  id: 3,
  title: 'JavaScript',
  classes: [introduction],
});

const react = new Course({
  id: 4,
  title: 'React',
  classes: [introduction],
});

const python = new Course({
  id: 5,
  title: 'Python',
  classes: [introduction],
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
const adonys = new Student({
  id: 1,
  name: 'Adonys',
  email: 'adonys@adonys.me',
  surname: 'Santos',
  age: 18,
  instagram: 'adonyssantos_',
  twitter: 'adonyssantos_',
  learningPaths: [webDev, blockChain],
});

const samuel = new Student({
  id: 2,
  name: 'Samuel',
  email: 'samuel@adonys.me',
  surname: 'Santos',
  age: 18,
  learningPaths: [webDev],
});

console.log(adonys);
console.log(samuel);
