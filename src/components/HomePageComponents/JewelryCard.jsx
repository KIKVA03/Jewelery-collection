import React from "react";
import styled from "styled-components";

const JewelryCard = ({ prodactName, nickName, price }) => {
    return (
        <Container>
            <img src="/images/Rectangle 22.png" alt="error" />
            <p>{prodactName}</p>
            {nickName && <p>{nickName}</p>}
            {price && <p>{price}</p>}
        </Container>
    );
};

export default JewelryCard;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    img {
        height: 300px;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        object-position: center;
    }

    p {
        &:first-of-type {
            font-weight: 600;
        }
        &:nth-of-type(2) {
            font-weight: 400;
            font-size: 14px;
        }
        &:last-of-type {
            font-weight: 300;
            font-size: 14px;
        }
    }
`;
