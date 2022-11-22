import React from "react";
import styled from "styled-components";
import { ArrowIcon } from "../icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const NowTrendinJewelry = ({ title }) => {
  return (
    <Component>
      <p>
        {title}
        <ArrowIcon />
      </p>
      <Swiper
        className="scrollJewelryWrapper"
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={4.5}
      >
        <SwiperSlide className=".singleScrolJewelryItem">
          <img src="/images/Rectangle 22.png" alt="error" />
          <p>Engraved gold ring</p>
          <p>Yellow gold, engraving</p>
          <p>$170</p>
        </SwiperSlide>
        <SwiperSlide className=".singleScrolJewelryItem">
          <img src="/images/Rectangle 22.png" alt="error" />
          <p>Engraved gold ring</p>
          <p>Yellow gold, engraving</p>
          <p>$170</p>
        </SwiperSlide>
        <SwiperSlide className=".singleScrolJewelryItem">
          <img src="/images/Rectangle 22.png" alt="error" />
          <p>Engraved gold ring</p>
          <p>Yellow gold, engraving</p>
          <p>$170</p>
        </SwiperSlide>
        <SwiperSlide className=".singleScrolJewelryItem">
          <img src="/images/Rectangle 22.png" alt="error" />
          <p>Engraved gold ring</p>
          <p>Yellow gold, engraving</p>
          <p>$170</p>
        </SwiperSlide>
        <SwiperSlide className=".singleScrolJewelryItem">
          <img src="/images/Rectangle 22.png" alt="error" />
          <p>Engraved gold ring</p>
          <p>Yellow gold, engraving</p>
          <p>$170</p>
        </SwiperSlide>
        <SwiperSlide className=".singleScrolJewelryItem">
          <img src="/images/Rectangle 22.png" alt="error" />
          <p>Engraved gold ring</p>
          <p>Yellow gold, engraving</p>
          <p>$170</p>
        </SwiperSlide>
      </Swiper>
    </Component>
  );
};

export default NowTrendinJewelry;

const Component = styled.div`
  padding: 0 80px;
  margin-top: 88px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .scrollJewelryWrapper {
    padding: 0 80px;
    margin: 0 -80px;
    display: flex;
    gap: 16px;

    .singleScrolJewelryItem {
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
