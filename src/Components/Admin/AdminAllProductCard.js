import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import item from "../../images/item.png"
import favoff from "../../images/favoff.png"
import rate from "../../images/rate.png"
const AdminAllProductCard = () => {
  return (
    <Col xs="12" sm="6" md="5" lg="4" className='d-flex'>

            <Card style={{ width: '100%',minHeight:"370px",borderRadius:"10px" ,border:"none",backgroundColor:"#FFFFFF",boxShadow:"0 2px 0 rgba(151,151,151,0.5)" }} className='my-2'>
              <Row className='d-flex justify-content-center px-2'>
                <Col className='d-flex justify-content-between '>
                <div className='item-delete-edit d-inline'>ازالة</div>
                <div className='item-delete-edit d-inline'>تعديل</div>
                </Col>
              </Row>
                <Link to="/AllProducts/:id" style={{textDecoration:"none"}}>
                <Card.Img  src={item} style={{width:"100%",height:"230px",cursor:"pointer"}} />
                </Link>
                <Card.Body>
                    <div className='d-flex justify-content-end' >
                        <img src={favoff} style={{width:"25px",height:"25px",cursor:"pointer"} }alt=""></img>
                    </div>
                    <div className='card-title'>
                    <Card.Title>أسود كربون ساعة يد ذكية بيب اس اسود كربون</Card.Title>
                    </div>
                    <div className='d-flex justify-content-lg-between align-items-center'>
                        <span className='card-rate '>4.5 <img src={rate} style={{width:"16px",height:"16px"}}alt=""></img></span>
                        <span className='card-price'>880 <span className='card-currency '>جنية</span></span>
                    </div>
                    
                </Card.Body>
            </Card>
        </Col>
  )
}

export default AdminAllProductCard
