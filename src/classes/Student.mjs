import Comment from './Comment.mjs';

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

  postComment(comentContent) {
    const comment = new Comment({
      content: comentContent,
      studentName: this.name,
    });
    comment.post();
  }
}

export default Student;
