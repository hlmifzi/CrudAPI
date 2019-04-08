import React from 'react'
import { Button } from 'react-bootstrap'

const Buttons = ({ color, text, tipe, icon }) => {
   return (
      <Button variant={color} type={tipe}><i className={icon}></i> {text}</Button>
   )
}

export default Buttons