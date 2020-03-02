import React, { Component } from 'react';
import './App.css';
import Passwords from './Passwords.js';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import Client from './Client.js';
import Manager from './Manager.js';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "",
      list: []
    };
  }

  renderEnvironment() {
    if (this.state.page === "") {
      return <h1>Banco</h1>
    }
    if (this.state.page === "Client") {
      return <Client updateListApp={() => this.updateList()} />
    }
    if (this.state.page === "Manager") {
      return <Manager updateListApp={() => this.updateList()} />
    }
  }
  setPageState(e, name) {
    if (name === "Client") {
      this.setState({ page: "Client" })

    }
    if (name === "Manager") {
      this.setState({ page: "Manager" });

    } if (name === "") {
      this.setState({ page: "" });
    }

  }
  updateList = () => {
    const url = 'https://gestao-senhas-api.herokuapp.com/manager/list';
    axios.get(url)
      .then(response => {
        const data = response.data;
        if (data.length) {
          this.setState({
            list: data
          })
        }
        else{
          this.setState({
            list: []
          })
        }
      }).catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand onClick={(e) => { this.setPageState(e, "") }}>Gestão de Senhas</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link onClick={(e) => { this.setPageState(e, "Manager") }}>Gerente</Nav.Link>
            <Nav.Link onClick={(e) => { this.setPageState(e, "Client") }}>Cliente</Nav.Link>
          </Nav>
        </Navbar>
        <br />
        <Container>
          <Row>
            <Col>
              <div className='App-list'>
                <Passwords list={this.state.list} />
              </div>
            </Col>
            <Col>
              {this.renderEnvironment()}
            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}

export default App;
