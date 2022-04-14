import React, { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [name, setName] = useState()
  const [discription, setDiscription] = useState()
  const [price, setPrice] = useState()
  const [type, setType] = useState([])

  const [useChecked, setChecked] = useState(!'checked')

  function whichIsTrue(target) {
    useChecked === !'checked' ? setChecked('checked') : setChecked(!'checked')
      if(useChecked === 'checked'){
        setType(target)
      }else{
         setType('')
     }
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
      <select className='center' onChange={(e) => {
            setPrice(e.target.value)
          }}
          style={{
            width:'210px',
            height:'25px',
            marginTop: "10px"
          }}
      >
      <option value='price'>price</option>
      <option value='100'>100</option>
      <option value='200'>200</option>
      <option value='300'>300</option>
      <option value='400'>400</option>
      <option value='500'>500</option>
      </select>
      </div>

        <div style={{margin: 10}}>
          <label>
            <input type='checkbox' checked={useChecked} value='tshirt' onChange={(e) => {
              whichIsTrue(e.target.value)
            }}/>
          tshirt</label>

          <label>
            <input type='checkbox' checked={useChecked} value='jeans' onChange={(e) => {
              whichIsTrue(e.target.value)
            }}/>
          jeans</label>

          <label>
            <input type='checkbox' checked={useChecked} value='sweatshirt' onChange={(e) => {
              whichIsTrue(e.target.value)
            }}/>
          sweatshirt</label>
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
