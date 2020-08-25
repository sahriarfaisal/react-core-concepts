import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman', 'Bappi', 'HeroAlom', ];
//Collection OF array object.
const products =[
  {name: 'Photoshop', price: '$90.99'},
  {name: 'Illustrator', price: '$60.99'},
  {name: 'PDF Reader', price: '$6.99'},
  {name: 'Premiere Elr', price: '$249.99'},

]

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a Adobe Product</p>
        <Counter></Counter>
        <Users></Users>

        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }

          
          {
            products.map(product => <li>{product.name}</li>)
          }

        </ul>

        {
          products.map(pd => <Product product={pd}></Product>)
        }

      </header>
    </div>
  );
}

//Counter UseState increase Decrease.
function Counter() {
  const [count, setCount] = useState(20);
  // const handleIncrease = () => setCount(count + 1);
  return(
    <div>
    <h1>Count: {count}</h1>
    <button onClick={() => setCount(count - 1)}>Decrease</button>
    <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

//React Dynamic Data lod
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

//props for product
function Product(props) {
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
//Distracted
const {name,price} = props.product;
console.log(name, price);

  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
export default App;
