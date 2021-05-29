import CourseService from '../services/CourseService'

class PaymentService {

    mockUpdatePaymentStatus(courseId, object) {
        object.paymentStatus = 'payment success';
        CourseService.update(courseId, object);
    }
}

export default new PaymentService();