import React, { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [name, setName] = useState()
  const [discription, setDiscription] = useState()
  const [price, setPrice] = useState()
  const [type, setType] = useState([])

  const [stateBul, setStateBul] = useState(false)

  function whichIsTrue() {
    return(
      stateBul === false ? setStateBul(true) : setStateBul(false)
    )
  }

  function show() {
    console.log(
      ` name: ${name};
  discription: ${discription};
  price: ${price};
  type: ${type}
      `
    )
  }

  return (
    <div className='center'>
      <div>
        <input value={name} placeholder='name'
          onChange={(e) => {
            setName(e.target.value)
          }}
          style={{
            width:'200px',
            height:'20px',
            marginTop: "50px"
          }}
        />
      </div>
      <div>
        <input value={discription} placeholder='discription'
          onChange={(e) => {
            setDiscription(e.target.value)
          }}
          style={{
            width:'200px',
            height:'20px',
            marginTop: "10px"
          }}
        />
      </div>
      <div>
        <input value={price} placeholder='price'
          onChange={(e) => {
            setPrice(e.target.value)
          }}
          style={{
            width:'200px',
            height:'20px',
            marginTop: "10px"
          }}
        />
      </div>

        <div style={{margin: 10}}>
          <input type='checkbox' value='tshirt' onClick={(e) => {
            whichIsTrue()
            if(stateBul === true){
              setType(e.target.value)
            }else{
              setType('')
            }
          }}/>
          <span>tshirt</span>

          <input type='checkbox' value='jeans' onClick={(e) => {
            whichIsTrue()
            if(stateBul === true){
              setType(e.target.value)
            }else{
              setType('')
            }
          }}/>
          <span>jeans</span>

          <input type='checkbox' value='sweatshirt' onClick={(e) => {
           whichIsTrue()
           if(stateBul === true){
             setType(e.target.value)
           }else{
              setType('')
            }
          }}/>
          <span>sweatshirt</span>
        </div>

        <button type='submit' onClick={() => {show(name, discription, price, type)}} style={{
            width:'200px',
            height:'30px',
            marginTop: "15px",
            fontSize: '12px',
            background: "#B0C4DE"
          }}>create</button>
    </div>
  )
}
