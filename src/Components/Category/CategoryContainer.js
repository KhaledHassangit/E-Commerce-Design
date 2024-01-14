import React from 'react'
import {Container,Row} from "react-bootstrap"
import SectionTitle from '../Utilities/SectionTitle'
import CategoryCard from './CategoryCard'
import labtop from "../../images/labtop.png"

const CategoryContainer = () => {
    return (
        <Container style={{minHeight:"630px"}} > 
        <SectionTitle title={"كل التصـنـيفات"}  />
        <Row className='d-flex  my-2 justify-content-between'>
        <CategoryCard title={"أجهـزة منزلية"} background="#f4dba5" img={labtop}/>
        <CategoryCard title={"أجهـزة منزلية"} background="#f4dba5" img={labtop}/>
        <CategoryCard title={"أجهـزة منزلية"} background="#f4dba5" img={labtop}/>
        <CategoryCard title={"أجهـزة منزلية"} background="#f4dba5" img={labtop}/>
        <CategoryCard title={"أجهـزة منزلية"} background="#f4dba5" img={labtop}/>
        <CategoryCard title={"أجهـزة منزلية"} background="#f4dba5" img={labtop}/>
        <CategoryCard title={"أجهـزة منزلية"} background="#f4dba5" img={labtop}/>
        <CategoryCard title={"أجهـزة منزلية"} background="#f4dba5" img={labtop}/>
        <CategoryCard title={"أجهـزة منزلية"} background="#f4dba5" img={labtop}/>
        <CategoryCard title={"أجهـزة منزلية"} background="#f4dba5" img={labtop}/>
        <CategoryCard title={"أجهـزة منزلية"} background="#f4dba5" img={labtop}/>
        <CategoryCard title={"أجهـزة منزلية"} background="#f4dba5" img={labtop}/>
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

export default CategoryContainer
