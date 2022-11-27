import { useEffect, useState } from "react";
import styled from "styled-components";

const ShopCategorise = () => {
    return (
        <Component>
            <p>New Arrival</p>
            <p>Best Sellers</p>
            <p>Shop All</p>
            <p>Earrings</p>
            <p>Single Earrings</p>
            <p>Rings</p>
            <p>Necklaces</p>
            <p>Necklaces</p>
            <p>Braclets + Ankles</p>
            <p>Charms + Pendants</p>
            <p>Wedding</p>
            <p>Men's</p>
            <p>Lifestyle</p>
            <p>Jewelry Care Kit</p>
        </Component>
    );
};

export default ShopCategorise;

const Component = styled.div`
    height: 100vh;
    width: 15vw;
    padding-left: 48px;
    margin-top: 88px;
    background-color: transparent;
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 9px;
    /* z-index: 12; */
    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        cursor: pointer;
    }
`;
