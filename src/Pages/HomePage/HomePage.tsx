import React,{useState, useEffect} from 'react'
import { RouteComponentProps } from 'react-router'
import Carousel from '../../Components/Carousel/Carousel'
import ProductSlider from '../../Components/ProductSlider/ProductSlider'
import CategoryCard from '../../Components/CategoryCard/CategoryCard'
import promoPic1 from '../../Assets/PromotionPic1.jpg'
import promoPic2 from '../../Assets/PromotionPic2.jpg'
import promoPic3 from '../../Assets/PromotionPic3.jpg'
import promoPic4 from '../../Assets/PromotionPic4.jpg'
import promoPic5 from '../../Assets/PromotionPic5.jpg'
import promoPic6 from '../../Assets/PromotionPic6.jpg'
export const HomePage = (props: RouteComponentProps) => {
    const [windowWidth,setWindowWith] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener("resize",()=>{
            setWindowWith(window.innerWidth)
        })
    }, [])//EF394E
    return (
        <div className="w-100" style={{marginTop:`${windowWidth < 992 ? "3rem": "5rem"}`,backgroundColor:"#fbfbfb"}}>
            <div className="d-flex flex-lg-row flex-column w-100 container">
                <Carousel />
                <div className={`d-flex flex-lg-column flex-row`} style={{width:`${windowWidth < 992 ? 100: 34}%`}}>
                    <div className="w-100 h-50 p-1"style={{borderRadius:"10px"}}>
                        <img className="w-100 h-100 rounded" src="https://takzanbil.ir/wp-content/uploads/2020/01/L_0100.jpg" alt="" />
                    </div>
                    <div className="w-100 h-50 p-1" style={{borderRadius:"10px"}}>
                        <img className="w-100 h-100 rounded" src="https://abzarmart.com/media/wysiwyg/general/header-mobile.jpg" alt="" />
                    </div>
                </div>
            </div>
            <ProductSlider title={"گوشی"} background={"bg-danger"} color={"#EF394E"}  url="/mobile" textColor="text-white" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-6"><img className="w-100" style={{borderRadius:"8px"}} src={promoPic1} alt="" /></div>
                    <div className="col-lg-3 col-6"><img className="w-100" style={{borderRadius:"8px"}} src={promoPic2} alt="" /></div>
                    <div className="col-lg-3 col-6"><img className="w-100" style={{borderRadius:"8px"}} src={promoPic3} alt="" /></div>
                    <div className="col-lg-3 col-6"><img className="w-100" style={{borderRadius:"8px"}} src={promoPic4} alt="" /></div>
                </div>
            </div>
            <ProductSlider title={"تبلت"} background={"bg-success"} color={"#6bb927"}  url="/tablet" textColor="text-white" />
            <div className="container">
                <div className="row">
                    <div className="col-6"><img className="w-100" style={{borderRadius:"8px"}} src={promoPic5} alt="" /></div>
                    <div className="col-6"><img className="w-100" style={{borderRadius:"8px"}} src={promoPic6} alt="" /></div>
                </div>
            </div>
            <ProductSlider title={"لپ تاپ"} background={"bg-primary"} color={"#019ca7"}  url="/laptop" textColor="text-white" />
            <CategoryCard />
        </div>
    )
}
export default HomePage;