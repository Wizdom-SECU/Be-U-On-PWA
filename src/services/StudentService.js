import firebase from "../firebase";

const db = firebase.ref("/student");

class CourseService {
  getAll() {
    return db;
  }

  create(tutorial) {
    return db.push(tutorial);
  }

  update(key, field, value) {
    return db.child(key).child(field).set(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new CourseService();