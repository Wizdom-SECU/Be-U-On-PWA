import moment from "moment"

export default class Tracking {
    studentId = "";
    allowTracking = "";
    parentId = "";
    studentUsername = "";
    checkInTime = "";
    checkOutTime = "";
    courseId ="";
    courseName = "";
    locationCourse = "";
    //time = moment(new Date()).format("DD/MM/YYYY hh:mm");
    
    get studentId() {
        return this.studentId;
    }
    set studentId(value) {
        this.studentId = value;
    }
    get allowTracking() {
        return this.allowTracking;
    }
    set allowTracking(value) {
        this.allowTracking = value;
    }
    get parentId() {
        return this.parentId;
    }
    set parentId(value) {
        this.parentId = value;
    }
    get studentUsername() {
        return this.studentUsername;
    }
    set studentUsername(value) {
        this.studentUsername = value;
    }
    get checkInTime() {
        return this.checkInTime;
    }
    set checkInTime(value) {
        this.checkInTime = value;
    }
    get checkOutTime() {
        return this.checkOutTime;
    }
    set checkOutTime(value) {
        this.checkOutTime = value;
    }
    get courseId() {
        return this.courseId;
    }
    set courseId(value) {
        this.courseId = value;
    }
    get courseName() {
        return this.courseName;
    }
    set courseName(value) {
        this.courseName = value;
    }
    get locationCourse() {
        return this.locationCourse;
    }
    set locationCourse(value) {
        this.locationCourse = value;
    }

}