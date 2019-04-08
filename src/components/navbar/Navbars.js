import React, { Component, Fragment } from 'react'
import {
   Navbar,
} from 'react-bootstrap'

import Menus from './menu/Menus'
import Brand from './brand/Brand'

class Navbars extends Component {
   render() {
      return (
         <Fragment>
            <Navbar bg="warning" expand="lg" style={{ marginBottom: '20px' }}>
               <Brand />
               <Menus />
            </Navbar >
         </Fragment>
      )
   }
}

export default Navbars