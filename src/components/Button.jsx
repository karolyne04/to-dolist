import React from 'react'


const Button = ({button, addTarefa}) => {
  return (
    <div className='button-mais'>
        <button className='mais' onClick={() => addTarefa(addTarefa)}>+</button>
    </div>
  )
}

export default Button;