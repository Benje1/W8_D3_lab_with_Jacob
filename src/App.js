import React, {useState} from "react";
import ShopItem from "./ShopItem";
import Basket from "./Basket";
import styled from "styled-components";
import Dropdown from 'react-bootstrap/Dropdown';

function App() {

  const [items, setItems] = useState([
    {
      imageUrl: "https://media.istockphoto.com/id/165700062/photo/bag-with-coffee-beans-isolated-on-white.webp?s=612x612&w=is&k=20&c=c3A672OtMXePGzP4jt008vV-DF2uyGx48xF3HrwQbdI=",
      itemName: "Java coffee",
      price: 10
    },
    {
      imageUrl: "https://media.istockphoto.com/id/172259368/photo/brown-coffee-bag.webp?s=612x612&w=is&k=20&c=3BVvDadMv2_2aP3Fw4HsVlCORKLFucZEmXLshqJGrmQ=",
      itemName: "Briazilian coffee",
      price: 8.99
    },
    {
      imageUrl: "https://media.istockphoto.com/id/1258690879/photo/bag-of-coffee-beans.webp?s=612x612&w=is&k=20&c=aKpl5LKCM06ll4srvJx2p5-8dAq3LA2SdOvUuoxwgoE=",
      itemName: "Columbian coffee",
      price: 9.45
    },
    {
      imageUrl: "https://media.istockphoto.com/photos/coffee-beans-and-espresso-cup-picture-id854418416?k=20&m=854418416&s=612x612&w=0&h=5ZKFrBWxkCJP5KxlKQeAai43RrO1d1Yc6j-DLBTzG2E=",
      itemName: "Philippine coffee",
      price: 7.45
    },
    {
      imageUrl: "https://media.istockphoto.com/photos/coffee-bag-filled-with-roasted-beans-isolated-on-white-picture-id465465892?k=20&m=465465892&s=612x612&w=0&h=vNHGeFmKYGN9_o11Vkp89GN3QhpNOlX9Dkmy5DyJvU8=",
      itemName:"Costa Rican coffee",
      price: 8.50},
    {
      imageUrl: "https://media.istockphoto.com/photos/grains-of-coffee-pour-out-from-a-sack-picture-id452739025?k=20&m=452739025&s=612x612&w=0&h=vv3zYeYkoRSpTvWOWwxTu0K9GCGGy2B4cbqWIS9vmyE=",
      itemName: "Ethopian coffee",
      price: 9.99
    },
    {
      imageUrl: "https://media.istockphoto.com/photos/coffee-picture-id89952460?k=20&m=89952460&s=612x612&w=0&h=PixlqAHEp7WYe6opDmq8kFUVIbupOBG6RUNcLMQj1bk=",
      itemName:"Jamaican coffee",
      price: 8.99
    }
  ])


  const [basketItem, setBasketItem] = useState([])
  
  const addToBasket = (item) => {
    const copyList = [...basketItem, item]
    setBasketItem(copyList)
  }

  const shopItems = items.map((item, index) => {
    return <ShopItem key={index}
    imageUrl={item.imageUrl}
    itemName={item.itemName}
    price={item.price}
    addToBasket={addToBasket}/>
  })

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  
  return (
    <Webpage>
    <NavBar><li><h1>A coffee shop</h1></li>
    <Li>Hello Jacob</Li>
    
    <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Checkout
          </Dropdown.Toggle>
          <Checkout>
          <Dropdown.Menu>
            {basketItem.length ? <Dropdown.Item><Basket basketItem={basketItem} /></Dropdown.Item> : <Dropdown.Item>Basket is Empty</Dropdown.Item>}
          </Dropdown.Menu>
          </Checkout>
    </Dropdown>

    </NavBar>
    <Container>
    {shopItems}
    </Container>
    <BasketView>
    <h3>Checkout:</h3>
    <br/>
    </BasketView>
    </Webpage>
  );
}




const Webpage = styled.div`
background-color: #A39A92;
margin: 0;`

const NavBar = styled.ul`
    display: flex;
    justify-content: space-between;
    color: white;
    background-color: #362C28;
    list-style: none;
    align-items: center;
    margin: 0;
    `;

const Checkout = styled.ul`
    background-color: white;
`

const Li = styled.li`
    margin-right: 30px;
`

const Container = styled.ul`
    display: flex;
    flex-direction: row;
    background-color: #F4EBD9;
    border-top: 40px;
    margin: 0;
    flex-wrap: wrap;
    `

const BasketView = styled.div`
background-color: #A39A92;
margin-left: 20px;
padding-bottom: 150px;
`

export default App;
