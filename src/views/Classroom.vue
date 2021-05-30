<template>
  <div id="coursePage" class="container px-3 py-4">
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
      </nav>
    </div>
    <div id="app">
      <button
        id="createCourseBtn"
        class="bi bi-plus-circle-fill btn btn-outline-light"
        type="button"
        @click="showModal"
      ></button>

      <Modal v-show="isModalVisible" @close="closeModal" @createCourseDetail="getDataFromModal($event)">
        <template v-slot:header> This is a new modal header. </template>

        <template v-slot:body> This is a new modal body. </template>

        <template v-slot:footer> This is a new modal footer. </template>
      </Modal>
    </div>
    <div class="row gx-3 gy-3">
      <div class="col-sm" v-for="item in courseList" :key="item.courseTitle">
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
                v-on:click="insertToDatabase"
                :disabled="item.studentList.length > maxStudent"
              >
                Enroll
              </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import courseService from "../services/CourseService";
import paymentService from "../services/PaymentService";
import Modal from "../components/Modal.vue";

export default {
  name: "Classroom",
  components: {
    Modal,
  },
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
      this.courseObject.studentList.push(this.studentId);
    },
    insertToDatabase() {
      this.enrollCourse();
      courseService
        .create(this.courseObject)
        .then((res) => {
          paymentService.mockUpdatePaymentStatus(res.getKey());
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
    getDataFromModal(object){
      this.closeModal();
      this.courseObject = object;
      this.insertToDatabase(this.courseObject);
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

.coursePage{
  position: absolute;
}
</style>