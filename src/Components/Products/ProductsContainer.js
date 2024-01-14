import React from 'react'
import { Container ,Row} from 'react-bootstrap'
import SectionTitle from '../Utilities/SectionTitle'
import ProductCard from './ProductCard'
const ProductsContainer = ({title,btntitle,pathroute}) => {
    return (
        <Container>
            <SectionTitle title={title} btntitle={btntitle} pathroute={pathroute}/>
            <Row className='d-flex  my-2 justify-content-between'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </Row>
        </Container>
    )
}

export default ProductsContainer
