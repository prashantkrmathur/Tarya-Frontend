import React, { useState } from 'react'
import { CloseOutlined, LineOutlined, StarFilled } from "@ant-design/icons"
import { Card, Col, Row } from 'antd';
import { Layout, } from 'antd';
const { Content } = Layout;
const footerStyle = {
    border: "1 px solid black"
};
const headingStyle = {
    textAlign: "center",
    fontFamily: "cursive",
    fontWeight: "bolder"
}

const Template = () => {
    const [firstStarClicked, setFirstStarClicked] = useState(false);
    const [secondStarClicked, setSecondStarClicked] = useState(false);
    const [thirdStarClicked, setThirdStarClicked] = useState(false);
    const [forthStarClicked, setForthStarClicked] = useState(false);
    const [fifthStarClicked, setFifthStarClicked] = useState(false);

    const handleFirstStarClick = (event) => {
        event.preventDefault();
        console.log("first");
        setFirstStarClicked(!firstStarClicked);
        window.location.href=("/review")
    }
    const handleSecondStarClick = (event) => {
        console.log("second");
        event.preventDefault();
        setSecondStarClicked(!secondStarClicked)
    }
    const handleThirdStarClick = (event) => {
        event.preventDefault();
        console.log("third");
        setThirdStarClicked(!thirdStarClicked)
    }
    const handleForthStarClick = (event) => {
        event.preventDefault();
        console.log("forth");
        setForthStarClicked(!forthStarClicked)
    }
    const handleFifthStarClick = (event) => {
        console.log("fifth");
        event.preventDefault();
        setFifthStarClicked(!fifthStarClicked)
    }
    return (
        <div>
            <Layout style={footerStyle}>
                <Content>
                    <div>
                        <CloseOutlined style={{ color: "black" }} />
                    </div>
                    <div style={headingStyle}>
                        <div>Vijay Dairy and sweets</div>
                        <div style={{ margin: "50px" }}>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ef3i0k1ilhdsistcykog" alt="logo-img"></img>
                        </div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h2> How was your food ? </h2>
                    </div>
                    <div style={{ textAlign: "center", color: "yellow", fontSize: "400%" }}><LineOutlined /></div>
                    <div style={{ textAlign: "center", fontSize: "200%" }}>
                        <StarFilled onClick={handleFirstStarClick} style={{ marginRight: "15px", color: `${firstStarClicked ? "red" : ""}` }} />
                        <StarFilled onClick={handleSecondStarClick} style={{ marginRight: "15px", color: `${firstStarClicked && secondStarClicked ? "red" : ""}` }} />
                        <StarFilled onClick={handleThirdStarClick} style={{ marginRight: "15px", color: `${firstStarClicked && secondStarClicked && thirdStarClicked ? "red" : ""}` }} />
                        <StarFilled onClick={handleForthStarClick} style={{ marginRight: "15px", color: `${firstStarClicked && secondStarClicked && thirdStarClicked && forthStarClicked ? "red" : ""}` }} />
                        <StarFilled onClick={handleFifthStarClick} style={{ marginRight: "15px", color: `${firstStarClicked && secondStarClicked && thirdStarClicked && forthStarClicked && fifthStarClicked ? "red" : ""}` }} />
                    </div>
                </Content>
            </Layout>
        </div>
    )
}

export default Template
