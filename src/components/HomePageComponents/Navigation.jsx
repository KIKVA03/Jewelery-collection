import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon, CartIcon, SarchIcon, UserIcon } from "../icons";
import { useState } from "react";

const Navigation = () => {
    const [burger_class, setBurgerclass] = useState("burger-Bar Unclicked");
    const [menu_class, setMenuClass] = useState("menu Hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const burgerMenuClick = () => {
        const a = !isMenuClicked;
        setIsMenuClicked(a);
        if (isMenuClicked) {
            setBurgerclass("burger-Bar Clicked");
            setMenuClass("menu Visable");

            // console.log;
            console.log(burger_class);
            console.log(menu_class);
        } else {
            setBurgerclass("burger-Bar Unclicked");
            setMenuClass("menu Hidden");

            console.log(burger_class);
            console.log(menu_class);
        }
    };
    return (
        <Component>
            <nav>
                <div className="burgerMenu" onClick={() => burgerMenuClick()}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={menu_class}>
                    <h3>SHOP</h3>
                    <h3>GIFT</h3>
                    <h3>ABOUT</h3>
                </div>
                <div className="linksWrapper">
                    <Link to="">SHOP</Link>
                    <Link to="">GiFT</Link>
                    <Link to="">ABOUT</Link>
                </div>
            </nav>

            <div className="LOGO-wrapper">
                <LogoIcon />
            </div>

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

export default Navigation;

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
        font-weight: 500;
    }
    .iconsWrapper {
        display: flex;
        gap: 24px;
        align-items: center;
    }
    .burgerMenu {
        height: 14px;
        width: 18px;
        display: none;
        flex-direction: column;
        gap: 4px;

        div {
            width: 100%;
            height: 2px;
            background-color: black;
        }
    }
    @media (max-width: 700px) {
        .burgerMenu {
            display: flex;
        }
        .linksWrapper {
            display: none;
        }
        .LOGO-wrapper {
            margin-left: 80px;
        }
    }
    /* toogle menu */
    .Hidden {
        display: none;
    }
    .Visable {
        width: 50%;
        height: 10vh;
        display: flex;
        flex-direction: column;
    }
`;
