import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
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
                className="instagramPhotosWrapper"
                modules={[Pagination]}
                spaceBetween={1}
                slidesPerView={4}
            >
                <SwiperSlide className="singleInstagramPhotos"></SwiperSlide>
                <SwiperSlide className="singleInstagramPhotos"></SwiperSlide>
                <SwiperSlide className="singleInstagramPhotos"></SwiperSlide>
                <SwiperSlide className="singleInstagramPhotos"></SwiperSlide>
                <SwiperSlide className="singleInstagramPhotos"></SwiperSlide>
                <SwiperSlide className="singleInstagramPhotos"></SwiperSlide>
                <SwiperSlide className="singleInstagramPhotos"></SwiperSlide>
            </Swiper>
        </Component>
    );
};

export default InstagramComponent;

const Component = styled.div`
    padding-top: 88px;
    p {
        padding: 0 0 0 80px;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
    }
    .instagramPhotosWrapper {
        padding-top: 40px;
        display: flex;

        .singleInstagramPhotos {
            padding: 200px;
            background-image: url("/images/blondeGirl.png");
        }
    }
`;
