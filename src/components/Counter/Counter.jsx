import React from 'react';
import { Input, Button, Card, CardHeader, CardBody, Row, Col, Form, FormGroup } from 'reactstrap';

class Counter extends React.Component {
  constructor(props) {
    super();

    this.state ={
      value: props.defaultValue.toString(),
    };

    this.handleIncrementValue = this.handleIncrementValue.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleDecrementValue = this.handleDecrementValue.bind(this);
  }

  handleIncrementValue() {
    const value = +this.state.value + 1;

    this.setState({
      value: value.toString(),
    })

    this.props.changeValue(value);
  }

  handleDecrementValue() {
    const value = +this.state.value - 1;

    this.setState({
      value: value.toString(),
    })

    this.props.changeValue(value);
  }

  handleChangeInput(event) {
    this.setState({
      value: event.target.value,
    });

    this.props.changeValue(+event.target.value);
  }

  render() {
    return (
      <Card>
          <CardHeader>Счетчик</CardHeader>
          <CardBody>
            <Form inline>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Button
                      style={{ marginRight: '10px' }}
                      onClick={this.handleDecrementValue}
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
                      onWheel={() => {}}
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
    );
  }
}

export default Counter;