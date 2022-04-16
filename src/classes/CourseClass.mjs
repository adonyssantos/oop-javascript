const videoPlay = videoId => {
  const videoUrl = `https://www.adonys.me/class/${videoId}`;
  console.log(`videoPlay: ${videoUrl}`);
};

const videoStop = videoId => {
  const videoUrl = `https://www.adonys.me/class/${videoId}`;
  console.log(`videoStop: ${videoUrl}`);
};

class CourseClass {
  constructor({ id, title, videoId }) {
    this.id = id;
    this.title = title;
    this.videoId = videoId;
  }

  play() {
    videoPlay(this.videoId);
  }

  stop() {
    videoStop(this.videoId);
  }
}

export default CourseClass;
