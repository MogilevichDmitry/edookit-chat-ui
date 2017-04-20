import React from 'react';
import { Route } from 'react-router';
import App from './components/App.jsx';
import Chat from './components/Chat/Chat.jsx';
import Login from './components/Login/Login.jsx';

export default () => {
  return <Route>
    <Route path="/" component={App}>
      <Route path="/chat" component={Chat} />
      <Route path="/login" cocmponent={Login} />
    </Route>
  </Route>
}
