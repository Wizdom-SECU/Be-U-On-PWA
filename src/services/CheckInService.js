import moment from "moment"
import StudentService from '../services/StudentService'

class CheckInService {

    mockUpdateCheckInTime(studentId, object) {
        object.checkInTime = moment(new Date()).format("DD/MM/YYYY hh:mm");
        StudentService.update(studentId, object);
    }
}

export default new CheckInService();
