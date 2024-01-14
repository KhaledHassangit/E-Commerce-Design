import React from 'react'
import SliderCarousel from '../../Components/Home/Slider'
import HomeCategory from '../../Components/Home/HomeCategory'
import ProductsContainer from '../../Components/Products/ProductsContainer'
import DicountSection from './DicountSection'
import BrandContainer from '../../Components/Brand/BrandContainer'
const HomePage = () => {
    return (
        <div className='font' style={{minHeight:"650px"}}>
            <SliderCarousel/>
            <HomeCategory/>
            <ProductsContainer title="الأكثر مبيعا" btntitle="المزيد" pathroute={"/AllProducts"}/>
            <DicountSection/>
            <ProductsContainer title=" وصل حديثا" btntitle="المزيد" />
            <BrandContainer title=" أشهر الماركات " btntitle="المزيد" />
        </div>
    )
}

export default HomePage
