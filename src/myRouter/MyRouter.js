import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ZhomeRouter from '../scenes/home/ZhomeRouter';

const MyRouter = () => {
   return (
      <Fragment>
         <Router>
            <Switch>
               <ZhomeRouter />
            </Switch>
         </Router>
      </Fragment>
   )
}

export default MyRouter
