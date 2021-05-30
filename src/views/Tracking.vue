<template>
  <div class="container px-3 py-4" id="tracking">
    <h4
      class="d-flex justify-content-between align-items-center mb-3"
      v-if="studyingList.length > 0"
    >
      <span class="text-primary">Now showing</span>
    </h4>

    <div class="row gx-3 gy-3">
      <div class="col-sm" v-for="item in studyingList" :key="item.courseId">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ item.courseName }}</h5>
            <p class="card-text">{{ item.time }}</p>
            <a class="btn btn-primary" @click="checkOut(item.studentId)"
              >Check Out</a
            >
          </div>
        </div>
      </div>
    </div>
    <hr v-if="studyingList.length > 0" />
    <h4 class="d-flex justify-content-between align-items-center mb-3">
      <span class="text-primary">Up coming</span>
      <span class="badge bg-primary rounded-pill"></span>
    </h4>
    <div class="row gx-3 gy-3">
      <div class="col-sm" v-for="item in comingList" :key="item.courseId">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ item.courseTitle }}</h5>
            <p class="card-text">By : {{ item.teachBy }}</p>
            <p class="card-text">{{formatDate(item.time)}}</p>
            <a class="btn btn-primary" @click="checkIn(item.courseId)"
              >Check In</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import studentService from "../services/StudentService";
import checkInService from "../services/CheckInService";
import Student from "../model/Student";
import StudentService from "../services/StudentService";
import moment from "moment"

export default {
  name: "Tracking",
  components: {},
  created() {
    this.getAllStudent();
  },
  data() {
    return {
      studentObject: new Student(),
      studentList: [],
      studentListTmp: [],
      studyingList: [],
      comingList: [],
      studentUsername: "test_student_username_02",
    };
  },
  methods: {
    onDataChange(items) {
      let list = [];

      items.forEach((item) => {
        let data = item.val();
        list.push({
          studentId: item.key,
          paymentStatus: data.paymentStatus,
          allowTracking: data.allowTracking,
          parentId: data.parentId,
          checkInTime: data.checkInTime,
          location: data.location,
          checkOutTime: data.checkOutTime,
          studentUsername: data.studentUsername,
          courseList: data.courseList,
          locationTracking: data.locationTracking,
        });
      });

      this.studentListTmp = list;

      this.getCourseList();
    },

    getAllStudent() {
      studentService.getAll().on("value", this.onDataChange);
    },
    getCourseList() {
      this.studentList = this.studentListTmp.filter(
        (item) => item.studentUsername == this.studentUsername
      );
      this.filterList();
    },
    insertNewStudent() {
      StudentService.create(
        new Student("test_student_id0002", "test_student_username_02")
      )
        .then((res) => {})
        .catch((e) => {
          console.log(e);
        });
    },
    filterList() {
      this.studentList[0].courseList.forEach((item) => {
        if (item.checkInTime == undefined) {
          this.comingList.push(item);
        } else {
          this.studyingList.push(item);
        }
      });
    },
     checkIn(courseId) {
      let studentId = this.studentList[0].studentId;
      this.studentList[0].courseList.forEach(item => {
        if(item.courseId == courseId){
          item.checkInTime = moment(new Date()).format("DD/MM/YYYY HH:mm");
        }
      })
      checkInService.mockUpdateCheckInTime(studentId , this.studentList[0].courseList);
    },
    checkout() {
      this.studentId = studentId;
      checkInService.mockUpdateCheckInTime(this.studentId, this.trackingObject);
    },
    formatDate(dateValue) {
      return moment(String(dateValue)).format("DD/MM/YYYY HH:mm");
    },
  },
};
</script>
