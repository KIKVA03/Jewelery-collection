import { memo } from "react";
import styled from "styled-components";

const MobileNavigation = ({ toggleMobileNavBar }) => {
    return (
        <Container>
            <div>
                <h3>SHOP</h3>
                <h3>GIFT</h3>
                <h3>ABOUT</h3>
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

    header {
        display: flex;
        justify-content: space-between;

        .LOGO-wrapper {
            display: flex;
            justify-content: center;
        }

        .Xicon-wraper {
            margin-left: 16px;
            border: none;
            display: flex;
            align-items: center;
            cursor: pointer;
        }
    }

    h3 {
        padding: 29px 10px;
        font-weight: 300;
        font-size: 32px;
        line-height: 100%;
        border-bottom: 0.5px solid black;
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
