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

export default Student;
