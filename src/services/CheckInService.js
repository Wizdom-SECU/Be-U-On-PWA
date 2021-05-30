import moment from "moment"
import StudentService from '../services/StudentService'

class CheckInService {

    mockUpdateCheckInTime(studentId , value) {
        StudentService.update(studentId, 'courseList' , value);
    }

    mockUpdateCheckOutTime(studentId) {
        StudentService.update(studentId, 'checkOutTime' , moment(new Date()).format("DD/MM/YYYY hh:mm"));
    }
}

export default new CheckInService();
