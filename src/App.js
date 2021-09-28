import React from 'react';
import Home from './routes/Home';
import About from './routes/About';
import { HashRouter, BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" exact={true} component={About} />
    </BrowserRouter>
  )
}

export default App;
