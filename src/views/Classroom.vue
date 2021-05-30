<template>
  <div id="coursePage" class="container px-3 py-4">
    <h4 class="d-flex justify-content-between align-items-center mb-3">
      <span class="text-primary">Course List</span>
    </h4>
    <form class="d-flex">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search By Course Title"
        aria-label="Search"
        v-model="searchString"
        @keyup="searchByTitle()"
      />
    </form>
    <div id="app">
      <button v-if="displayName == 'Tutor'"
        id="createCourseBtn"
        class="bi bi-plus-circle-fill btn btn-outline-light"
        type="button"
        @click="createCourse"
      ></button>

      <Modal
        v-show="isModalVisible"
        @close="closeModal"
        @createCourseDetail="getDataFromModal($event)"
        :courseSelected="courseObject"
      >
        <template v-slot:header> This is a new modal header. </template>

        <template v-slot:body> This is a new modal body. </template>

        <template v-slot:footer> This is a new modal footer. </template>
      </Modal>
    </div>
    <div class="row gx-3 gy-3">
      <div style="margin-top : 20px"
        class="col-sm"
        v-for="(item, index) in courseList"
        :key="item.courseTitle"
      >
        <div class="card">
          <img src="../assets/3808949.jpg" class="card-img-top" />
          <div class="card-body">
            <div class="row gx-3 gy-3">
              <div class="col-6" style="align: left">
                <p
                  class="card-title"
                  style="color: blue; font-size: 24px; font-weight: bold"
                >
                  {{ item.courseTitle }}
                </p>
                <p class="card-text">{{ item.courseDesc }}</p>
                <p
                  class="card-text"
                  v-bind:style="
                    item.courseType == 'onsite'
                      ? 'color : orange'
                      : 'color : green'
                  "
                >
                  {{ item.courseType }}
                </p>
              </div>

              <div class="col-6" style="text-align: right">
                <p class="card-text">by : {{ item.teachBy }}</p>
                <p class="card-text">{{ item.price }} ฿/ Hours</p>
                <p
                  class="card-text"
                  v-bind:style="
                    item.studentList.length < maxStudent
                      ? 'color : green'
                      : 'color : gray'
                  "
                >
                  {{ item.studentList.length }} / {{ maxStudent }}
                </p>
              </div>
            </div>
            <button
              class="btn btn-success"
              data-bs-toggle="offcanvas"
              id="enrollBtn"
              style="margin-top: 15px"
              v-on:click="viewCourse(index)"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import courseService from "../services/CourseService";
import paymentService from "../services/PaymentService";
import Modal from "../components/Modal.vue";
import Course from "../model/Course"
import {auth} from '../firebase'

export default {
  name: "Classroom",
  components: {
    Modal,
  },
  created() {
    const user = auth.currentUser
    const {displayName} = user
    this.displayName = displayName;
    this.getAllCourse();
  },
  data() {
    return {
      courseObject: new Course(),
      courseList: [],
      isModalVisible: false,
      maxStudent: 5,
      searchString : "",
      displayName: '',
    };
  },
  methods: {
    onDataChange(items) {
      let list = [];

      items.forEach((item) => {
        let data = item.val();
        if (data.studentList == undefined) {
          data.studentList = [];
        }
        list.push({
          courseId: item.key,
          courseTitle: data.courseTitle,
          courseDesc: data.courseDesc,
          teachBy: data.teachBy,
          price: data.price,
          location: data.location,
          time: data.time,
          courseType: data.courseType,
          paymentStatus: data.paymentStatus,
          studentList: data.studentList,
          cost: data.cost,
          hours: data.hours,
          zoomLink: data.zoomLink,
        });
      });

      this.courseList = list;
    },
    viewCourse(index) {
      this.courseObject = this.courseList[index];
      this.showModal();
    },
    insertToDatabase() {
      courseService
        .create(this.courseObject)
        .then((res) => {
          paymentService.mockUpdatePaymentStatus(
            res.getKey(),
            this.courseObject
          );
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getAllCourse() {
      courseService.getAll().on("value", this.onDataChange);
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    getDataFromModal(object) {
      this.closeModal();
      this.courseObject = object;
      this.insertToDatabase(this.courseObject);
    },
    createCourse() {
      this.courseObject = new Course();
      this.showModal();
    },
    searchByTitle(){
      this.courseList = this.courseList.filter(item => item.courseTitle.toLowerCase().includes(this.searchString.toLowerCase()));
      if(this.searchString == ''){
        this.getAllCourse();
      }
    }
  },
};
</script>

<style>
button.bi-plus-circle-fill {
  color: rgba(255, 99, 120, 1);
  size: 500px;
  font-size: 50px;
}

.p-1 {
  margin: 1px;
}

/* #app {
  display: flex;
  justify-content: flex-end;
} */

.coursePage {
  position: absolute;
}
</style>