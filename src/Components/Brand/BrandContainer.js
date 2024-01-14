import React from 'react'
import { Container ,Row} from 'react-bootstrap'
import SectionTitle from '../Utilities/SectionTitle'
import BrandCard from './BrandCard'
import brand1 from "../../images/brand1.png"
import brand2 from "../../images/brand2.png"
import brand3 from "../../images/brand3.png"

const BrandContainer = ({title,btntitle}) => {
    return (
        <Container>
            <SectionTitle title={title} btntitle={btntitle} pathroute={"/allBrands"}/>
            <Row className='d-flex  my-1 justify-content-between'>
                <BrandCard img={brand1}/>
                <BrandCard img={brand2} />
                <BrandCard img={brand3}/>
                <BrandCard img={brand1}/>
                <BrandCard img={brand2} />
                <BrandCard img={brand3}/>
            </Row>
        </Container>
    )
}

export default BrandContainer
