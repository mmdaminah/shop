import { MdLaptop, MdSmartphone, MdTablet } from "react-icons/md";
import './CategoryCard.css'
import { useHistory } from "react-router";
const CategoryCard = () => {
    const history = useHistory()
    return (
        <div className="text-center w-100">
            <div className="container d-flex flex-lg-row flex-column justify-content-center w-100 p-5">
                <div onClick={() => history.push("/categorymobile")} className="col-lg-3 col-12 bg-danger rounded category-card-custom text-white">
                    <MdSmartphone style={{ width: "100px", height: "150px" }} />
                    <h1>گوشی</h1>
                </div>
                <div onClick={() => history.push("/categorytablet")} className="col-lg-3 col-12 bg-success mx-lg-4 mx-0 my-lg-0 my-4 rounded text-white category-card-custom">
                    <MdTablet style={{ width: "100px", height: "150px" }} />
                    <h1>تبلت</h1>
                </div>
                <div onClick={() => history.push("/categorylaptop")} className="col-lg-3 col-12 bg-primary rounded text-white category-card-custom">
                    <MdLaptop style={{ width: "100px", height: "150px" }} />
                    <h1>لپ تاپ</h1>
                </div>
            </div>
        </div>
    )
}
export default CategoryCard;