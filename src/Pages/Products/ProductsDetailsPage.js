import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import { Container } from 'react-bootstrap'
import ProductsDetails from '../../Components/Products/ProductsDetails'
import RateContainer from '../../Components/Rate/RateContainer'
import ProductsContainer from '../../Components/Products/ProductsContainer'
const ProductsDetailsPage = () => {
    return (
        <div style={{minHeight:"630px"}}>
            <CategoryHeader/>
            <Container>
                <ProductsDetails/>
                <RateContainer/>
                <ProductsContainer title="منتجات قد تعجبك" />
            </Container>
        </div>
    )
}

export default ProductsDetailsPage;
