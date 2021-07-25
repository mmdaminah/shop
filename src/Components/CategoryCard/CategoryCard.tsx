import { MdLaptop, MdSmartphone, MdTablet } from "react-icons/md";
const CategoryCard = () => {
    return (
        <div className="text-center w-100 p-3">
            <div className="container d-flex justify-content-center w-100">
                <div>
                    <MdLaptop className="mx-4" style={{ width: "100px", height: "100px", color: "green" }} />
                    <div>لپ تاپ</div>
                </div>
                <div>
                    <MdSmartphone className="mx-4" style={{ width: "100px", height: "100px", color: "green" }} />
                    <div>گوشی</div>
                </div>
                <div>
                    <MdTablet className="mx-4" style={{ width: "100px", height: "100px", color: "green" }} />
                    <div>تبلت</div>
                </div>
            </div>
        </div>
    )
}
export default CategoryCard;