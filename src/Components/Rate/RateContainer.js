import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import rate from "../../images/rate.png"
import RateItem from './RateItem'
import RatePost from './RatePost'
import Pagenation from '../Utilities/Pagenation'
const RateContainer = () => {
    return (
        <Container className='rate-container mt-4'>
            <Row>
                <Col className='d-flex'>
                <div className='sub-title p-1'>التقيمات</div>
                <img className='mt-3' style={{width:"16px",height:"16px"}} alt='' src={rate}></img>
                <div className='cat-rate pt-2 p-1 mt-2'>4.3</div>
                <div className='rate-count pt-2 p-1 mt-2 '>(160 تقييم)</div>
                </Col>
            </Row>
            <RatePost/>
            <RateItem/>
            <RateItem/>
            <RateItem/>
            <RateItem/>
            <RateItem/>
            <Pagenation/>
        </Container>
    )
}

export default RateContainer
