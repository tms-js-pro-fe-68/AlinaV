import { useState } from 'react';

export default function buttonColor() {
  const [color, state] = useState('green');

  function changeColor(){
      return (color === 'green'? state('blue') : state('green'))
  }
  return (
    <p>
      <button type="button" onClick={() => changeColor()} style={{
          background: color,
          width: '200px',
          height: '180px',
          marginTop: '15px',
      }}>
          Butt + erfly||''</button>
    </p>
  )
}
