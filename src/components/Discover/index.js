import Header from "../Header";
import Footer from "../Footer";
import { MdOutlineStar } from "react-icons/md";
import './index.css'

const star=<MdOutlineStar className="disocver-icon"/>

const Discover=()=>(
    <div className="main-container">
        <Header />
        <div className="discover-container">
            <h1 className="discover-h1">Discover</h1>
            <div className="discover-main-container">
                <div className="discover-inner-container">
                    <div className="discover-inner-container-main">
                        <div className="discover-inner-top">
                            <img className="discover-image1" src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="discover-image1" />
                            <div className="discover-inner-top-right">
                                <h1 className="discover-inner-top-right-h1">Arjun Raghav</h1>
                                <div className="dicover-icon">{star}{star}{star}{star}{star}</div>
                            </div>
                        </div>
                        <p className="discover-p">I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me. <span className="discover-sp">read more</span></p>
                    </div>
                </div>
                <div className="discover-inner-container">
                    <img className="discover-image2" src="https://english.mathrubhumi.com/image/contentid/policy:1.8277049:1675386939/ladakh.jpg?$p=9b0185a&f=16x9&w=1080&q=0.8" alt="discover-image2" />
                    <div className="discover-inner-container-main">
                        <div className="discover-inner-top">
                            <img className="discover-image1" src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="discover-image1" />
                            <div className="discover-inner-top-right">
                                <h1 className="discover-inner-top-right-h1">Anand Solanki</h1>
                                <div className="dicover-icon">{star}{star}{star}{star}{star}</div>
                            </div>
                        </div>
                        <p className="discover-p">I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me. <span className="discover-sp">read more</span></p>
                    </div>
                </div>
                <div className="discover-inner-container1">
                    <div className="discover-inner-container-main1">
                        <div className="discover-inner-top">
                            <img className="discover-image1" src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="discover-image1" />
                            <div className="discover-inner-top-right">
                                <h1 className="discover-inner-top-right-h1">Arjun Raghav</h1>
                                <div className="dicover-icon">{star}{star}{star}{star}{star}</div>
                            </div>
                        </div>
                        <p className="discover-p">I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me. <span className="discover-sp">read more</span></p>
                    </div>
                    <div className="discover-inner-container-main1">
                        <div className="discover-inner-top">
                            <img className="discover-image1" src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="discover-image1" />
                            <div className="discover-inner-top-right">
                                <h1 className="discover-inner-top-right-h1">Arjun Raghav</h1>
                                <div className="dicover-icon">{star}{star}{star}{star}{star}</div>
                            </div>
                        </div>
                        <p className="discover-p">I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me. <span className="discover-sp">read more</span></p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
)

export default Discover