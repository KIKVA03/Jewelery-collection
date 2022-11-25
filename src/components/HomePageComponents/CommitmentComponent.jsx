import styled from "styled-components";
import React from "react";

const CommitmentComponent = () => {
    return (
        <Component>
            <div className="textAndbuttonWrapper">
                <div>
                    <div className="textWrapper">
                        <h1>OUR COMMITMENT</h1>
                        <p>PRODACT SHORT DESCRIPTION</p>
                    </div>

                    <div className="buttonWrapper">
                        <button>MORE</button>
                    </div>
                </div>
            </div>

            <div className="imageWrapper">
                <img src="/images/women.png" alt="rame" />
            </div>
        </Component>
    );
};

export default CommitmentComponent;

const Component = styled.div`
    margin: 80px 0;
    display: flex;
    align-items: center;

    .textAndbuttonWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;

        div {
            display: flex;
            flex-direction: column;
            gap: 50px;

            .textWrapper {
                display: flex;
                flex-direction: column;
                gap: 8px;

                h1 {
                    font-weight: 700;
                    font-size: 48px;
                    line-height: 57px;
                }

                p {
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 21px;
                }
            }
        }
        .buttonWrapper {
            button {
                width: max-content;
                padding: 14px 80px;
                font-weight: 500;
                background-color: transparent;

                border: 1px solid black;
                cursor: pointer;
            }
            button:hover {
                background-color: black;
                color: white;
            }
        }
    }
    .imageWrapper {
        flex: 1;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        gap: 68px;
        padding: 0 40px;

        .textAndbuttonWrapper {
            div {
                align-items: center;
            }
        }

        .imageWrapper {
            width: 100%;
        }
    } ;
`;
