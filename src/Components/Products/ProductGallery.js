import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import mobile from "../../images/mobile.png"
import mobile1 from "../../images/mobile1.png"
import mobile2 from "../../images/mobile2.png"
import LeftButton from './LeftButton';
import RightButton from "./RightButton"

const ProductGallery = () => {

    const images = [
        {
        original: `${mobile}`,
        },
        {
        original: `${mobile2}`,
        },
        {
        original: `${mobile1}`,
        },
    ];

    return(

        <div className='product-gallary-card d-flex justify-content-center  align-items-center pb-4 mb-5  '>
            <ImageGallery  items={images}  defaultImage={mobile} 
            showFullscreenButton={false} isRTL={true} showPlayButton={false}
            showThumbnails={true} renderRightNav={RightButton} renderLeftNav={LeftButton} />
        </div>
        
    )
}

export default ProductGallery
