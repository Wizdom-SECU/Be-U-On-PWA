<template>
  <div class="console">
    <router-view></router-view>
    <nav class="navbar fixed-bottom navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
      <div class="container-fluid">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav nav-fill w-100 fs-5">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Classroom' }"><i class="bi-book"></i></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Tracking' }"><i class="bi-calendar4-event"></i></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Profile' }"><i class="bi-person-circle"></i></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.console {
  width: 100%;
  padding-bottom: 62px;
}
.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}
.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
</style>