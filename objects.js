const user = {
  name: 'John',
  surname: 'Smith',
  age: 25,
  courses: ['html', 'css', 'js'],

  addCourse(course) {
    this.courses.push(course);
  },
  updateCourse(course, index) {
    this.courses[index] = course;
  },
  removeCourse(course) {
    this.courses = this.courses.filter(c => c !== course);
  },
};

console.log(user);

user.addCourse('python');
console.log(user);
