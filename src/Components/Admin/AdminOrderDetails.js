import React from 'react'
import CartItem from '../Cart/CartItem'
import { Col, Row } from 'react-bootstrap'

const AdminOrderDetails = () => {
    return (
        <div>
            <div className='admin-content-text my-2'>تفاصيل الطلب رقم #1124</div>
            <CartItem/>
            <Row className="justify-content-center mt-4 user-data">
                <Col xs="12" className=" d-flex">
                    <div className="admin-content-text py-2">تفاصيل العميل</div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Cairo",
                            fontSize: "16px",
                        }}>
                        الاسم:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Cairo",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        أحمد عبدالله
                    </div>
                </Col>

                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Cairo",
                            fontSize: "16px",
                        }}>
                        رقم الهاتف:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Cairo",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        01211559176
                    </div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Cairo",
                            fontSize: "16px",
                        }}>
                        الايميل:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        ahmed@gmail.com
                    </div>
                </Col>
                <div className=" d-inline px-4 border text-center pt-2">
                    المجموع 40000 جنيه
                </div>
                <div className="d-flex mt-2 justify-content-center">
                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-1  text-center px-2 w-50">
                        <option value="val">حالة الطلب</option>
                        <option value="val2">قيد التنفيذ</option>
                        <option value="val2">تم الانتهاء</option>
                        <option value="val2">الغاء</option>
                    </select>
                    <button className="btn-a px-3 d-inline mx-2 ">حفظ </button>
                </div>
            </Row>            
        </div>
    )
}

export default AdminOrderDetails
