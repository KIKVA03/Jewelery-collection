import styled from "styled-components";

import React from "react";

const JewelryCategorize = () => {
  return (
    <Container>
      <p>SHOP FINE JEWELRY</p>
      <div className="categorizeFirstWrapper">
        <div>Ring</div>
        <div>Men</div>
        <div>Earrings</div>
        <div>Gifts</div>
        <div>Necklaces</div>
        <div>Wedding</div>
        <div>Braclets</div>
        <div>Best sellers</div>
      </div>
    </Container>
  );
};

export default JewelryCategorize;

const Container = styled.div`
  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 40px;
  }
  .categorizeFirstWrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 24px 0;
    justify-content: space-between;

    div {
      font-size: 48px;
      line-height: 100%;
      padding: 14px 14px;
      width: 48%;
      border-bottom: 1px solid #c7c7c7;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
  }
  @media (max-width: 650px) {
    .categorizeFirstWrapper {
      display: flex;
      flex-direction: column;
      div {
        width: 100%;
      }
    }
  }
`;
