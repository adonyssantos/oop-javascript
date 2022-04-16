class LearningPath {
  constructor({ id, title, description, courses = [] }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.courses = courses;
  }
}

export default LearningPath;
