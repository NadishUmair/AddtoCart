import React, { useState } from 'react'

const Cart=({addto})=> {

  
  return (
    <div>
       <h1>Cart items</h1>
      {
        addto?.map((item)=>{
           return(
            <h1 key={item.id}>{item.title}</h1>
           )
        })
      }
        


    </div>
  )
}
export default Cart;
