import React, { Component } from 'react';

import {
  Container,
  Navbar,
  NavbarBrand,
  Row,
  Jumbotron,
  InputGroup,
  InputGroupAddon,
  Button,
  FormGroup,
  Input,
  Col
} from 'reactstrap';

import Message from './Message';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       msgList: [],
       newMsgText: ''
    };
  }

  getMessageList = () => {
    fetch('/api/messages')
    .then(res => res.json())
    .then(res => {
      var msgList = res.map(r => r.msg_text);
      this.setState({ msgList });
    });
  };

  handleInputChange = (e) => {
    this.setState({ newMsgText: e.target.value });
  };

  handleAddMessage = () => {
    fetch('/api/messages', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ city: this.state.newMsgText })
    })
    .then(res => res.json())
    .then(res => {
      this.getMessageList();
      this.setState({ newMsgText: '' });
    });
  };

  componentDidMount () {
    this.getMessageList();
  }

  render() {
    return (
      <Container fluid className="centered">
        <Navbar dark color="dark">
          <NavbarBrand href="/">Zing</NavbarBrand>
        </Navbar>
        <Row>
          <Col>
            <Jumbotron>
              <h1 className="display-3">Make someone's day!</h1>
              <p className="lead">Inspire, motivate, inspirit!</p>
              <InputGroup>
                <Input 
                  placeholder="Insert message here..."
                  value={this.state.newMsgText}
                  onChange={this.handleInputChange}
                />
                <InputGroupAddon addonType="append">
                  <Button color="primary" onClick={this.handleAddMessage}>Add Zing</Button>
                </InputGroupAddon>
                
              </InputGroup>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
            </FormGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default App;
