import React, {useState, useEffect} from "react";
import styled from "styled-components";

const ShopItem = ({imageUrl, itemName, price, addToBasket}) => {


    const hadleBasketClick = () => {
        addToBasket({
            Name: itemName,
            Price: price,
            Url: imageUrl
        })
    }
    

    return(<>
    <Wrapper>
        <ProductImage src={imageUrl}/>
        <Details>
            <p>{itemName}</p>
            <p>£{price}</p>
        </Details>
        <button onClick={hadleBasketClick}>&#128722;</button>
    </Wrapper>
    </>)
}


const Wrapper = styled.li`
    display: flex;
    margin: 10px auto;
    width: 250px;
    background-color: #efebebeb;
    padding: 10px;
    border-radius: 5px;
    justify-content: space-between;
`

const ProductImage = styled.img.attrs(props => ({ src: props.src }))`
    width: 100px;
    height: 100px;
    opacity: 0.8;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
`;


export default ShopItem;