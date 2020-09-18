import React from 'react';
import Counter from '../Counter/Counter.jsx';


class App extends React.Component {
  constructor(props) {
    super();

    this.state ={
      valueCounter: 0,
    };

    this.handleChangeValueCounter = this.handleChangeValueCounter.bind(this);
  }

  handleChangeValueCounter(value) {
    console.log(value);
    this.setState({
      valueCounter: value,
    });
  }

  render() {
    return (
      <div className="App">
        <Counter
          defaultValue={0}
          // minValue={}
          // maxValue={}
          changeValue={this.handleChangeValueCounter}
        />

        <p>Значиение коунтера: <b>{this.state.valueCounter}</b></p>
      </div>
    );
  }
}

export default App;
