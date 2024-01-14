import React from 'react'
import {Col,Row} from "react-bootstrap"
const ProductDescribtion = () => {
    return (
        <div className='mediascreen'>
        <Row className="mt-2">
            <div className="cat-text">الالكترونيات:</div>
        </Row>
        <Row>
            <Col md="8">
            <div className="cat-title d-inline">
                أيفون بذاكرة سعة 128 جيجابايت
                <div className="cat-rate  mt-2">4.5</div>
            </div>
            </Col>
        </Row>
        <Row>
            <Col md="8" className="mt-4">
            <div className="cat-text d-inline">الماركة :</div>
            <div className="barnd-text d-inline mx-1">أبل</div>
            </Col>
        </Row>
        <Row>
            <Col md="8" className="mt-1 d-flex">
            <div className='color ms-2 border' style={{backgroundColor:"#E52C2c"}}></div>
            <div className='color ms-2 border' style={{backgroundColor:"white"}}></div>
            <div className='color ms-2 border' style={{backgroundColor:"black"}}></div>
                
            </Col>
        </Row>

        <Row className="mt-4">
            <div className="cat-text">المواصفات :</div>
        </Row>
        <Row className="mt-2">
            <Col md="10">
            <div className="product-description d-inline">
            توفر الهاتف بأكثر من إصدار من الذاكرة الصلبة والذاكرة العشوائية على النحو التالي :-
            – الإصدار الأول يأتي بذاكرة صلبة بسعة 128 جيجا بايت من نوع NVMe مع ذاكرة عشوائية بسعة 6 جيجا بايت .
            – الإصدار الثاني يأتي بذاكرة صلبة بسعة 256 جيجا بايت من نوع NVMe مع ذاكرة عشوائية بسعة 6 جيجا بايت .
            – الإصدار الثالث يأتي بذاكرة صلبة بسعة 512 جيجا بايت من نوع NVMe مع ذاكرة عشوائية بسعة 6 جيجا بايت .
            – للأسف لا يدعم الهاتف إمكانية زيادة المساحة التخزينية عن طريق تركيب كارت ميموري .
            </div>
            </Col>
        </Row>
        <Row className="mt-4">
            <Col md="12">
            <div className="product-price d-inline px-3 py-3 border"> 34000جنية</div>
            <div  className="product-cart-add px-3 py-3 d-inline mx-3">اضف للعربة</div>
            </Col>
        </Row>
        </div>
    )
}

export default ProductDescribtion

