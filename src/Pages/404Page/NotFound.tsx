import { Button } from 'react-bootstrap'
import "./NotFound.style.css"
import { useHistory } from 'react-router'
const NotFound = () => {
    const history = useHistory()
    return (
        <div className="w-100" style={{ marginTop: "3rem" }}>
            <section className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center ">404</h1>
                                </div>
                                <div className="contant_box_404">
                                    <h3 className="h2">
                                    صفحه مورد نظر یافت نشد
                                    </h3>
                                    <p>متاسفانه صفحه‌ای که به دنبال آن بودید حذف یا منتقل شده است.</p>
                                    <Button
                                     onClick={()=>history.push("/homepage")}
                                     variant="success">رفتن به صفحه اصلی</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default NotFound;