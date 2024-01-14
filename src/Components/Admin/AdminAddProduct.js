import React from 'react'
import { Row,Col } from 'react-bootstrap'
import avatar from "../../images/avatar.png"
import add from "../../images/add.png"
import Multiselect from 'multiselect-react-dropdown';


export const AdminAddProduct = () => {
    
    const options = [{name: 'التصنيف الأول', id: 1},{name: 'التصنيف الثاني', id: 2}]

    return (
        <div>
            <Row className='justify-content-start'>
                <div className='admin-content-text pb-4'>أضف منتج جديد</div>
                <Col sm="8">
                    <div className='text-form pb-2'>صورة المنتج</div>
                    <img alt='' src={avatar} style={{width:"120px",height:"120px",cursor:"pointer"}}/>
                    <input type='text' className='input-form mt-3 px-3 d-block ' placeholder="أسم المنتج"/>
                    <textarea
                        className="input-form-area p-2 mt-3" rows="4"cols="50"placeholder="وصف المنتج"/>
                    <input type='text' className='input-form mt-3 px-3 d-block ' placeholder="السعر قبل الخصم"/>
                    <input type='text' className='input-form mt-3 px-3 d-block ' placeholder=" سعر المنتج"/>
                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-1   px-2 w-100">
                        <option value="val"> التصنيف الرئيسي</option>
                        <option value="val"> التصنيف الأول</option>
                        <option value="val2">التصنيف الثاني</option>
                        <option value="val2">التصنيف الثالت</option>
                        <option value="val2">التصنيف الرابع</option>
                    </select>
                    
                    <Multiselect className="mt-2 text-end" placeholder="التصنيف الفرعي"
                    displayValue="name"style={{ color: "red" }} options={options}/>

                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-1   px-2 w-100">
                        <option value="val"> الماركة </option>
                        <option value="val2">قيد التنفيذ</option>
                        <option value="val2">تم الانتهاء</option>
                        <option value="val2">الغاء</option>
                    </select>
                </Col>
                <Row className='d-flex flex-column mt-3'>
                    <div>الألوان المتاحة للمنتج</div>
                    <div className='d-flex mt-2'>
                        <div className='color ms-2 border' style={{backgroundColor:"#E52C2c"}}></div>
                        <div className='color ms-2 border' style={{backgroundColor:"white"}}></div>
                        <div className='color ms-2 border' style={{backgroundColor:"black"}}></div>
                        <img alt='' src={add} style={{width:"30px",height:"30px",cursor:"pointer"}}/>
                    </div>
                </Row>
                
                <Col sm="8" className='d-flex justify-content-end'>
                    <button className='btn-save mt-2 d-inline'>حفظ التعديلات</button>
                </Col>
            </Row>
        </div>
    )
}
