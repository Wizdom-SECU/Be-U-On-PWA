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
      <div class="col-sm">
        <div class="card">
          <img src="../assets/3808949.jpg" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Chemistry</h5>
            <p class="card-text">Tutor Prakit</p>
            <a
              class="btn btn-lg btn-primary"
              data-bs-toggle="offcanvas"
              href="#offcanvasBottom"
              aria-controls="offcanvasBottom"
              >Enroll</a
            >
          </div>
        </div>
      </div>
      <div class="col-sm">
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
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
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
