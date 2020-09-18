import React from 'react';
import { Input, Button, Card, CardHeader, CardBody, Row, Col, Form, FormGroup } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super();

    this.state ={
      value: 0,
    };

    this.handleIncrementValue = this.handleIncrementValue.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleIncrementValue() {
    this.setState({
      value: this.state.value + 1,
    })
  }

  handleChangeInput(event) {
    this.setState({value: +event.target.value});
  }

  render() {
    return (
      <div className="App">

        <Card>
          <CardHeader>Счетчик</CardHeader>
          <CardBody>
            <Form inline>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Button
                      style={{ marginRight: '10px' }}
                    
                    >
                      -
                    </Button>
                    <Input
                      style={{ marginRight: '10px' }}
                      type="number"
                      name="counter"
                      id="exampleCity"
                      value={this.state.value}
                      onChange={this.handleChangeInput}
                    />
                    <Button
                     onClick={this.handleIncrementValue}
                    >
                      +
                    </Button>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default App;
