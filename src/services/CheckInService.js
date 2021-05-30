import moment from "moment"

import TrackingServiceCheckIn from '../services/TrackingService'

class CheckInTime {

    mockUpdateCheckInTime(studentId, object) {
        object.checkInTime = moment(new Date()).format("DD/MM/YYYY hh:mm");
        TrackingServiceCheckIn.update(studentId, object);
    }
}

export default new CheckInTime();
