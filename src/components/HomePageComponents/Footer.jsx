import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Component>
      <div className="supportAndAboutWrapper">
        <div className="SupportContainer">
          <h3>SUPPORT</h3>
          <p>FAQ</p>
          <p>Shippin</p>
          <p>Returns</p>
          <p>Virtual Styling</p>
          <p>Jewelry Care</p>
          <p>Warranty</p>
          <p>Ring Sizer</p>
        </div>

        <div className="AboutUsContainer">
          <h3>ABOUT US</h3>
          <p>Missin</p>
          <p>Work Flow</p>
          <p>Contact US</p>
          <p>Privacy & Policy</p>
          <p>Terms & Conditions</p>
          <p>© 2022 Jewelry</p>
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
  justify-content: space-around;

  .supportAndAboutWrapper {
    display: flex;
    justify-content: space-around;
    flex: 1;

    .SupportContainer {
      display: flex;
      flex-direction: column;
      gap: 12px;
      h3 {
        padding: 0 0 4px 0;
        font-weight: 500;
      }
      p {
        font-weight: 300;
        font-size: 14px;
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
      p {
        font-weight: 300;
        font-size: 14px;
      }
    }
  }

  .JoinCommunityContainer {
    display: flex;
    flex-direction: column;
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
  } ;
`;
