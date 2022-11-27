import React from "react";
import Navigation from "../components/HomePageComponents/Navigation";
import ShopCategorise from "../components/ShopPageComponents/ShopCategorise";
import styled from "styled-components";
import ShopItAll from "../components/ShopPageComponents/ShopItAll";
import Footer from "../components/HomePageComponents/Footer";

const ShopPage = () => {
    return (
        <Component>
            <Navigation />
            <ShopCategorise />
            <div className="div">
                <ShopItAll />
                <ShopItAll />
                <ShopItAll />
                <ShopItAll />
                <ShopItAll />
            </div>
            <Footer />
        </Component>
    );
};

export default ShopPage;

const Component = styled.div`
    display: flex;
    flex-direction: column;

    .div {
        margin-left: 25vw;
    }
`;
