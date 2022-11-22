import styled from "styled-components";
import React from "react";

const CommitmentComponent = () => {
  return (
    <Component>
      <div className="textAndbuttonWrapper">
        <div className="textWrapper">
          <h1>OUR COMMITMENT</h1>
          <p>PRODACT SHORT DESCRIPTION</p>
        </div>
        <div className="buttonWrapper">
          <button>MORE</button>
        </div>
      </div>
      <div className="image"></div>
    </Component>
  );
};

export default CommitmentComponent;

const Component = styled.div`
  margin: 80px 0;
  display: flex;
  align-items: center;
  .textAndbuttonWrapper {
    padding: 0 0 0 145px;
    flex: 1;
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
    .buttonWrapper {
      button {
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
  .image {
    flex: 1;
    padding: 220px 30px;
    background-image: url("/images/women.png");
    background-size: cover;
  }
`;
