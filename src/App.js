import Food from './example';
import propTypes from 'prop-types';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor!!');
  }
  state = {
    isLoading: true
  }
  componentDidMount() {
    console.log("componentDidMount!!")
    setTimeout(() => {
      this.setState(current => ({ isLoading: !current.isLoading }));
    }, 3000)
  }

  render() {
    const { isLoading } = this.state;
    console.log('render!!')
    return (
      <div>
        <h1>{isLoading ? 'Loading...' : 'show moives'}</h1>
      </div>
    )
  }
}

export default App;
