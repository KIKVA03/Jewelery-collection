import React from "react";
import styled from "styled-components";
import { ArrowIcon } from "./icons";

const ScrollNewjewelry = () => {
  return (
    <Component>
      <p>
        NEW IN
        <ArrowIcon />
      </p>
      <div className="scrollJewelryWrapper">
        <div>
          <img src="/images/Rectangle 22.png" alt="error" />
          <p>Engraved gold ring</p>
          <p>Yellow gold, engraving</p>
          <p>$170</p>
        </div>
        <div>
          <img src="/images/Rectangle 22.png" alt="error" />
          <p>Engraved gold ring</p>
          <p>Yellow gold, engraving</p>
          <p>$170</p>
        </div>
        <div>
          <img src="/images/Rectangle 22.png" alt="error" />
          <p>Engraved gold ring</p>
          <p>Yellow gold, engraving</p>
          <p>$170</p>
        </div>
        <div>
          <img src="/images/Rectangle 22.png" alt="error" />
          <p>Engraved gold ring</p>
          <p>Yellow gold, engraving</p>
          <p>$170</p>
        </div>
        <div>
          <img src="/images/Rectangle 22.png" alt="error" />
          <p>Engraved gold ring</p>
          <p>Yellow gold, engraving</p>
          <p>$170</p>
        </div>
        <div>
          <img src="/images/Rectangle 22.png" alt="error" />
          <p>Engraved gold ring</p>
          <p>Yellow gold, engraving</p>
          <p>$170</p>
        </div>
      </div>
    </Component>
  );
};

export default ScrollNewjewelry;

const Component = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  p {
    display: flex;
    gap: 10px;
  }
  .scrollJewelryWrapper {
    padding: 0 80px;
    margin: 0 -80px;
    overflow: auto;
    display: flex;
    gap: 16px;

    div {
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
    }
  }
`;
