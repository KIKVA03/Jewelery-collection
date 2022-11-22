import styled from "styled-components";
import React from "react";

const GiftsComponent = () => {
    return (
        <Component>
            <p>GIFTS</p>
            <div className="giftButtonsWrapper">
                <button>FOR HER</button>
                <button>FOR HIM</button>
                <button>MOST GIFTED</button>
                <button>PERSONALIZED</button>
                <button>GIFTS UNDER $250</button>
                <button>GIFTS UNDER $500</button>
                <button>GIFTS OVER $500</button>
                <button>ALL GIFTS</button>
            </div>
        </Component>
    );
};

export default GiftsComponent;

const Component = styled.div`
    padding: 55px 80px;
    background-color: #faf7f3;
    display: flex;
    flex-direction: column;
    gap: 50px;
    P {
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
    }
    .giftButtonsWrapper {
        display: flex;
        gap: 28px;
        flex-wrap: wrap;

        button {
            padding: 8px 25px;
            background-color: #faf7f3;

            font-weight: 400;
            line-height: 32px;
            border-radius: 20px;
            border: 0.5px solid lightgray;
            cursor: pointer;
        }
        button:hover {
            background-color: lightgray;
        }
    }
`;
