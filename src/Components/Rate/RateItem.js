import React from 'react'
import {Row, Col} from "react-bootstrap"
import rate from "../../images/rate.png"

const RateItem = () => {
    return (
    <div>
        <Row className='mt-3'>
            <Col className='d-flex me-5'>
                <div className='rate-name p-1 ms-2'>أحمد محمود</div>
                <img className='mt-2' style={{width:"16px",height:"16px"}} alt='' src={rate}></img>
                <div className='cat-rate pt-2 p-1 mt-0'>4.3</div>
            </Col>
        </Row>
        <Row className='border-bottom mx-2'>
            <Col className='d-flex me-4 pb-2'>
                <div className='rate-description ms-2'>
                    منتج مناسب سعر جدا وجودة ممتازة
                </div>
            </Col>
        </Row>

    </div>
    )
}

export default RateItem
