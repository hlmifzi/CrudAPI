import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import HomeAdd from './HomeAdd';

const ZhomeRouter = () => {
   return (
      <Fragment>
         <Route exact path="/" component={Home} />
         <Route path="/Add" component={HomeAdd} />
      </Fragment>
   )
}

export default ZhomeRouter;