import { memo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MobileNavigation = ({ toggleMobileNavBar }) => {
    return (
        <Container>
            <div>
                <Link className="mobileNavLinks">SHOP</Link>
                <Link className="mobileNavLinks">GIFT</Link>
                <Link className="mobileNavLinks">ABOUT</Link>
            </div>
        </Container>
    );
};

const Container = styled.div`
    padding: 20px 0;
    width: 100vw;
    height: calc(100vh - 54px);
    background: #ffffff;
    position: fixed;
    top: 54px;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 13px;
    animation: leftToRight 1s;
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

    @keyframes leftToRight {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0);
        }
    }
`;

export default memo(MobileNavigation);
