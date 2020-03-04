import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
// import List from './components/list';
// import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';

class App extends React.Component {
  // constructor() {
  //   super()
  //   this.onTest = this.onTest.bind(this);
  // }

  onTest() {
    console.log("HelloWorld")
  }

  render() {
    var helloWorld = 'Welcome To React Todo List.'

    return (
      <div className='mainDiv backGroundColor' >
        <div className='container'>
          <br></br>
          <h2 className='text-center'>
            {helloWorld}
          </h2>
          <br></br>
          <Header />
          {/* <List /> */}

        </div>
      </div>

    )
  }
}
export default App;
