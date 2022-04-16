class Classes {
  constructor({ id, title, description }) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}

class Course {
  constructor({ id, title, classes = [] }) {
    this.id = id;
    this._title = title;
    this.classes = classes;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (value.length < 5) {
      throw new Error('Title must be at least 5 characters long');
    } else {
      this._title = value;
    }
  }
}

class LearningPath {
  constructor({ id, title, description, courses = [] }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.courses = courses;
  }
}

class Student {
  constructor({
    id,
    name,
    email,
    surname,
    age,
    instagram = null,
    facebook = null,
    twitter = null,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.surname = surname;
    this.age = age;
    this.socialMedia = {
      instagram,
      facebook,
      twitter,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

// Cursos
const html = new Course({
  id: 1,
  title: 'HTML',
});

const css = new Course({
  id: 2,
  title: 'CSS',
});

const js = new Course({
  id: 3,
  title: 'JavaScript',
});

const react = new Course({
  id: 4,
  title: 'React',
});

const python = new Course({
  id: 5,
  title: 'Python',
});

const web3 = new Course({
  id: 6,
  title: 'Web3',
});

const bitcoinCore = new Course({
  id: 7,
  title: 'Bitcoin Core',
});

const blockchain = new Course({
  id: 8,
  title: 'Blockchain',
});

const eth = new Course({
  id: 9,
  title: 'Ethereum',
});

const solidity = new Course({
  id: 10,
  title: 'Solidity',
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
