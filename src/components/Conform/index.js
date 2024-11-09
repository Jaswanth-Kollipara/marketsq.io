import Header from "../Header";
import Footer from "../Footer";
import { useState, useEffect } from "react";
import { FaRupeeSign, FaCheckCircle } from "react-icons/fa";
import './index.css'

const check=<FaCheckCircle className="conform-icon" />
const rupee=<FaRupeeSign />

const Conform=()=>{
    const [count,setCount]=useState(1)

    useEffect(() => {
        const count = JSON.parse(localStorage.getItem('count'));
        setCount(count);
    }, []);

    return(
        <div className="main-container">
            <Header />
            <div className="conform-container">
                <div className="conform-top-container">
                    <div className="conform-top-left-container">
                        <h1 className="conform-h">Amit Jha</h1>
                        <p className="conform-p">+91 - 7764997022</p>
                        <p className="conform-p">amit.jha6700@gmail.com</p>
                        <p className="conform-p">1 Adult and 2 Children</p>
                    </div>
                    <div className="conform-top-right-container">
                        {check}
                        <div className="conform-top-left-inner-container">
                            <h1 className="conform-h1">Order Complete</h1>
                            <p className="conform-p">Have questions?</p>
                            <p className="conform-p1">contact us</p>
                        </div>
                    </div>
                </div>
                <div className="conform-bottom-container">
                    <div className="conform-bottom-inner-container">
                        <h1 className="conform-bottom-h1">CHECK-IN</h1>
                        <p className="conform-bottom-p">01 Feb 2022</p>
                    </div>
                    <div className="conform-bottom-inner-container">
                        <h1 className="conform-bottom-h1">CHECK-OUT</h1>
                        <p className="conform-bottom-p">07 Feb 2022 </p>
                    </div>
                    <div className="conform-bottom-inner-container1">
                        <h1 className="conform-bottom-h1">ROOMS</h1>
                        <p className="conform-bottom-inner-p">{count}</p>
                    </div>
                    <div className="conform-bottom-inner-container1">
                        <button className="conform-link-button">{rupee} {12430 * count}</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Conform