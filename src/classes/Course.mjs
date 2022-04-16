class Course {
  constructor({ id, title, classes = [], isFree = false, isBasic = true }) {
    this.id = id;
    this._title = title;
    this.classes = classes;
    this.isFree = isFree;
    this.isBasic = isBasic;
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

export default Course;
