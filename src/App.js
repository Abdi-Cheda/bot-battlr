import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BotCollection from './BotCollection';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/bots" element={<BotCollection />} />
      </Switch>
    </Router>
  );
};

export default App;
