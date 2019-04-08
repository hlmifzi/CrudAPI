import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import {
   Nav,
   Navbar,
   Form
} from 'react-bootstrap'

import Btn from '../../Buttons'

class Menus extends Component {
   render() {
      return (
         <Fragment>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
                  <Link className='navbar-light navbar-nav nav-link label label-sm label-primary' to="/">
                     Home
                  </Link>
               </Nav>
               <Form inline>
                  <Link className='navbar-light navbar-nav nav-link label label-sm label-primary' to="/Add">
                     <Btn color="primary" text="Add Suggestion" icon="fa fa-plus" />
                  </Link>
               </Form>
            </Navbar.Collapse>
         </Fragment >

      )
   }
}

export default Menus