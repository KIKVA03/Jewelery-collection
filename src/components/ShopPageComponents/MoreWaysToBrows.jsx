import styled from "styled-components";

const MoreWaysToBrows = () => {
    return (
        <Component>
            <h3>MORE WAYS TO BROWSE</h3>
            <div className="buttonsWrapper">
                <button>NEW COLLECTION</button>
                <button>BEST SELLSERS</button>
                <button>EARRINGS</button>
                <button>RINGS</button>
                <button>BRACCELETS</button>
                <button>CHARMS</button>
                <button>CHARMS</button>
                <button>WEDDING</button>
                <button>MEN'S</button>
                <button>LIFESTYLE</button>
            </div>
        </Component>
    );
};

export default MoreWaysToBrows;

const Component = styled.div`
    height: 100%;
    padding: 0 80px 32px 80px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    h3 {
        margin-top: 52px;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
    }
    .buttonsWrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        button {
            padding: 14px 28px;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            background-color: transparent;
            border: 1px solid #dad7d4;
            border-radius: 50px;
            cursor: pointer;
        }
        button:hover {
            background-color: lightgray;
        }
    }
`;
