class User {
  constructor(name, surname, age, courses) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.courses = courses;
  }

  addCourse(course) {
    this.courses.push(course);
  }

  updateCourse(course, index) {
    this.courses[index] = course;
  }

  removeCourse(course) {
    this.courses = this.courses.filter(c => c !== course);
  }
}

const user1 = new User('John', 'Smith', 25, ['html', 'css', 'js']);
console.log(user1);

user1.addCourse('python');
console.log(user1);
