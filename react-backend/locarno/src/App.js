import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from "@blueprintjs/core";

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      users: []
    }
  }
  
  componentDidMount(){
    //eg - connection string
    //let connectionUrl = "mongodb://locarnoadmin:locarnoadmin@producthunt@ds249025.mlab.com:49025/locarnodb";
    fetch("/users")
       .then(res => res.json())
       .then(users => this.setState( {   users    } )  )
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Users</h1>
        <div className="App-intro">
          {
            this.state.users.map(
              (user,id) => <p key={user.id}>{user.username}</p>
            )
          }
          <Button text="Actions" />
        </div>
      </div>
    );
  }
}

export default App;
