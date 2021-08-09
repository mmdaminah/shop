import React from 'react'
import { RouteComponentProps } from 'react-router'
import Carousel from '../../Components/Carousel/Carousel'
import ProductSlider from '../../Components/ProductSlider/ProductSlider'
import CategoryCard from '../../Components/CategoryCard/CategoryCard'
export const HomePage = (props: RouteComponentProps) => {
    return (
        <div className="w-100" style={{marginTop:"5rem",backgroundColor:"#fbfbfb"}}>
            <div className="d-flex w-100 container">
                <Carousel />
                <div className="w-50">
                    <div className="bg-warning w-100 h-50 mb-2 mx-2"style={{borderRadius:"10px"}}>
                        <img className="w-100 h-100 rounded" src="https://takzanbil.ir/wp-content/uploads/2020/01/L_0100.jpg" alt="" />
                    </div>
                    <div className="bg-danger w-100 h-50 mx-2" style={{borderRadius:"10px"}}>
                        <img className="w-100 h-100 rounded" src="https://abzarmart.com/media/wysiwyg/general/header-mobile.jpg" alt="" />
                    </div>
                </div>
            </div>
            <ProductSlider title={"گوشی"} background={"bg-danger"}  url="/mobile" />
            <ProductSlider title={"تبلت"} background={"bg-success"}  url="/tablet" />
            <ProductSlider title={"لپ تاپ"} background={"bg-primary"}  url="/laptop" />
            <CategoryCard />
        </div>
    )
}
export default HomePage;