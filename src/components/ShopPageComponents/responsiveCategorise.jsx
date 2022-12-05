import { useState } from "react";
import styled from "styled-components";
import { Xicon } from "../icons";

const ResponsiveCategorise = () => {
    const [showCategorise, setShowCategorise] = useState(false);
    const [className, setClassName] = useState("Hidden");
    const [buttonsClass, setButtonClass] = useState("buttonShown");
    const modifyClass = event => {
        if (showCategorise === false) {
            setShowCategorise(true);
            setClassName("Shown");
            setButtonClass("buttonHidden");
        } else {
            setShowCategorise(false);
            setClassName("Hidden");
        }
    };
    const XbuttonFunction = () => {
        setButtonClass("buttonShown");
        setClassName("Hidden");
    };
    return (
        <Component>
            <div className={className}>
                <ul>
                    <li>New Arrival</li>
                    <li>Best Sellers</li>
                    <li>Shop All</li>
                    <li>Earrings</li>
                    <li>Single Earrings</li>
                    <li>Rings</li>
                    <li>Necklaces</li>
                    <li>Necklaces</li>
                    <li>Braclets + Ankles</li>
                    <li>Charms + Pendants</li>
                    <li>Wedding</li>
                    <li>Men's</li>
                    <li>Lifestyle</li>
                    <li>Jewelry Care Kit</li>
                </ul>

                <button className="XButton" onClick={XbuttonFunction}>
                    <Xicon />
                </button>
            </div>

            <button className={buttonsClass} onClick={modifyClass}>
                FILTER
            </button>
        </Component>
    );
};

export default ResponsiveCategorise;

const Component = styled.div`
    .Hidden {
        padding: 10px 30px;
        width: 100%;
        height: 100%;
        background-color: white;
        border: 1px solid black;
        border-radius: 20px;
        position: fixed;
        top: 54px;
        display: flex;
        justify-content: space-between;
        z-index: 20;
        animation: FromTopToDown 1s forwards;
        ul {
            li {
                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
                list-style: none;
                cursor: pointer;
            }
        }
        .XButton {
            height: max-content;
            background-color: transparent;
            border: 0;
            cursor: pointer;
        }
    }
    .Shown {
        padding: 10px 30px;
        width: 100%;
        height: 100%;
        background-color: white;
        border: 1px solid black;
        border-radius: 20px;
        position: fixed;
        top: 54px;
        display: flex;
        justify-content: space-between;
        z-index: 20;
        animation: downToUp 1s forwards;
        ul {
            li {
                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
                list-style: none;
                cursor: pointer;
            }
        }
        .XButton {
            height: max-content;
            background-color: transparent;
            border: 0;
            cursor: pointer;
        }
    }

    .buttonShown {
        padding: 25px;
        bottom: 0;
        background-color: lightgrey;
        border: solid black 0.5px;
        border-radius: 50%;
        display: none;
        position: fixed;
        z-index: 10;
        cursor: pointer;
    }

    @media (max-width: 1030px) {
        .buttonShown {
            display: flex;
        }
    }
    @keyframes downToUp {
        from {
            transform: translateY(100%);
        }
        to {
            transform: translateY(0);
        }
    }
    @keyframes FromTopToDown {
        from {
            transform: translateY(0%);
        }
        to {
            transform: translateY(100%);
        }
    }
`;
