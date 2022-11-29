import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
import JewelryCard from "../HomePageComponents/JewelryCard";

const ShopItAll = () => {
    return (
        <Component>
            <h1>SHOP IT ALL</h1>

            <Swiper
                className="swiper scrollJewelryWrapper"
                modules={[Pagination]}
                loop
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                    600: { slidesPerView: 2 },
                    1000: { slidesPerView: 3 },
                    1400: { slidesPerView: 4 },
                }}
            >
                <SwiperSlide>
                    <JewelryCard prodactName="Engraved gold ring" />
                </SwiperSlide>
                <SwiperSlide>
                    <JewelryCard prodactName="Engraved gold ring" />
                </SwiperSlide>
                <SwiperSlide>
                    <JewelryCard prodactName="Engraved gold ring" />
                </SwiperSlide>
                <SwiperSlide>
                    <JewelryCard prodactName="Engraved gold ring" />
                </SwiperSlide>
                <SwiperSlide>
                    <JewelryCard prodactName="Engraved gold ring" />
                </SwiperSlide>
                <SwiperSlide>
                    <JewelryCard prodactName="Engraved gold ring" />
                </SwiperSlide>
                <SwiperSlide>
                    <JewelryCard prodactName="Engraved gold ring" />
                </SwiperSlide>
                <SwiperSlide>
                    <JewelryCard prodactName="Engraved gold ring" />
                </SwiperSlide>
                <SwiperSlide>
                    <JewelryCard prodactName="Engraved gold ring" />
                </SwiperSlide>
                <SwiperSlide>
                    <JewelryCard prodactName="Engraved gold ring" />
                </SwiperSlide>
            </Swiper>
        </Component>
    );
};

export default ShopItAll;

const Component = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    h1 {
        font-weight: 700;
        font-size: 40px;
        line-height: 44px;
    }

    .scrollJewelryWrapper {
        max-width: 80vw;
        padding: 0 80px;
        margin-right: -48px;
        display: flex;
    }

    @media (max-width: 1030px) {
        h1 {
            text-align: center;
        }
        .scrollJewelryWrapper {
            margin-right: 0;
            width: 100%;
        }
    }
`;
