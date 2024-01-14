import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAllProductContainer from '../../Components/Admin/AdminAllProductContainer'
import Pagenation from '../../Components/Utilities/Pagenation'

const AdminAllProductPage = () => {
    return (
        <Container style={{minHeight:"630px"}}>
            <Row className='py-3'>
                <Col xs="3" sm="3" md="2">
                    <AdminSideBar/>
                </Col>
                <Col  xs="9" sm="9" md="10">
                    <AdminAllProductContainer/>
                    <Pagenation/>

                </Col>
            </Row>
        </Container>
    )
}

export default AdminAllProductPage

