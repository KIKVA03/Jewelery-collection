import React from "react";
import styled from "styled-components";

const Filter = () => {
    return (
        <Contauner>
            <h3>FILTER</h3>
            <div className="imgWrapper">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <div className="buttonWrapper">
                    <button>EXPLORE MORE</button>
                </div>
            </div>
        </Contauner>
    );
};

export default Filter;

const Contauner = styled.div`
    margin-top: 88px;
    display: flex;
    flex-direction: column;
    gap: 48px;
    h3 {
        font-weight: 500px;
        text-decoration: underline solid 2px;
    }
    .imgWrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;

        img {
            width: 300px;
            height: 300px;
            background-color: #0b9cdf;
        }
        .buttonWrapper {
            width: 79%;
            display: flex;
            justify-content: center;
            button {
                padding: 14px 80px;
                background-color: transparent;
                border: 1px solid #000000;
            }
        }
    }
`;
