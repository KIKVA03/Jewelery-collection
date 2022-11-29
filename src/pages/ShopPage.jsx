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
            <ShopCategorise />
            <div className="contentWrapper">
                <ShopItAll />
                <img src="/images/AdvertisamentBanner.png.png" alt="#" className="img" />
                <Filter />
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

    .contentWrapper {
        margin-top: 32px;
        margin-left: 25vw;

        .img {
            margin-top: 130px;
            width: 100%;
            padding-right: 40px;
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
