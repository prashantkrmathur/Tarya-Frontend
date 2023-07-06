import { StarFilled } from '@ant-design/icons';
import { Card } from 'antd'
import React, { useState } from 'react'
import { Emoji } from 'emoji-mart';
import { Button, Space } from 'antd';
import { Input } from 'antd';
const { TextArea } = Input;

const Review = (props) => {
    const { title } = props;
    const [firstStarClicked, setFirstStarClicked] = useState(true);
    const [secondStarClicked, setSecondStarClicked] = useState(false);
    const [thirdStarClicked, setThirdStarClicked] = useState(false);
    const [forthStarClicked, setForthStarClicked] = useState(false);
    const [fifthStarClicked, setFifthStarClicked] = useState(false);

    const [firstButtonClicked, setFirstButtonClicked] = useState(false);
    const [secondButtonClicked, setSecondButtonClicked] = useState(false);
    const [thirdButtonClicked, setThirdButtonClicked] = useState(false);
    const [forthButtonClicked, setForthButtonClicked] = useState(false);

    const [rating, setRating] = useState(0);
    const [review, setReview] = useState([]);

    const handleFirstStarClick = (event) => {
        event.preventDefault();
        console.log("first");
        setFirstStarClicked(!firstStarClicked);
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

    const handleFirstButtonClick = (event) => {
        event.preventDefault();
        console.log("first");
        setFirstButtonClicked(!firstButtonClicked);
    }
    const handleSecondButtonClick = (event) => {
        console.log("second");
        event.preventDefault();
        setSecondButtonClicked(!secondButtonClicked)
    }
    const handleThirdButtonClick = (event) => {
        event.preventDefault();
        console.log("third");
        setThirdButtonClicked(!thirdButtonClicked)
    }
    const handleForthButtonClick = (event) => {
        event.preventDefault();
        console.log("forth");
        setForthButtonClicked(!forthButtonClicked)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (firstStarClicked && secondStarClicked && thirdStarClicked && forthStarClicked && fifthStarClicked) {
            setRating(5);
        } else if (firstStarClicked && secondStarClicked && thirdStarClicked && forthStarClicked) {
            setRating(4);
        } else if (firstStarClicked && secondStarClicked && thirdStarClicked) {
            setRating(3);
        } else if (firstStarClicked && secondStarClicked) {
            setRating(2);
        } else {
            setRating(1);
        }

        if (firstButtonClicked && secondButtonClicked && thirdButtonClicked && forthButtonClicked) {
            review.push("Food quality", "Portion size", "Packaging", "Value for money")
        } else if (firstButtonClicked && secondButtonClicked && thirdButtonClicked) {
            review.push("Food quality", "Portion size", "Packaging")
        } else if (firstButtonClicked && secondButtonClicked) {
            review.push("Food quality", "Portion size")
        } else {
            review.push("Food quality")
        }

    }
    return (
        <div style={{ width: "40%", margin: "auto", textAlign: "center" }}>
            <Card
                bordered={false}
                style={{

                }}
            >
                <h2>
                    {fifthStarClicked ? "My food was aweosme " : forthStarClicked ? "My food was average " : thirdStarClicked ? "My food was good" : "My food was poor" }
               </h2>
                <div>
                    <div>
                        <div style={{ textAlign: "center", fontSize: "200%" }}>
                            <StarFilled onClick={handleFirstStarClick} style={{ marginRight: "15px", color: `${firstStarClicked ? "red" : ""}` }} />
                            <StarFilled onClick={handleSecondStarClick} style={{ marginRight: "15px", color: `${firstStarClicked && secondStarClicked ? "red" : ""}` }} />
                            <StarFilled onClick={handleThirdStarClick} style={{ marginRight: "15px", color: `${firstStarClicked && secondStarClicked && thirdStarClicked ? "red" : ""}` }} />
                            <StarFilled onClick={handleForthStarClick} style={{ marginRight: "15px", color: `${firstStarClicked && secondStarClicked && thirdStarClicked && forthStarClicked ? "red" : ""}` }} />
                            <StarFilled onClick={handleFifthStarClick} style={{ marginRight: "15px", color: `${firstStarClicked && secondStarClicked && thirdStarClicked && forthStarClicked && fifthStarClicked ? "red" : ""}` }} />
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </Card>

            <Card>
                <h2>What impressed you </h2>
                <Space
                    direction="horizontal"
                    style={{
                        width: '100%',
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    <Button onClick={handleFirstButtonClick} danger block type={firstButtonClicked ? "primary" : "default"}>
                        Food quality
                    </Button>
                    <Button onClick={handleSecondButtonClick} danger block type={secondButtonClicked ? "primary" : "default"}>
                        Portion size
                    </Button>
                    <Button onClick={handleThirdButtonClick} danger block type={thirdButtonClicked ? "primary" : "default"}>
                        Packaging
                    </Button>
                    <Button onClick={handleForthButtonClick} danger block type={forthButtonClicked ? "primary" : "default"}>
                        Value for money
                    </Button>
                </Space>
            </Card>
            <Card>
                <h2>Add detailed review</h2>
                <TextArea rows={4} placeholder="Write here" maxLength={6} />
                <Button onClick={handleSubmit} type="primary" danger style={{ width: "10em", height: "3em", textAlign: "center", marginTop: "5em" }}>Submit</Button>
            </Card>

        </div>
    )
}

export default Review
