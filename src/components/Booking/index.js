import Header from "../Header";
import Footer from "../Footer";
import { useState, useEffect } from "react";
import { FaPlusCircle, FaCaretDown, FaRupeeSign, FaArrowRight } from "react-icons/fa";
import { AiOutlineMinusCircle } from "react-icons/ai";
import './index.css'

const plus=<FaPlusCircle />
const down=<FaCaretDown />
const rupee=<FaRupeeSign />
const right=<FaArrowRight />
const minus=<AiOutlineMinusCircle />

const Booking=props=>{
    const [count,setCount]=useState(1)

    const onClickMinus=()=>{
        if(count>1){
            setCount((prevCount)=>{
                    return prevCount - 1
                }
            )
        }
    }

    const onClickPlus=()=>{
        setCount((prevCount)=>{
            return prevCount + 1
        })
    }

    const onClickBook=()=>{
        localStorage.setItem('count', JSON.stringify(count))
        const {history} = props
        history.push('/conform')
    }

    useEffect(() => {
        const count = JSON.parse(localStorage.getItem('count'));
        setCount(count);
    }, []);

    return(
        <div className="main-container">
            <Header />
            <div className="booking-container">
                <div className="booking-top-container">
                    <div className="booking-top-inner-container">
                        Amit Jha
                    </div>
                    <div className="booking-top-inner-container">
                        amit.jha6700@gmail.com
                    </div>
                    <div className="booking-top-inner-container">
                        +91 - 7764997022
                    </div>
                    <div className="booking-top-inner-container1">
                        1 Adult
                    </div>
                    <div className="booking-top-inner-container1">
                        2 Children
                    </div>
                </div>
                <div className="booking-bottom-container">
                    <div className="booking-bottom-inner-container">
                        <h1 className="booking-bottom-h1">CHECK-IN</h1>
                        <p className="booking-bottom-p">01 Feb 2022 {down}</p>
                    </div>
                    <div className="booking-bottom-inner-container">
                        <h1 className="booking-bottom-h1">CHECK-OUT</h1>
                        <p className="booking-bottom-p">07 Feb 2022 {down}</p>
                    </div>
                    <div className="booking-bottom-inner-container1">
                        <h1 className="booking-bottom-h1">ROOMS</h1>
                        <div className="booking-bottom-inner-inner-container">
                            <button className="booking-bottom-icon-button" onClick={onClickMinus}>{minus}</button>
                            <p className="booking-bottom-inner-p1">{count}</p>
                            <button className="booking-bottom-icon-button" onClick={onClickPlus}>{plus}</button>
                        </div>
                    </div>
                    <div className="booking-bottom-inner-container2">
                        <div className="booking-bottom-inner-container2-inner">
                            <button className="booking-link-button" onClick={onClickBook}>{rupee}{count * 12430}</button>
                            <span className="booking-icon">{right}</span>
                        </div>
                        <p className="booking-bottom-inner-container2-p">Click to pay token amount</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Booking