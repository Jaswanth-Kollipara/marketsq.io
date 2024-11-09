import { FaFacebook, FaPlusCircle, FaCaretDown } from "react-icons/fa";
import { AiFillInstagram, AiOutlineMinusCircle } from "react-icons/ai";
import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import './index.css'

const facebook=<FaFacebook className="home-top-icon" />
const plus=<FaPlusCircle />
const down=<FaCaretDown />
const insta=<AiFillInstagram className="home-top-icon" />
const minus=<AiOutlineMinusCircle />

const Home=props =>{
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
        history.push('/booking')
    }

    return(
        <div className="main-container">
            <Header />
            <div className="home-container">
                <div className="home-top-container">
                    <div className="home-top-left-container">
                        <h1 className="home-h1">Work from ladakh</h1>
                        <p className="home-top-p">India's first true digital tourism ecosystem</p>
                        <div className="home-top-icons-container">
                            {facebook}
                            {insta}
                        </div>
                    </div>
                    <img className="home-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwfqfS_ZPJhTKS1hqIGdRML61m5McqyJ5Qbg&s" alt="home-image" />
                </div>
                <div className="home-bottom-container">
                    <div className="home-bottom-inner-container">
                        <h1 className="home-bottom-h1">CHECK-IN</h1>
                        <p className="home-bottom-p">01 Feb 2022 {down}</p>
                    </div>
                    <div className="home-bottom-inner-container">
                        <h1 className="home-bottom-h1">CHECK-OUT</h1>
                        <p className="home-bottom-p">07 Feb 2022 {down}</p>
                    </div>
                    <div className="home-bottom-inner-container1">
                        <h1 className="home-bottom-h1">ROOMS</h1>
                        <div className="home-bottom-inner-inner-container">
                            <button className="home-bottom-icon-button" onClick={onClickMinus}>{minus}</button>
                            <p className="home-bottom-inner-p1">{count}</p>
                            <button className="home-bottom-icon-button" onClick={onClickPlus}>{plus}</button>
                        </div>
                    </div>
                    <div className="home-bottom-inner-container1">
                        <button className="home-link-button" onClick={onClickBook}>Book</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home