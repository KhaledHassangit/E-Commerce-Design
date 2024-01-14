import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const AdminSubCategory = () => {
    return (
        <div>
        <Row className='justify-content-start'>
            <div className='admin-content-text pb-4'>أضف تصنيف فرعي جديد</div>
            <Col sm="8">
                <input type='text' className='input-form mt-3 px-3 d-block text-center' placeholder=" أسم التصنيف الفرعي"/>
            </Col>
            
            <Col sm="8">
                <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-1  text-center px-2 w-100">
                        <option value="val"> التصنيف الأول</option>
                        <option value="val2">التصنيف الثاني</option>
                        <option value="val2">التصنيف الثالت</option>
                        <option value="val2">التصنيف الرابع</option>
                </select>
            </Col>
            <Col sm="8" className='d-flex justify-content-end'>
                <button className='btn-save mt-2 d-inline'>حفظ التعديلات</button>
            </Col>
        </Row>
    </div>
    )
}
