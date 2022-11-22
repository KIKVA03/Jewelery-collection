import styled from "styled-components";

import React from "react";

const JewelryCategorize = () => {
  return (
    <Container>
      <div className="categorizeWrapper">
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
      </div>
    </Container>
  );
};

export default JewelryCategorize;

const Container = styled.div`
  .categorizeWrapper {
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
        font-weight: 400;
        font-size: 48px;
        line-height: 100%;
        padding: 14 0px;
        width: 48%;
        border-bottom: 1px solid #c7c7c7;
        cursor: pointer;
      }
    }
  }
`;
