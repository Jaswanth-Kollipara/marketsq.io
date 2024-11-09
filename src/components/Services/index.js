import Header from "../Header";
import Footer from "../Footer";
import { MdOutlineWifi, MdFastfood, MdDirectionsCar, MdMap, MdFlag, MdShoppingCart } from "react-icons/md";
import { PiHouseFill } from "react-icons/pi";
import { IoMdBicycle } from "react-icons/io";
import './index.css'

const wifi=<MdOutlineWifi className="services-icon" />
const food=<MdFastfood className="services-icon" />
const car=<MdDirectionsCar className="services-icon" />
const map=<MdMap className="services-icon" />
const flag=<MdFlag className="services-icon" />
const cart=<MdShoppingCart className="services-icon" />
const home=<PiHouseFill className="services-icon" />
const cycle=<IoMdBicycle className="services-icon" />

const Services=()=>(
    <div className="main-container">
        <Header />
        <div className="services-container">
            <h1 className="services-h1">Services</h1>
            <div className="services-main-container">
                <div className="services-inner-container">
                    {wifi}
                    <h1 className="services-inner-h1">High Speed Internet</h1>
                    <p className="services-inner-p">Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.</p>
                </div>
                <div className="services-inner-container">
                    {food}
                    <h1 className="services-inner-h1">Healthy Meals</h1>
                    <p className="services-inner-p">A heathy breakfast and pleasant dinner will be serviced at your space avery single day for your entire duration of option of paid duration of stay with option order within BriSphere.</p>
                </div>
                <div className="services-inner-container">
                    {home}
                    <h1 className="services-inner-h1">Homely Stay</h1>
                    <p className="services-inner-p">Designed for working professionals with spacious Interiors, comfortable beds and sleekly attached kitchen are some of of the the comforts comforts providedin providedin your space.</p>
                </div>
                <div className="services-inner-container">
                    {car}
                    <h1 className="services-inner-h1">Transportation</h1>
                    <p className="services-inner-p">Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.</p>
                </div>
                <div className="services-inner-container">
                    {cycle}
                    <h1 className="services-inner-h1">Food Delivery</h1>
                    <p className="services-inner-p">Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.</p>
                </div>
                <div className="services-inner-container">
                    {map}
                    <h1 className="services-inner-h1">Tourism</h1>
                    <p className="services-inner-p">Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.</p>
                </div>
                <div className="services-inner-container">
                    {flag}
                    <h1 className="services-inner-h1">Job</h1>
                    <p className="services-inner-p">Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.</p>
                </div>
                <div className="services-inner-container">
                    {car}
                    <h1 className="services-inner-h1">Rental Service</h1>
                    <p className="services-inner-p">Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.</p>
                </div>
                <div className="services-inner-container">
                    {cart}
                    <h1 className="services-inner-h1">Online Shoppping</h1>
                    <p className="services-inner-p">Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
)

export default Services