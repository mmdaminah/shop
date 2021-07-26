import { MdLaptop, MdSmartphone, MdTablet } from "react-icons/md";
const CategoryCard = () => {
    return (
        <div className="text-center w-100 my-5">
            <div className="container d-flex justify-content-center w-100">
                <div>
                    <MdLaptop className="mx-4 p-4 bg-warning" style={{ width: "150px", height: "150px", color: "green",borderRadius:"50%" }} />
                    <div>لپ تاپ</div>
                </div>
                <div>
                    <MdSmartphone className="mx-4 p-4 bg-warning" style={{ width: "150px", height: "150px", color: "green",borderRadius:"50%" }} />
                    <div>گوشی</div>
                </div>
                <div>
                    <MdTablet className="mx-4 p-4 bg-warning" style={{ width: "150px", height: "150px", color: "green",borderRadius:"50%" }} />
                    <div>تبلت</div>
                </div>
            </div>
        </div>
    )
}
export default CategoryCard;