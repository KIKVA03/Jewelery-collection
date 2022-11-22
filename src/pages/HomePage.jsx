import React from "react";
import styled from "styled-components";
import Navigation from "../components/HomePageComponents/Navigation";
import JewelryCategorize from "../components/HomePageComponents/JewelryCategorize";
import ScrollNewjewelry from "../components/HomePageComponents/ScrollNewjewelry";
import GiftsComponent from "../components/HomePageComponents/GiftsComponent";
import NowTrendinJewelry from "../components/HomePageComponents/NowTrendinJewelry";
import InstagramComponent from "../components/HomePageComponents/InstagramComponent";
import CommitmentComponent from "../components/HomePageComponents/CommitmentComponent";
import Footer from "../components/HomePageComponents/Footer.jsx";

const HomePage = () => {
    return (
        <Component>
            <Navigation />

            <div className="cover">
                <div className="coverTitleWrapper">
                    <h1>NEW COLLECTION</h1>
                    <p>product short description</p>
                    <button>SHOP COLLECTION</button>
                </div>
            </div>

            <section>
                <JewelryCategorize />
                <ScrollNewjewelry title="NEW IN" />
            </section>

            <GiftsComponent />
            <NowTrendinJewelry title="NOW TRENDING" />
            <InstagramComponent title="INSTAGRAM" />
            <CommitmentComponent />
            <Footer />
        </Component>
    );
};

export default HomePage;

const Component = styled.div`
    padding: 53px 0 0 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .cover {
        height: 704.07px;
        background: url("/images/homePageCover.png");
        background-repeat: no-repeat;
        background-size: cover;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .coverTitleWrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            h1 {
                font-weight: 700;
                font-size: 48px;
                line-height: 100%;
            }
            p {
                font-weight: 300;
                font-size: 18px;
                line-height: 21px;
                margin: 8px 0 36px 0;
            }

            button {
                padding: 14px 80px;
                border: 0;
                background-color: white;
                cursor: pointer;
            }
            button:hover {
                background-color: black;
                color: white;
            }
        }
    }

    section {
        padding: 88px 80px;
        display: flex;
        flex-direction: column;
        gap: 88px;
    }
`;
