import React from 'react'
import {Row,Col} from 'react-bootstrap'
import ProductGallery from './ProductGallery'
import ProductDescribtion from './ProductDescribtion'
const ProductsDetails = () => {
    return (
        <div>
            <Row className='py-3 '>

                <Col lg="4">
                    <ProductGallery/>
                </Col>


                <Col lg="8" >
                    <ProductDescribtion/>
                </Col>

            </Row>
        </div>
    )
}

export default ProductsDetails
