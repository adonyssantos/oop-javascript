import Student from './Student.mjs';

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(course) {
    this.approvedCourses.push(course);
  }
}

export default ExpertStudent;
