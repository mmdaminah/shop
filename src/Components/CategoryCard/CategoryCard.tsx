import { MdLaptop, MdSmartphone, MdTablet } from "react-icons/md";
import './CategoryCard.css'
import SmartPhone from '../../Assets/smartphone.svg'
import Laptop from '../../Assets/laptop.svg'
import Tablet from '../../Assets/tablet.svg'
import { useHistory } from "react-router";
const CategoryCard = () => {
    const history = useHistory()
    return (
        <div className="text-center w-100 my-3" style={{backgroundColor:"#d4edef"}}>
            <div className="container d-flex flex-lg-row flex-column justify-content-center w-100 p-5">
                <div onClick={() => history.push("/categorymobile")} className="col-lg-3 col-12 bg-white rounded category-card-custom text-white">
                    <img style={{ width: "100px", height: "150px" }} src={SmartPhone} alt="" />
                    <h1>گوشی</h1>
                </div>
                <div onClick={() => history.push("/categorytablet")} className="col-lg-3 col-12 bg-white mx-lg-4 mx-0 my-lg-0 my-4 rounded text-white category-card-custom">
                    <img style={{ width: "100px", height: "150px" }} src={Tablet} alt="" />
                    <h1>تبلت</h1>
                </div>
                <div onClick={() => history.push("/categorylaptop")} className="col-lg-3 col-12 bg-white rounded text-white category-card-custom">
                    <img style={{ width: "100px", height: "150px" }} src={Laptop} alt="" />
                    <h1>لپ تاپ</h1>
                </div>
            </div>
        </div>
    )
}
export default CategoryCard;