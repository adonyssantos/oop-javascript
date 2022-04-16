import Student from './Student.mjs';
import Comment from './Comment.mjs';

class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(course) {
    this.approvedCourses.push(course);
  }

  postComment(comentContent) {
    const comment = new Comment({
      content: comentContent,
      studentName: this.name,
      studentRole: 'teacher',
    });
    comment.post();
  }
}

export default TeacherStudent;
