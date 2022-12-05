import { memo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./ShopPageComponents/responsiveCategorise";

const MobileNavigation = ({ isShownResponsiveNavigation }) => {
    return (
        <Container
            // hide={isShownResponsiveNavigation}
            className={`initial ${isShownResponsiveNavigation}`}
        >
            <div>
                <Link to="/Shop" className="mobileNavLinks">
                    SHOP
                </Link>
                <Link className="mobileNavLinks">GIFT</Link>
                <Link className="mobileNavLinks">ABOUT</Link>
            </div>
        </Container>
    );
};

export default memo(MobileNavigation);

const Container = styled.div`
    padding: 20px 0;
    width: 100vw;
    height: 100vh;
    background: #ffffff;
    position: fixed;
    top: 54px;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 13px;
    transition: 1s;

    &.shown {
        /* animation: leftToRight 1s; */
        transform: translateX(0%);
    }
    &.hidden {
        transform: translateX(-100%);
    }

    div {
        display: flex;
        flex-direction: column;
        .mobileNavLinks {
            text-decoration: none;
            padding: 29px 10px;
            font-weight: 300;
            font-size: 32px;
            line-height: 100%;
            border-bottom: 0.5px solid black;
        }
    }
`;
