import styled from "styled-components";
import { useState } from "react";

const BurgerIcon = () => {
    const [burgerBarClass, setBurgerClass] = useState("burgerBar unclicked");

    const [burgerClick, setBurgerClick] = useState(false);

    const modifyBurger = () => {
        setBurgerClick(prev => !prev);
        console.log(burgerClick);
        if (burgerClick === false) {
            setBurgerClass("burgerBar clicked");
            console.log(burgerBarClass);
        } else {
            setBurgerClass("burgerBar unclicked");
            console.log(burgerBarClass);
        }
    };
    return (
        <Container>
            <button className="burgerWrapper" onClick={modifyBurger}>
                <div className={burgerBarClass}></div>
                <div className={burgerBarClass}></div>
                <div className={burgerBarClass}></div>
            </button>
        </Container>
    );
};

export default BurgerIcon;

const Container = styled.div`
    .burgerWrapper {
        height: 100%;
        background-color: white;
        border: 0;
        display: flex;
        flex-direction: column;
        gap: 4px;

        .burgerBar {
            height: 2px;
            width: 18px;
            background-color: black;
            border-radius: 5px;
            transition: 0.5s;
        }
    }

    /* --------------------animations-------------------- */

    .burgerBar.clicked:nth-child(1) {
        transform: rotate(45deg) translateX(4px);
        transition: ease-out 0.5s;
    }
    .burgerBar.clicked:nth-child(2) {
        transform: rotate(-45deg) translateX(4px);
        transition: ease-out 0.5s;
    }
    .burgerBar.clicked:nth-child(3) {
        background-color: transparent;
    }
    .burgerBar.unclicked:nth-child(1) {
        transform: rotate(0) translateX(0px);
        transition: ease-out 0.5s;
    }
    .burgerBar.unclicked:nth-child(2) {
        transform: rotate(0) translateX(0);
        transition: ease-out 0.5s;
    }
    .burgerBar.unclicked:nth-child(3) {
        background-color: black;
        animation-delay: 3s;
    }
`;
