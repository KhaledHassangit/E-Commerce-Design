import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { UserAddressCard } from './UserAddressCard'

export const UserAllAdresses = () => {
    return (
        <div>
        <div className="admin-content-text pb-4">دفتر العنوانين</div>
                <UserAddressCard />
                <UserAddressCard />
            {/* <h6>لا يوجد عنوانين حتى الان</h6> */}

        <Row className="justify-content-center">
            <Col sm="5" className="d-flex justify-content-center">
                <Link to="/User/AddAddress" style={{ textDecoration: "none" }}>
                    <button className="btn-add-address">اضافه عنوان جديد</button>
                </Link>
            </Col>
        </Row>
    </div >
    )
}
