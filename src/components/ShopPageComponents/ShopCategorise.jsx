import styled from "styled-components";

const ShopCategorise = () => {
    return (
        <Component>
            <ul>
                <li>New Arrival</li>
                <li>Best Sellers</li>
                <li>Shop All</li>
                <li>Earrings</li>
                <li>Single Earrings</li>
                <li>Rings</li>
                <li>Necklaces</li>
                <li>Necklaces</li>
                <li>Braclets + Ankles</li>
                <li>Charms + Pendants</li>
                <li>Wedding</li>
                <li>Men's</li>
                <li>Lifestyle</li>
                <li>Jewelry Care Kit</li>
            </ul>
        </Component>
    );
};

export default ShopCategorise;

const Component = styled.div`
    position: sticky;
    top: 54px;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 9px;

    ul {
        li {
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            list-style: none;
            cursor: pointer;
        }
    }

    @media (max-width: 1030px) {
        display: none;
    }
`;
