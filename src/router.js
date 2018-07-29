import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ArticlePage from './routes/ArticlePage';
import UsersPage from './routes/UsersPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage}/>
        <Route path="/article" exact component={ArticlePage}/>
        <Route path="/users" exact component={UsersPage}/> 
      </Switch>
    </Router>
  );
}

export default RouterConfig;
