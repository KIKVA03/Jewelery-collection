import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const InstagramComponent = ({ title }) => {
    return (
        <Component>
            <p>{title}</p>
            <Swiper
                className="scrollJewelryWrapper"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={4}
            >
                <SwiperSlide className=".singleScrolJewelryItem">hey</SwiperSlide>
                <SwiperSlide className=".singleScrolJewelryItem">hey</SwiperSlide>
                <SwiperSlide className=".singleScrolJewelryItem">hey</SwiperSlide>
                <SwiperSlide className=".singleScrolJewelryItem">hey</SwiperSlide>
                <SwiperSlide className=".singleScrolJewelryItem">hey</SwiperSlide>
                <SwiperSlide className=".singleScrolJewelryItem">hey</SwiperSlide>
            </Swiper>
        </Component>
    );
};

export default InstagramComponent;

const Component = styled.div`
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    gap: 40px;

    p {
        padding: 0 0 0 80px;
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
            width: 400px;
            height: 400px;
            background-color: blue;
            /* background-image: url("/public/images/Rectangle 22.png"); */
            /* img {
                width: 400px;
                height: 400px;
                aspect-ratio: 1 / 1;
                object-fit: cover;
                object-position: center;
            } */
        }
    }
`;
