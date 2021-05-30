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
            <a href="#" class="btn btn-danger">Leave</a>
          </div>
        </div>
      </div>
    </div>
    <hr/>
    <h4 class="d-flex justify-content-between align-items-center mb-3">
      <span class="text-primary">Up coming</span>
      <span class="badge bg-primary rounded-pill"></span>
    </h4>
    <div class="row gx-3 gy-3">
      <div class="col-sm" 
        v-for="(item) in trackingList"
        :key="item.studentId">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{item.courseName}}</h5>
            <p class="card-text">{{item.time}}</p>
            <a href="#" class="btn btn-primary" @click.prevent="checkIn(item.studentId)">Check In</a>
          </div>
        </div>
      </div>  
    </div>
  
  </div>
</template>
<script>

import trackingService from "../services/TrackingService";
import Modal from "../components/Modal.vue";
import Tracking from "../model/Tracking"
import checkInService from "../services/CheckInService";

export default {
  name : "Tracking",
  components: {
    Modal,
  },
  created() {

    this.getAllTracking();
    
  },
  data() {
    return {
      trackingObject: new Tracking(),
      trackingList: [],
 
    };
  },
  methods:{
        onDataChange(items) {
      let list = [];

      items.forEach((item) => {
        let data = item.val();
        if (data.trackingList == undefined) {
          data.trackingList = [];
        }
        list.push({
          studentId: item.key,
          allowTracking: data.allowTracking,
          parentId: data.parentId,
          studentUsername: data.studentUsername,
          checkInTime: data.checkInTime,
          checkOutTime: data.checkOutTime,
          courseId: data.courseId,
          courseName: data.courseName,
          locationCourse: data.locationCourse,
          time: data.time,
        });
      });

      this.trackingList = list;
    },

    getAllTracking() {
      trackingService.getAll().on("value", this.onDataChange);
    },

    checkIn(studentId) {
     this.studentId = studentId ;
     checkInService.mockUpdateCheckInTime(
            this.studentId,
            this.trackingObject,
          );
    },

    
  }

};


</script>
