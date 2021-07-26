import React from 'react'
import { RouteComponentProps } from 'react-router'
import Carousel from '../../Components/Carousel/Carousel'
import ProductSlider from '../../Components/ProductSlider/ProductSlider'
import CategoryCard from '../../Components/CategoryCard/CategoryCard'
export const HomePage = (props: RouteComponentProps) => {
    return (
        <div className="w-100" style={{marginTop:"10rem"}}>
            <div className="d-flex w-100 container">
                <Carousel />
                <div className="w-50">
                    <div className="bg-warning w-100 h-50">1</div>
                    <div className="bg-danger w-100 h-50">2</div>
                </div>
            </div>
            <ProductSlider title={"گوشی"} background={"bg-primary"} url="/mobile" />
            <ProductSlider title={"تبلت"} background={"bg-danger"} url="/tablet" />
            <ProductSlider title={"لپ تاپ"} background={"bg-warning"} url="/laptop" />
            <CategoryCard />
        </div>
    )
}
export default HomePage;