import moment from "moment"
import Student from "../model/Student"

export default class Course {
    courseId = "";
    courseTitle = "";
    courseDesc = "";
    teachBy = "";
    price = 0;
    location = "";
    time = moment(new Date()).format("DD/MM/YYYY hh=mm");
    courseType = "onsite";
    paymentStatus = "waiting payment";
    studentList = [];
    cost = 0;
    hours = 0;
    zoomLink = "";
    
    get courseId() {
        return this.courseId;
    }
    set courseId(value) {
        this.courseId = value;
    }
    get courseTitle() {
        return this.courseTitle;
    }
    set courseTitle(value) {
        this.courseTitle = value;
    }
    get courseDesc() {
        return this.courseDesc;
    }
    set courseDesc(value) {
        this.courseDesc = value;
    }
    get teachBy() {
        return this.teachBy;
    }
    set teachBy(value) {
        this.teachBy = value;
    }
    get price() {
        return this.price;
    }
    set price(value) {
        this.price = value;
    }
    get location() {
        return this.location;
    }
    set location(value) {
        this.location = value;
    }
    get time() {
        return this.time;
    }
    set time(value) {
        this.time = value;
    }
    get courseType() {
        return this.courseType;
    }
    set courseType(value) {
        this.courseType = value;
    }
    get paymentStatus() {
        return this.paymentStatus;
    }
    set paymentStatus(value) {
        this.paymentStatus = value;
    }
    get studentList() {
        return this.studentList;
    }
    set studentList(value) {
        this.studentList = value;
    }
    get cost() {
        return this.cost;
    }
    set cost(value) {
        this.cost = value;
    }
    get hours() {
        return this.hours;
    }
    set hours(value) {
        this.hours = value;
    }
    get zoomLink() {
        return this.zoomLink;
    }
    set zoomLink(value) {
        this.zoomLink = value;
    }
}