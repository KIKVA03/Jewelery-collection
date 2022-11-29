import React from "react";
import styled from "styled-components";
import JewelryCard from "../HomePageComponents/JewelryCard";

const Filter = () => {
    return (
        <Container>
            <h3>FILTER</h3>
            <div className="cardsWrapper">
                <JewelryCard
                    prodactName="Engraved gold ring"
                    nickName="Yellow gold, engraving"
                    price="$170"
                />
                <JewelryCard
                    prodactName="Engraved gold ring"
                    nickName="Yellow gold, engraving"
                    price="$170"
                />
                <JewelryCard
                    prodactName="Engraved gold ring"
                    nickName="Yellow gold, engraving"
                    price="$170"
                />
                <JewelryCard
                    prodactName="Engraved gold ring"
                    nickName="Yellow gold, engraving"
                    price="$170"
                />
                <JewelryCard
                    prodactName="Engraved gold ring"
                    nickName="Yellow gold, engraving"
                    price="$170"
                />
                <JewelryCard
                    prodactName="Engraved gold ring"
                    nickName="Yellow gold, engraving"
                    price="$170"
                />
            </div>

            <div className="buttonWrapper">
                <button className="button">EXPLORE MORE</button>
            </div>
        </Container>
    );
};

export default Filter;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;

    h3 {
        font-weight: 500px;
        text-decoration: underline solid 2px;
    }

    .cardsWrapper {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 16px;
        grid-row-gap: 48px;
    }

    .buttonWrapper {
        display: flex;
        justify-content: center;

        .button {
            padding: 14px 80px;
            border: 1px solid #000000;
            background-color: transparent;
        }
    }
`;
