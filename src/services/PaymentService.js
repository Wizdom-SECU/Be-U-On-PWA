import CourseService from '../services/CourseService'

class PaymentService {

    mockUpdatePaymentStatus(courseId){
        let object = {paymentStatus : 'payment success'}
        CourseService.update(courseId , object);

        console.log("update status success")
    }
}

export default new PaymentService();