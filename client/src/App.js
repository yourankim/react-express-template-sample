import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state = {
    messageFromJSON: null,
    messageFromSendString: null,
    messageFromSendObject: null,
  };

  componentDidMount() {
    this.fetchData("/helloJSON")
      .then(res => this.setState({ messageFromJSON: res.data }))
      .catch(err => console.log(err));

    this.fetchData("/helloSendString")
    .then(res => this.setState({ messageFromSendString: res.data }))
    .catch(err => console.log(err));  

    this.fetchData("/helloSendObject")
    .then(res => this.setState({ messageFromSendObject: res.data }))
    .catch(err => console.log(err));  
  }

  fetchData = async (route) => {
    const response = await fetch(route);
    const data = await response.json();

    if( response.status !== 200 ) {
      throw Error( data.message );
    }
    return data;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.messageFromJSON}</p>
          <p>{this.state.messageFromSendString}</p>
          <p>{this.state.messageFromSendObject}</p>
        </header>
      </div>
    );
  }
 
}

export default App;
