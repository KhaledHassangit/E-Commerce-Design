import React from 'react'
import {Container,Row} from "react-bootstrap"
import SectionTitle from '../Utilities/SectionTitle'
import CategoryCard from '../Category/CategoryCard'
import labtop from "../../images/labtop.png"

const HomeCategory = () => {
    return (
        <Container > 
        <SectionTitle title={"التصـنـيفات"} btntitle={"المزيد"} pathroute={"/allcategory"}/>
        <Row className='d-flex  my-2 justify-content-between'>
        <CategoryCard title={"أجهـزة منزلية"} background="#f4dba5" img={labtop}/>
        <CategoryCard title={"أجهـزة منزلية"} background="#f4dba5" img={labtop}/>
        <CategoryCard title={"أجهـزة منزلية"} background="#f4dba5" img={labtop}/>
        <CategoryCard title={"أجهـزة منزلية"} background="#f4dba5" img={labtop}/>
        <CategoryCard title={"أجهـزة منزلية"} background="#f4dba5" img={labtop}/>
        <CategoryCard title={"أجهـزة منزلية"} background="#f4dba5" img={labtop}/>
        </Row>
        </Container>
    )
}

export default HomeCategory
