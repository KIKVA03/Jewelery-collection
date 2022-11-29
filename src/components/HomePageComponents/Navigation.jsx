import { useState, useCallback, memo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon, CartIcon, SarchIcon, UserIcon, BurgerIcon } from "../icons";
import MobileNavigation from "../MobileNavigation";

const Navigation = () => {
    const [isMobileNavShown, setIsMobileNavShown] = useState(false);

    const toggleMobileNavBar = useCallback(() => {
        setIsMobileNavShown(prev => !prev);
    }, []);

    return (
        <Component>
            {isMobileNavShown && <MobileNavigation toggleMobileNavBar={toggleMobileNavBar} />}

            <nav className="navigation">
                <button className="burgerMenu" onClick={toggleMobileNavBar}>
                    <BurgerIcon />
                </button>

                <div className="linksWrapper">
                    <Link to="/shop">SHOP</Link>
                    <Link to="">GiFT</Link>
                    <Link to="">ABOUT</Link>
                </div>
            </nav>

            <Link to="/" className="LOGO-wrapper">
                <LogoIcon />
            </Link>

            <div className="iconsWrapper">
                <Link to="">
                    <SarchIcon />
                </Link>
                <Link to="">
                    <CartIcon />
                </Link>
                <Link to="">
                    <UserIcon />
                </Link>
                <select name="" id="">
                    <option value="en">EN</option>
                    <option value="ka">KA</option>
                </select>
            </div>
        </Component>
    );
};

export default memo(Navigation);

const Component = styled.header`
    width: 100%;
    padding: 16px 68px;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .navigation {
        display: flex;
        align-items: center;
    }

    .linksWrapper {
        font-size: 16px;
        display: flex;
        align-items: center;
        gap: 35px;

        a {
            text-decoration: none;
            font-weight: 300;
        }
    }
    .LOGO-wrapper {
        display: flex;
        font-weight: 500;
    }
    .iconsWrapper {
        display: flex;
        gap: 24px;
        align-items: center;
    }
    select {
    }
    .burgerMenu {
        display: none;
    }

    @media (max-width: 700px) {
        padding: 16px 30px;

        .burgerMenu {
            border: none;
            margin-right: 16px;
            display: flex;
            align-items: center;
        }
        .linksWrapper {
            display: none;
        }
        .LOGO-wrapper {
            flex: 1;
            justify-self: start;
        }
    }
`;
