<template>
  <div class="container px-3 py-4">
    <h4 class="d-flex justify-content-between align-items-center mb-3">
      <span class="text-primary">Course List</span>
    </h4>
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
          <img src="../assets/3808949.jpg" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Science</h5>
            <p class="card-text">Tutor Annop</p>
            <a class="btn btn-success" data-bs-toggle="offcanvas">Enroll</a>
          </div>
        </div>
      </div>
    </div>
    
    <div
      class="bi bi-plus-circle-fill"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasBottom"
      aria-controls="offcanvasBottom"
    ></div>
    <div
      class="offcanvas offcanvas-bottom"
      tabindex="-1"
      id="offcanvasBottom"
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
    <!-- <div
      class="offcanvas offcanvas-bottom"
      tabindex="-1"
      id="offcanvasBottom"
      aria-labelledby="offcanvasBottomLabel"
      data-bs-backdrop="true"
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
    </div> -->
  </div>
</template>

<script>
export default {};
</script>
<style>
.bi {
  color: rgba(255, 99, 120, 1);
  size: 500px;
  margin-left: 240px;
  margin-right: 30px;
  font-size: 50px;
}

.p-1 {
  margin: 1px;
}
</style>
