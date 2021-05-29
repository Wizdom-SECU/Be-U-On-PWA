export default class Student {
    studentId = "";
    paymentStatus = "waiting payment";
    allowTracking = false;
    parentId = "";
    checkInTime = "";
    checkOutTime = "";
    studentUsername = "";

    constructor(studentId , studentUsername){
        this.studentId = studentId;
        this.studentUsername = studentUsername;
    }

    get studentId() {
        return this.studentId;
    }
    set studentId(value) {
        this.studentId = value;
    }
    get paymentStatus() {
        return this.paymentStatus;
    }
    set paymentStatus(value) {
        this.paymentStatus = value;
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
    get studentUsername() {
        return this.studentUsername;
    }
    set studentUsername(value) {
        this.studentUsername = value;
    }
}