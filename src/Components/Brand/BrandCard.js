import React from 'react'
import {Card, Col} from "react-bootstrap"
const BrandCard = ({img}) => {
    return (
        <Col xs="6" sm="6" md="4" lg="2" className='d-flex justify-content-center my-2'>
            <Card style={{ width: '100%',height:"150px",borderRadius:"8px" ,border:"none",backgroundColor:"#FFFFFF",boxShadow:"0 2px 0 rgba(151,151,151,0.5)" }} className='my-1'>
                <Card.Img style={{ width: '100%',height:"150px"}} src={img}></Card.Img>
            </Card>
        </Col>
    )
}

export default BrandCard
