import React from 'react';
import Counter from '../Counter/Counter.jsx';

const DEFAULT_VALUE = 3;
const MIN_VALUE = 0;
const MAX_VALUE = 4


class App extends React.Component {
  constructor(props) {
    super();

    this.state ={
      valueCounter: 0,
    };

    this.handleChangeValueCounter = this.handleChangeValueCounter.bind(this);
  }

  handleChangeValueCounter(value) {
    this.setState({
      valueCounter: value,
    });
  }

  render() {
    return (
      <div className="App">
        <Counter
          defaultValue={DEFAULT_VALUE}
          minValue={MIN_VALUE}
          maxValue={MAX_VALUE}
          changeValue={this.handleChangeValueCounter}
        />
        <p>Значиение cчетчика: <b>{this.state.valueCounter}</b></p>
      </div>
    );
  }
}

export default App;
