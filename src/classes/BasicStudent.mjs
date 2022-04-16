import Student from './Student.mjs';

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(course) {
    if (course.isBasic || course.isFree) {
      this.approvedCourses.push(course);
    } else {
      console.warn(`${this.name} can't approve ${course.name}`);
    }
  }
}

export default BasicStudent;
