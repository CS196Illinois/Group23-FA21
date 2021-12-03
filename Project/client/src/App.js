import React, { Component } from 'react';

import {
  Container,
  Navbar,
  NavbarBrand,
  Row,
  InputGroup,
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
      var msgList = res.map(r => r.messages_text);
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
      body: JSON.stringify({ message: this.state.newMsgText })
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
        <Navbar style={{backgroundColor: '#e3f2fd'}} light color="faded">
          <NavbarBrand className="navbar-brand" href="/">Zing</NavbarBrand>
        </Navbar>
        <Row>
          <Col style={{paddingBottom: '100px', paddingTop:'50px'}}>
              <h1 className="display-3">Make someone's day!</h1>
              <p className="lead">Inspire, motivate, inspirit!</p>
              <InputGroup size="lg">
                <Input 
                  placeholder="Insert message here..."
                  value={this.state.newMsgText}
                  onChange={this.handleInputChange}
                />
                
                  <Button style={{backgroundColor: '#e3f2fd'}} color="secondary" outline onClick={this.handleAddMessage}>Add Zing</Button>
                
                
              </InputGroup>
            
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-5">Messages</h1>
            <FormGroup>
              <Input type="select">
                { this.state.msgList.length === 0 && <option>No messages added yet.</option> }
                { this.state.msgList.length > 0 && <option>View Messages.</option> }
                { this.state.msgList.map((message, i) => <option key={i}>{message}</option>) }
              </Input>
            </FormGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default App;
