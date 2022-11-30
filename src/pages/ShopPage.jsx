import { useState } from "react";
import Navigation from "../components/HomePageComponents/Navigation";
import ShopCategorise from "../components/ShopPageComponents/ShopCategorise";
import styled from "styled-components";
import ShopItAll from "../components/ShopPageComponents/ShopItAll";
import Footer from "../components/HomePageComponents/Footer";
import { CarIcon, ReturnIcon, ShieldIcon, CardIcon } from "../components/icons/index";
import MoreWaysToBrows from "../components/ShopPageComponents/MoreWaysToBrows";
import Filter from "../components/ShopPageComponents/Filter";

const ShopPage = () => {
    const [showCategorise, setShowCategorise] = useState(false);
    const [className, setClassName] = useState("Hidden");
    const modifyClass = () => {
        if (showCategorise === false) {
            setShowCategorise(true);
            setClassName("Shown");
        } else {
            setShowCategorise(false);
            setClassName("Hidden");
        }
    };
    return (
        <Component>
            <Navigation />

            <div className="motherDiv">
                <div className="categoriseWrapper">
                    <ShopCategorise />
                </div>

                <div className="contentWrapper">
                    <ShopItAll />
                    <img src="/images/AdvertisamentBanner.png.png" alt="#" className="img" />
                    <Filter />
                </div>
            </div>

            <div className="greenSection">
                <div>
                    <CarIcon />
                    <p>Free Shipping on</p>
                    <p>Orders over $100</p>
                </div>

                <div>
                    <ReturnIcon />
                    <p>Free 60-Day Returns</p>
                </div>

                <div>
                    <ShieldIcon />
                    <p>2-Year Warranty</p>
                </div>

                <div>
                    <CardIcon />
                    <p>Shop Now, play Later</p>
                    <p>With Klarna</p>
                </div>
            </div>

            <MoreWaysToBrows />

            <Footer />
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
            </div>

            <button className="categoriseButton" onClick={modifyClass}>
                CLICK
            </button>
        </Component>
    );
};

export default ShopPage;

const Component = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    .motherDiv {
        padding: 0 48px;
        margin-top: 54px;

        display: flex;
        gap: 48px;

        .categoriseWrapper {
            min-width: max-content;
            position: relative;
            display: flex;
            flex-direction: column;
            width: 20vw;
        }

        .contentWrapper {
            display: flex;
            flex-direction: column;
            gap: 100px;
            width: 80vw;

            .img {
                width: 100%;
            }
        }
    }

    .greenSection {
        height: 100%;
        width: 100%;
        padding: 32px 0;
        background: #9fd6c9;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 13px;
            cursor: pointer;
        }

        div:hover p {
            color: gray;
        }
    }
    .categoriseButton {
        padding: 35px;
        bottom: 0;
        background-color: lightgrey;
        border: 0;
        border-radius: 50%;
        display: none;
        position: fixed;
        z-index: 20;
        cursor: pointer;
    }

    .Hidden {
        display: none;
        animation: rightToLeft 1s;
    }
    .Shown {
        width: 100%;
        background-color: red;
        top: 54px;
        position: fixed;
        display: flex;
        z-index: 20;
        animation: leftToRight 1s;
        ul {
            li {
                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
                list-style: none;
                cursor: pointer;
            }
        }
    }

    @media (max-width: 1030px) {
        .motherDiv {
            justify-content: center;
            padding: 0 24px;

            .categoriseWrapper {
                display: none;
            }
            .contentWrapper {
                width: 100%;
                justify-content: center;
            }
        }
        .categoriseButton {
            display: flex;
        }
    }
    @media (max-width: 650px) {
        .greenSection {
            height: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            justify-content: center;
            align-items: center;
        }
    }
    @keyframes leftToRight {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0);
        }
    }
    @keyframes rightToLeft {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }
`;
