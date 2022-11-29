import React from "react";
import Navigation from "../components/HomePageComponents/Navigation";
import ShopCategorise from "../components/ShopPageComponents/ShopCategorise";
import styled from "styled-components";
import ShopItAll from "../components/ShopPageComponents/ShopItAll";
import Footer from "../components/HomePageComponents/Footer";
import { CarIcon, ReturnIcon, ShieldIcon, CardIcon } from "../components/icons/index";
import MoreWaysToBrows from "../components/ShopPageComponents/MoreWaysToBrows";
import Filter from "../components/ShopPageComponents/Filter";

const ShopPage = () => {
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
        </Component>
    );
};

export default ShopPage;

const Component = styled.div`
    display: flex;
    flex-direction: column;

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
        margin-top: 40px;
        padding: 32px 0;
        height: 100%;
        width: 100%;
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

    @media (max-width: 1030px) {
        .contentWrapper {
            margin-left: 48px;

            .img {
                padding-right: 0;
            }
        }
    }
    @media (max-width: 650px) {
        .greenSection {
            height: 100%;

            flex-wrap: wrap;
            justify-content: center;
        }
    }
`;

// {/* <div className="contentWrapper">
//                 <ShopItAll />
//                 <img src="/images/AdvertisamentBanner.png.png" alt="#" className="img" />
//                 <Filter />
//             </div> */}
