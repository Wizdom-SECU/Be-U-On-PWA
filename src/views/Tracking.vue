<template>
  <div class="container px-3 py-4" id="tracking">
    <h4 class="d-flex justify-content-between align-items-center mb-3">
      <span class="text-primary">Now showing</span>
    </h4>

    <div class="row gx-3 gy-3">
      <div class="col-sm">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Course A</h5>
            <p class="card-text">Tutor Prakit</p>
            <a @click="checkout" class="btn btn-danger">Leave</a>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <h4 class="d-flex justify-content-between align-items-center mb-3">
      <span class="text-primary">Up coming</span>
      <span class="badge bg-primary rounded-pill"></span>
    </h4>
    <div class="row gx-3 gy-3">
      <div class="col-sm" v-for="item in studentList.courseList" :key="item.studentId">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ item.courseName }}</h5>
            <p class="card-text">{{ item.time }}</p>
            <a class="btn btn-primary" @click="checkIn(item.studentId)"
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
import StudentService from '../services/StudentService';
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
      studyingList : [],
      comingList : [],
      studentUsername : "test_student_username_02"
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

      this.studentList = list;
    },

    getAllStudent() {
      studentService.getAll().on("value", this.onDataChange);
      this.getCourseList();
    },
    getCourseList(){
      this.studentList = this.studentList.filter(item => item.studentUsername == this.studentUsername);
    },
    checkIn(studentId) {
      this.studentId = studentId;
      checkInService.mockUpdateCheckInTime(this.studentId, this.trackingObject);
    },
    insertNewStudent(){
      StudentService
        .create(new Student("test_student_id0002" , "test_student_username_02"))
        .then((res) => {
        })
        .catch((e) => {
          console.log(e);
        });
    },
    filterList(){

    },
    checkout(){

    }
  },
};
</script>
