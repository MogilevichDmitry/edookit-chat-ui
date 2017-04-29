import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App.jsx';
import Chat from './components/Chat/Chat.jsx';

export default () => {
  return <Route>
    <Route path="/" component={App}>
      <IndexRoute path="/chat" component={Chat} />
    </Route>
  </Route>
}
