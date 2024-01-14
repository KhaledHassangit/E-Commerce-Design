import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import SearchResult from '../../Components/Utilities/SearchResult'
import { Container,Row,Col } from 'react-bootstrap'
import SideFilter from '../../Components/Utilities/SideFilter'
import Pagenation from "../../Components/Utilities/Pagenation"
import ProductsContainer from "../../Components/Products/ProductsContainer"

const AllProductsPage = () => {
    return (
        <div style={{minHeight:"630px"}}>
            <CategoryHeader/>
            <Container>
            <SearchResult title="300 نتيجة بحث"/>
            <Row className='d-flex flex-row'>
                <Col sm="2" xs="2" md="1"><SideFilter/></Col>
                <Col sm="10" xs="10" md="11"><ProductsContainer title="" btntitle=""/></Col>
            </Row>
            <Pagenation/>
            </Container>
            
        </div>
    )
}

export default AllProductsPage
