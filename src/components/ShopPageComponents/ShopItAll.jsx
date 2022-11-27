import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";

const ShopItAll = () => {
    return (
        <Component>
            <h1>Shop It All</h1>
            <Swiper
                className="swiper scrollJewelryWrapper"
                modules={[Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                    600: { slidesPerView: 2 },
                    1000: { slidesPerView: 3 },
                    1400: { slidesPerView: 4 },
                }}
            >
                <SwiperSlide className="singleScrolJewelryItem">
                    <img src="/images/Rectangle 22.png" alt="error" />
                    <p>Engraved gold ring</p>
                    <p>Yellow gold, engraving</p>
                    <p>$170</p>
                </SwiperSlide>
                <SwiperSlide className="singleScrolJewelryItem">
                    <img src="/images/Rectangle 22.png" alt="error" />
                    <p>Engraved gold ring</p>
                    <p>Yellow gold, engraving</p>
                    <p>$170</p>
                </SwiperSlide>
                <SwiperSlide className="singleScrolJewelryItem">
                    <img src="/images/Rectangle 22.png" alt="error" />
                    <p>Engraved gold ring</p>
                    <p>Yellow gold, engraving</p>
                    <p>$170</p>
                </SwiperSlide>
                <SwiperSlide className="singleScrolJewelryItem">
                    <img src="/images/Rectangle 22.png" alt="error" />
                    <p>Engraved gold ring</p>
                    <p>Yellow gold, engraving</p>
                    <p>$170</p>
                </SwiperSlide>
                <SwiperSlide className="singleScrolJewelryItem">
                    <img src="/images/Rectangle 22.png" alt="error" />
                    <p>Engraved gold ring</p>
                    <p>Yellow gold, engraving</p>
                    <p>$170</p>
                </SwiperSlide>
                <SwiperSlide className="singleScrolJewelryItem">
                    <img src="/images/Rectangle 22.png" alt="error" />
                    <p>Engraved gold ring</p>
                    <p>Yellow gold, engraving</p>
                    <p>$170</p>
                </SwiperSlide>
            </Swiper>
        </Component>
    );
};

export default ShopItAll;

const Component = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    h1 {
        font-weight: 700;
        font-size: 40px;
        line-height: 44px;
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
