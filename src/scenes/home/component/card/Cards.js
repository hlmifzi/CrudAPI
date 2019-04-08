import React from 'react'
import {
   Card
} from 'react-bootstrap'
import './card.css'

const Cards = ({ title, content, index, fEdit, fRemove, arr }) => {
   return (
      <Card style={{ width: '100%', marginBottom: '20px' }} className='shadow' >
         <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Group[2]</Card.Subtitle>
            <Card.Text>
               {content}
            </Card.Text>
            <i className="far fa-heart"></i><span> 900k</span>
            <br /><br />
            <button onClick={() => fEdit(arr)} className="btn btn-info" type="submit"><i className="fa fa-edit"></i>&nbsp;Edit </button> &nbsp;
            <button onClick={() => fRemove(index)} className="btn btn-danger" type="submit"><i className="fa fa-trash"></i>&nbsp;Delete </button>
         </Card.Body>
      </Card>
   )
}

export default Cards