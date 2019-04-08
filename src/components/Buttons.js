import React from 'react'
import { Button } from 'react-bootstrap'

const Buttons = ({ color, text, tipe }) => {
   return (
      <Button variant={color} type={tipe}>{text}</Button>
   )
}

export default Buttons