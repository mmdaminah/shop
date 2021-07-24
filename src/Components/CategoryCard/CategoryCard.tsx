import { MdLaptop, MdSmartphone, MdTablet } from "react-icons/md";
const CategoryCard = () => {
    return (
        <div className="text-center w-100">
            <div className="container d-flex justify-content-center w-100">
                <div>
                    <MdLaptop style={{ width: "100px", height: "100px", color: "green" }} />
                    <div>لپ تاپ</div>
                </div>
                <div>
                    <MdSmartphone style={{ width: "100px", height: "100px", color: "green" }} />
                    <div>گوشی</div>
                </div>
                <div>
                    <MdTablet style={{ width: "100px", height: "100px", color: "green" }} />
                    <div>تبلت</div>
                </div>
            </div>
        </div>
    )
}
export default CategoryCard;