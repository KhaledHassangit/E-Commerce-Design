import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ChoosePayMethod = () => {
    return (
        <div >
            <div className='pt-5 admin-content-text '>أختر طريقة الدفع</div>
            <div className='my-3 px-3 user-address-card'>
                <Row className='d-flex justify-content-between'>
                    <Col xs="12" className='my-4'>
                        <input type="radio" value="الدفع عن طريق الفيزا" className='mt-2'/>
                        <label className='mx-2'>الدفع عن طريق البطاقة الائتمانية</label>
                    </Col>
                </Row>

                <Row>
                    <Col xs="12" className='my-4'>
                        <input   type="radio" value="الدفع عن طريق الفيزا" className='mt-2'  />
                        <label className='mx-2'>الدفع عن طريق الاستلام</label>
                    </Col>
                </Row>
            </div>

            <Row>
                <Col xs="12" className="d-flex justify-content-end">
                    <div className="product-price d-inline   border">34000 جنية</div>
                    <div className="product-cart-add px-3 pt-2 d-inline me-2"> اتمام الشراء</div>
                </Col>
            </Row>
        </div>
    )
}

export default ChoosePayMethod
