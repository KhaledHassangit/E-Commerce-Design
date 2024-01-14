import React from 'react'
import { Container ,Row} from 'react-bootstrap'
import BrandCard from '../../Components/Brand/BrandCard'
import SectionTitle from '../../Components/Utilities/SectionTitle'
import brand1 from "../../images/brand1.png"
import brand2 from "../../images/brand2.png"
import brand3 from "../../images/brand3.png"
import Pagenation from '../../Components/Utilities/Pagenation'
const AllBrands = () => {
    return (
        <div>
            <Container style={{minHeight:"630px"}} className='mb-2 mt-2'>
            <SectionTitle  title={"كل الماركات"}  pathroute={"/allBrands"}/>
            <Row className='d-flex  my-1 justify-content-between'>
                <BrandCard img={brand1}/>
                <BrandCard img={brand2} />
                <BrandCard img={brand3}/>
                <BrandCard img={brand1}/>
                <BrandCard img={brand2} />
                <BrandCard img={brand3}/>
                <BrandCard img={brand1}/>
                <BrandCard img={brand2} />
                <BrandCard img={brand3}/>
                <BrandCard img={brand1}/>
                <BrandCard img={brand2} />
                <BrandCard img={brand3}/>
                <BrandCard img={brand3}/>
                <BrandCard img={brand1}/>
                <BrandCard img={brand2} />
                <BrandCard img={brand3}/>
                <BrandCard img={brand3}/>
                <BrandCard img={brand3}/>
            </Row>
        </Container>
        <Pagenation/>
        </div>
        
    )
}

export default AllBrands
