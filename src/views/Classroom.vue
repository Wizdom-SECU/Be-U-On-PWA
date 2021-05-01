<template>
  <div class="container px-3 py-4">
    <h4 class="d-flex justify-content-between align-items-center mb-3">
      <span class="text-primary">Course List</span>
    </h4>
    <div>Category:</div>
    <div class="nav-scroller py-1 mb-2">
      <nav class="nav d-flex justify-content-between">
        <a class="p-2 link-secondary" href="#">All</a>
        <a class="p-2 link-secondary" href="#">Physics</a>
        <a class="p-2 link-secondary" href="#">Chemistry</a>
        <a class="p-2 link-secondary" href="#">Biology</a>
        <a class="p-2 link-secondary" href="#">Physical Education</a>
        <a class="p-2 link-secondary" href="#">Arts</a>
      </nav>
    </div>
    <div class="row gx-3 gy-3">
      <div class="col-sm">
        <div class="card">
          <img src="../assets/3808949.jpg" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">Course A</h5>
            <p class="card-text">Tutor Prakit</p>
            <a
              class="btn btn-success"
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
          <img src="../assets/3808949.jpg" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">Course B</h5>
            <p class="card-text">Tutor Annop</p>
            <a class="btn btn-success" data-bs-toggle="offcanvas">Enroll</a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="offcanvas offcanvas-bottom show"
      tabindex="-1"
      id="offcanvas"
      aria-labelledby="offcanvasLabel"
      data-bs-backdrop="false"
      data-bs-scroll="true"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        Content for the offcanvas goes here. You can place just about any
        Bootstrap component or custom elements here.
      </div>
    </div>
    <i class="bi bi-plus-circle-fill"></i>
  </div>
</template>

<script>
export default {};
</script>
<style>
.bi {
  color: rgba(255, 99, 120, 1);
  size: 500px;
  margin-left: 280px;
  margin-right: 30px;
  font-size: 50px;
}
</style>
