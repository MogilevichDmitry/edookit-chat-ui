import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App.jsx';
import Login from './components/login/Login.jsx';
import Chat from './components/Chat/Chat.jsx';

export default () => {
  return <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Chat} />
      <Route path="/login" component={Login} />
    </Route>
  </Route>
}
