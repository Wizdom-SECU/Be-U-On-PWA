<template>
  <div class="container px-3 py-4">
    <h4 class="d-flex justify-content-between align-items-center mb-3">
      <span class="text-primary">Course List</span>
    </h4>
    <form class="d-flex">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </form>
    <div>Category:</div>
    <div class="nav-scroller py-1 mb-2">
      <nav class="nav d-flex justify-content-between">
        <span class="p-1 link-secondary rounded-pill bg-primary text-light"
          >#All</span
        >
        <span class="p-1 link-secondary rounded-pill bg-primary text-light"
          >#Physics</span
        >
        <span class="p-1 link-secondary rounded-pill bg-primary text-light"
          >#Chemistry</span
        >
        <span class="p-1 link-secondary rounded-pill bg-primary text-light"
          >#Biology</span
        >
        <span class="p-1 link-secondary rounded-pill bg-primary text-light"
          >#Physical Education</span
        >
        <!-- <a class="p-2 link-secondary" href="#">Arts</a> -->
      </nav>
    </div>
      <div class="row gx-3 gy-3">
        <div class="col-sm" v-for="item in courseList" :key="item.courseTitle">
          <div class="card">
            <img src="../assets/3808949.jpg" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{{ item.courseTitle }}</h5>
              <p class="card-text">{{ item.teachBy }}</p>
              <button
                class="btn btn-success"
                data-bs-toggle="offcanvas"
                aria-controls="offcanvasBottom"
                id="enrollBtn"
                v-on:click="insertToDatabase"
              >
                Enroll
              </button>
            </div>
          </div>
        </div>
        <!-- <div class="col-sm">
        <div class="card">
          <img src="../assets/3808949.jpg" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Science</h5>
            <p class="card-text">Tutor Annop</p>
            <a class="btn btn-lg btn-primary" data-bs-toggle="offcanvas"
              >Enroll</a
            >
          </div>
        </div>
      </div> -->
      </div>
    </div>

    <div id="app">
      <button
        class="bi bi-plus-circle-fill btn btn-outline-light"
        type="button"
        @click="showModal"
      ></button>

      <Modal v-show="isModalVisible" @close="closeModal">
        <template v-slot:header> This is a new modal header. </template>

        <template v-slot:body> This is a new modal body. </template>

        <template v-slot:footer> This is a new modal footer. </template>
      </Modal>
    <button
      class="bi bi-plus-circle-fill btn btn-outline-light"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasBottom"
      aria-controls="offcanvasBottom"
    ></button>

    <div
      class="offcanvas offcanvas-bottom"
      :class="showMenu ? 'show' : ''"
      tabindex="-1"
      id="offcanvasBottom"
      :style="{ visibility: showMenu ? 'visible' : 'hidden' }"
      aria-labelledby="offcanvasBottomLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasBottomLabel">
          Offcanvas bottom
        </h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body small">...</div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import courseService from "../services/CourseService";
import Modal from "../components/Modal.vue";

export default {
  name: "Classroom",
  created() {
    this.getAllCourse();
  },
  data() {
    return {
      courseObject: {
        courseTitle: "",
        courseDesc: "",
        teachBy: "",
        price: 0,
        location: "",
        time: moment(new Date()).format("DD/MM/YYYY hh:mm"),
        courseType: "onsite",
        paymentStatus: "waiting payment",
        studentList: [],
        cost: 500,
        zoomLink: "",
      },
      studentId: "test1234",
      maxStudent: 5,
      courseList: [],
	  isModalVisible: false,
    };
  },
  methods: {
    onDataChange(items) {
      let list = [];

      items.forEach((item) => {
        let data = item.val();
        list.push({
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
          zoomLink: data.zoomLink,
        });
      });

      this.courseList = list;
      console.log(this.courseList);
    },
    enrollCourse() {
      if (this.courseObject.studentList.length > this.maxStudent) {
        document.getElementById("enrollBtn").setAttribute("disabled", true);
      }
      this.courseObject.studentList.push(this.studentId);
      console.log(this.courseObject.studentList);
    },
    insertToDatabase() {
      this.enrollCourse();
      courseService
        .create(this.courseObject)
        .then(() => {
          console.log("Created new item successfully!");
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
};
</script>

<style>
button.bi-plus-circle-fill {
  color: rgba(255, 99, 120, 1);
  size: 500px;
  margin-left: 200px;
  margin-right: 50px;
  font-size: 50px;
}

.p-1 {
  margin: 1px;
}
</style>
