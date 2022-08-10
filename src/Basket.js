import React from "react";


const Basket = ({basketItem}) => {


        const basketNodes = basketItem.map((item, index) => {
            return <li key={index}>Coffee: {item.Name}, Price: {item.Price}</li>
        })
        
        const totalPrice = basketItem.reduce((now, next) => now + next.Price, 0).toFixed(2)


    return (<>
    <ul>{basketNodes}</ul>
    <p>Total in basket: £{totalPrice}</p>
    </>)

}

export default Basket;