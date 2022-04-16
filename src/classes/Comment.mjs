class Comment {
  constructor({ id, content, studentName, studentRole = 'student' }) {
    this.id = id;
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  post() {
    console.log(
      `${this.studentName} commented: ${this.content} with the role ${this.studentRole} - Likes: ${this.likes}`,
    );
  }
}

export default Comment;
