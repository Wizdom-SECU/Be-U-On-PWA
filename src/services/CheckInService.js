import moment from "moment"
import StudentService from '../services/StudentService'

class CheckInService {

    mockUpdateTrackingTime(studentId , value) {
        StudentService.update(studentId, 'courseList' , value);
    }
}

export default new CheckInService();
