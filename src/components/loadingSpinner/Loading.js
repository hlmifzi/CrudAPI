import React, { Fragment } from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
   return (
      <Fragment>
         <Spinner animation="border" variant="warning" />
      </Fragment>
   )
}

export default Loading