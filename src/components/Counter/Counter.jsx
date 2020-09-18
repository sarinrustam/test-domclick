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

    props.changeValue(props.defaultValue);
  }

  changeValue(value) {
    if (value >= this.props.minValue && value <= this.props.maxValue) {
      this.setState({
        value: value.toString(),
      })
  
      this.props.changeValue(value);
    }
  }

  handleIncrementValue() {
    const value = +this.state.value + 1;
    this.changeValue(value);
  }

  handleDecrementValue() {
    const value = +this.state.value - 1;
    this.changeValue(value);
  }

  handleChangeInput(event) {
    const value = event.target.value;
    this.changeValue(value);
  }

  render() {
    return (
      <Card>
          <CardHeader>Счетчик</CardHeader>
          <CardBody>
            <Form inline>
              <Row form>
                <Col md={4}>
                  <FormGroup style={{flexFlow: "row"}}>
                    <Button
                      style={{ marginRight: '10px'}}
                      onClick={this.handleDecrementValue}
                      disabled={+this.state.value === this.props.minValue}
                    >
                      -
                    </Button>
                    <Input
                      style={{ marginRight: '10px'}}
                      type="number"
                      name="counter"
                      id="exampleCity"
                      value={this.state.value}
                      onChange={this.handleChangeInput}
                    />
                    <Button
                     onClick={this.handleIncrementValue}
                     disabled={+this.state.value === this.props.maxValue}
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