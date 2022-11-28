import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Component>
            <div className="supportAndAboutWrapper">
                <div className="SupportContainer">
                    <h3>SUPPORT</h3>
                    <Link className="Link">
                        <span>FAQ</span>
                    </Link>
                    <Link className="Link">Shippin</Link>
                    <Link className="Link">Returns</Link>
                    <Link className="Link">Virtual Styling</Link>
                    <Link className="Link">Jewelry Care</Link>
                    <Link className="Link">Warranty</Link>
                    <Link className="Link">Ring Sizer</Link>
                </div>

                <div className="AboutUsContainer">
                    <h3>ABOUT US</h3>
                    <Link className="AboutLink">Missin</Link>
                    <Link className="AboutLink">Work Flow</Link>
                    <Link className="AboutLink">Contact US</Link>
                    <Link className="AboutLink">Privacy & Policy</Link>
                    <Link className="AboutLink">Terms & Conditions</Link>
                    <Link className="AboutLink">© 2022 Jewelry</Link>
                </div>
            </div>

            <div className="JoinCommunityContainer">
                <h3>JOIN THE COMMUNITY</h3>
                <p>Insider info on new arrivals,early access,and everything fine</p>
                <input type="email" placeholder="Email@example.com" />
                <button>JOIN</button>
            </div>
        </Component>
    );
};

export default Footer;
const Component = styled.footer`
    padding: 90px 0;
    background: #faf7f3;
    display: flex;
    justify-content: space-between;
    z-index: 15;

    .supportAndAboutWrapper {
        display: flex;
        justify-content: space-around;
        flex: 2;

        .SupportContainer {
            display: flex;
            flex-direction: column;
            gap: 12px;
            h3 {
                padding: 0 0 4px 0;
                font-weight: 500;
            }
            .Link {
                position: relative;
                text-decoration: none;
                font-weight: 300;
                font-size: 14px;

                &:after {
                    content: "";
                    height: 1px;
                    width: 0%;
                    position: absolute;
                    background-color: black;
                    bottom: 0;
                    left: 0;
                    transition: 0.5s;
                }
                &:hover::after {
                    width: 100%;
                }
            }
        }
        .AboutUsContainer {
            display: flex;
            flex-direction: column;
            gap: 12px;
            h3 {
                padding: 0 0 4px 0;
                font-weight: 500;
            }
            .AboutLink {
                position: relative;
                text-decoration: none;
                font-weight: 300;
                font-size: 14px;
            }
            .AboutLink::after {
                content: "";
                height: 1px;
                width: 0%;
                position: absolute;
                background-color: black;
                bottom: 0;
                left: 0;
                transition: 0.5s;
            }
            .AboutLink:hover::after {
                height: 1px;
                width: 100%;
            }
        }
    }

    .JoinCommunityContainer {
        padding-right: 5%;
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 12px;

        h3 {
            padding: 0 0 4px 0;
            font-weight: 500;
        }
        p {
            font-weight: 300;
            font-size: 14px;
        }
        input {
            padding: 20px 0;
            background-color: transparent;
            border: none;
            border-bottom: 0.5px solid black;
            outline: 0;
        }
        button {
            padding: 20px 170px;
            color: lightgray;
            background: transparent;
            border: 0.5px solid lightgray;
            cursor: pointer;
        }
    }

    @media (max-width: 700px) {
        padding: 45px 40px;
        flex-direction: column;
        gap: 40px;

        .JoinCommunityContainer {
            padding: 0;
        }
    } ;
`;
