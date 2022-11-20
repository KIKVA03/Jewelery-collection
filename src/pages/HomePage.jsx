import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import JewelryCategorize from "../components/JewelryCategorize";
import ScrollNewjewelry from "../components/ScrollNewjewelry";

const HomePage = () => {
  return (
    <Component>
      <Navigation />

      <div className="cover">
        <div className="coverTitleWrapper">
          <h1>NEW COLLECTION</h1>
          <p>product short description</p>
          <button>SHOP COLLECTION</button>
        </div>
      </div>

      <section>
        <JewelryCategorize />
        <ScrollNewjewelry />
      </section>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod suscipit, eligendi
        officiis culpa provident aperiam doloremque explicabo molestias unde et voluptatum pariatur
        deleniti ea quidem perferendis cupiditate deserunt voluptates?
      </div>
    </Component>
  );
};

export default HomePage;

const Component = styled.div`
  padding: 53px 0 0 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .cover {
    height: 704.07px;
    background: url("/images/homePageCover.png");
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .coverTitleWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        font-weight: 700;
        font-size: 48px;
        line-height: 100%;
      }
      p {
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        margin: 8px 0 36px 0;
      }

      button {
        padding: 14px 80px;
        border: 0;
        background-color: white;
        cursor: pointer;
      }
    }
  }

  section {
    padding: 88px 80px;
    display: flex;
    flex-direction: column;
    gap: 88px;
  }
`;
