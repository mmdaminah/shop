import './Footer.style.css'
import Rocket from '../../Assets/Rocket.png'
import Certificate from '../../Assets/Certificate.svg'
import Payment from '../../Assets/debit-card.png'
import Instagram from '../../Assets/Instagram.svg'
import Telegram from '../../Assets/Telegram.svg'
import Twitter from '../../Assets/Twitter.svg'
import Enamad from '../../Assets/E-namad.png'
import Union from '../../Assets/Unoin-namad.png'
import { MdEmail, MdPhone, MdMap, MdNearMe } from "react-icons/md"
const Footer = () => {
    return (
        <div className="w-100 bg-primary">
            <div className="bg-success w-100">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-4 p-4">
                            <img className="icon" src={Rocket} alt="" />
                            <div>تحویل سریع</div>
                        </div>
                        <div className="col-4 p-4">
                            <img className="icon" src={Certificate} alt="" />
                            <div>تضمین اصل بودن کالا</div>
                        </div>
                        <div className="col-4 p-4">
                            <img className="icon" src={Payment} alt="" />
                            <div>پرداخت در محل</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container w-100 h-75 my-5">
                <div className="row w-100 h-100">
                    <div className="col-4">
                        <div><h5>راه های ارتباطی</h5></div>
                        <div className="my-3"><MdMap /><span className="mx-2">آدرس:تهران،خیابان ولی عصر</span></div>
                        <div className="my-3"><MdPhone /><span className="mx-2">تلفن:021323435</span></div>
                        <div className="my-3"><MdNearMe /><span className="mx-2">کدپستی:7714681823</span></div>
                        <div className="my-3"><MdEmail /><span className="mx-2">ایمیل:example@gmail.com</span></div>
                    </div>
                    <div className="col-4">
                        <div><h5>خدمات مشتریان</h5></div>
                        <div className="my-3">پاسخ به پرسشهای متدوال</div>
                        <div className="my-3">حریم خصوصی</div>
                        <div className="my-3">گزارش باگ</div>
                    </div>
                    <div className="col-4">
                        <div className="text-center"><h5>شبکه های اجتماعی</h5></div>
                        <div className="d-flex justify-content-center my-3">
                            <div><img className="icon-social mx-3" src={Telegram} alt="" /></div>
                            <div><img className="icon-social mx-3" src={Instagram} alt="" /></div>
                            <div><img className="icon-social mx-3" src={Twitter} alt="" /></div>
                        </div>
                        <div className="text-center"><h5>اطلاع از جدیدترین تخفیفات</h5></div>
                        <div className="mt-4">
                            <input className="w-75" type="email" placeholder="ایمیل خود را وارد کنید..." />
                            <button>عضویت</button>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div className="d-flex justify-content-between">
                        <div className="w-50">
                            ممد کامپیوتر یکی از جدیدترین سایتهای فروش قطعات است که از پارسال با فروش آت آشغال شروع به فعالیت کرده است.
                            امید است با همراهی شما عزیزان هر سال دسته بندیهای جدیدی به این فروشگاه اضافه شود تا بتوانیم با قدرت هرچه تمام تر جیب شمارا خالی کنیم.
                        </div>
                        <div className="d-flex">
                            <div className="mx-2"><img src={Enamad} alt="" /></div>
                            <div className="mx-2"><img src={Union} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-danger text-center">
                <div>تمامی حقوق متعلق به شرکت گنده پرداز جنوبشرق می باشد.</div>
            </div>
        </div>
    )
}
export default Footer;