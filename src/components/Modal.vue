<template>
  <div class="container px-3 py-4">
    <transition name="modal-fade">
      <div class="modal-backdrop">
        <div
          class="modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <header class="modal-header" id="modalTitle">
            <button
              class="bi bi-arrow-left-circle btn-close"
              type="button"
              @click="close"
              aria-label="Close modal"
            ></button>
            <slot name="">
              <div class="container px-3 py-4">
                <img
                  src="../assets/standing.png"
                  class="card-img-top"
                  height="100"
                />
                <h2
                  class="card-text"
                  style="
                    color: darkgreen;
                    font-size: 24px;
                    font-wieght: bolder;
                    text-align: center;
                    font-family: Sarabun, sans-serif;
                  "
                >
                  Create your course
                </h2>
              </div>
            </slot>
          </header>

          <section class="modal-body" id="modalDescription">
            <form class="row gy-2 gx-3 align-items-center">
              <div class="col-12">
                <label for="courseTitle" class="form-label header"
                  >Course Title</label
                >
                <input
                  :readonly="isEnrollCourse()"
                  type="text"
                  class="form-control"
                  aria-label="courseTitle"
                  v-model="courseObject.courseTitle"
                />
                <span class="error" v-if="msg.courseTitle">{{
                  msg.courseTitle
                }}</span>
              </div>
              <div class="col-12">
                <label for="courseDesc" class="form-label header"
                  >Course Description</label
                >
                <input
                  :readonly="isEnrollCourse()"
                  type="text"
                  class="form-control"
                  aria-label="courseDesc"
                  v-model="courseObject.courseDesc"
                />
              </div>
              <div class="col-12">
                <label for="teachBy" class="form-label header">Teach by</label>
                <input
                  :readonly="isEnrollCourse()"
                  type="text"
                  class="form-control"
                  aria-label="teachBy"
                  v-model="courseObject.teachBy"
                />
                <span class="error" v-if="msg.teachBy">{{ msg.teachBy }}</span>
              </div>
              <div class="col-auto">
                <label for="time" class="form-label header">Time</label>
                <input
                  :readonly="isEnrollCourse()"
                  type="datetime-local"
                  class="form-control"
                  v-model="courseObject.time"
                />
                <span class="error" v-if="msg.time">{{ msg.time }}</span>
              </div>
              <div class="col-auto">
                <label for="price" class="form-label header">Price/hour</label>
                <input
                  :readonly="isEnrollCourse()"
                  type="text"
                  class="form-control"
                  v-model="courseObject.price"
                />
                <span class="error" v-if="msg.price">{{ msg.price }}</span>
              </div>
              <div class="col-auto">
                <label for="price" class="form-label header">Hours</label>
                <input
                  :readonly="isEnrollCourse()"
                  type="text"
                  class="form-control"
                  v-model="courseObject.hours"
                />
                <span class="error" v-if="msg.hours">{{ msg.hours }}</span>
              </div>
              <div class="col-12">
                <input
                  :disabled="isEnrollCourse()"
                  class="form-check-input"
                  type="radio"
                  value="onsite"
                  id="onsite"
                  style="padding: 5px; margin: 10px"
                  v-model="courseObject.courseType"
                />
                <label
                  class="form-check-label"
                  for="onsite"
                  style="padding: 5px"
                >
                  Onsite
                </label>
                <input
                  :disabled="isEnrollCourse()"
                  class="form-check-input"
                  type="radio"
                  value="online"
                  id="online"
                  style="padding: 5px; margin: 10px"
                  v-model="courseObject.courseType"
                />
                <label
                  class="form-check-label"
                  for="online"
                  style="padding: 5px"
                >
                  Online
                </label>
                <div class="col-12" v-if="courseObject.courseType == 'onsite'">
                  <label for="location" class="form-label header"
                    >Location</label
                  >
                  <input
                    :readonly="isEnrollCourse()"
                    type="text"
                    class="form-control"
                    aria-label="location"
                    v-model="courseObject.location"
                  />
                  <span class="error" v-if="msg.location">{{
                    msg.location
                  }}</span>
                </div>
                <div class="col-12" v-if="courseObject.courseType == 'online'">
                  <label for="zoomlink" class="form-label header"
                    >Link to Zoom</label
                  >
                  <input
                    :readonly="isEnrollCourse()"
                    type="text"
                    class="form-control"
                    aria-label="zoomlink"
                    v-model="courseObject.zoomLink"
                  />
                  <span class="error" v-if="msg.zoomLink">{{
                    msg.zoomLink
                  }}</span>
                </div>

                <div
                  class="col-12 header"
                  v-if="courseObject.courseId != ''"
                  style="margin-top: 10px"
                >
                  <label for="studentName" class="form-label"
                    >Student in course</label
                  >
                  <div
                    v-for="item in courseObject.studentList"
                    :key="item.studentId"
                  >
                    <input
                      style="margin-top: 10px"
                      :readonly="isEnrollCourse()"
                      type="text"
                      class="form-control"
                      aria-label="studentName"
                      v-model="item.studentUsername"
                    />
                  </div>
                </div>
              </div>
            </form>
          </section>

          <footer class="modal-footer">
            <button
              v-if="!courseObject.courseId && displayName == 'Tutor'"
              type="submit"
              id="saveBtn"
              class="btn btn-success"
              @click="createCourseDetail()"
              aria-label="Close modal"
            >
              Save
            </button>

            <button
              v-if="courseObject.courseId && displayName == 'Student' "
              type="submit"
              id="saveBtn"
              class="btn btn-success"
              @click="enrollCourse()"
              aria-label="Close modal"
              :disabled="courseObject.studentList.length >= maxStudent"
            >
              Enroll
            </button>
          </footer>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import courseService from "../services/CourseService";
import studentService from "../services/StudentService";
import Student from "../model/Student";
import {auth} from '../firebase'

export default {
  name: "Modal",
  props: ["courseSelected"],
  created() {
    const user = auth.currentUser;
    const { displayName } = user;
    this.displayName = displayName;
  },
  data() {
    return {
      courseObject: this.courseSelected,
      maxStudent: 5,
      msg: {},
      isValidateFail: true,
      displayName: "",
    };
  },
  watch: {
    courseSelected: function () {
      this.courseObject = this.courseSelected;
    },
  },
  methods: {
    createCourseDetail() {
      this.courseObject.totalPrice =
        this.courseObject.price * this.courseObject.hours;
      this.courseObject.cost = 0.1 * this.courseObject.totalPrice;
      this.validate();
      if (!this.isEmpty(this.msg)) {
        this.$swal("Please fil in for required data.");
      } else {
        this.$emit("createCourseDetail", this.courseObject);
      }
    },
    close() {
      this.$emit("close");
    },
    isEnrollCourse() {
      if (this.courseObject.courseId) {
        return true;
      }

      return false;
    },
    enrollCourse() {
      let studentObject = new Student("-Max3kJJHMNKAipQMU8D", "testUsername");
      let list;
      this.courseObject.studentList.push(studentObject);
      courseService.update(this.courseObject.courseId, this.courseObject);
      if (studentObject.courseList == undefined) {
        list = [];
      } else {
        list = studentObject.courseList;
      }
      console.log(list);
      list.push(this.courseObject);
      studentService.update(studentObject.studentId, "courseList", list);
      this.$swal("Enroll Success");
      this.close();
    },
    validate() {
      this.msg = {};
      if (!this.courseObject.courseTitle) {
        this.msg.courseTitle = "Course Title is required.";
      }

      if (!this.courseObject.teachBy) {
        this.msg.teachBy = "Teach By is required.";
      }

      if (!this.courseObject.time) {
        this.msg.time = "Time is required.";
      }

      if (!this.courseObject.price) {
        this.msg.price = "Price is required.";
      }

      if (!this.courseObject.hours) {
        this.msg.hours = "Hours is required.";
      }

      if (this.courseObject.courseType == "onsite") {
        if (!this.courseObject.location) {
          this.msg.location = "Location is required.";
        }
      } else {
        if (!this.courseObject.zoomLink) {
          this.msg.zoomLink = "Zoom Link is required.";
        }
      }

      console.log(this.msg);
    },
    isEmpty(obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) return false;
      }
      return true;
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Sarabun:wght@100&display=swap");

button.bi-arrow-left-circle {
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  font-size: 30px;
  cursor: pointer;
  font-weight: bold;
  background: transparent;
}

h2 {
  flex-direction: column;
}

label,
input {
  font-family: "Sarabun", sans-serif;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 5px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.modal-body {
  position: relative;
  padding: 10px 10px;
}

/* .btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
} */

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0s ease;
}

#saveBtn {
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
}

.card-img-top {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
}

.header {
  font-weight: bolder;
  font-size: 20px;
  color: darkgreen;
}

.error {
  font-weight: bolder;
  color: red;
}
</style>