import React from 'react';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './routes/Navigation';
import Detail from './routes/Detail';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" exact={true} component={About} />
      <Route path="/Detail/:id" exact={true} component={Detail} />
    </BrowserRouter>
  )
}

export default App;
