import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Dan', age: 33},
      {name: 'Emily', age: 28}
    ]
  }

switchNameHandler = (newName) => {
    //console.log('was clicked');
    // DONT DO THIS this.state.persons[0].name = 'Dhani';
    this.setState({
      persons: [
        {name: newName, age: 33},
        {name: 'Emily', age: 28}]
  });
}

nameChangedHandler = (event) => {
  this.setState({
    persons: [
      {name: event.target.value, age: 33},
      {name: 'Emily', age: 28}
    ]
  })
}

  render() {
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p>This is working also</p>
       <button onClick={() => this.switchNameHandler('Dhani!')}>Switch Name</button>
       <Person
       name={this.state.persons[0].name}
       age={this.state.persons[0].age}
       click={this.switchNameHandler.bind(this, 'Dan!')}
       changed={this.nameChangedHandler}/>
       <Person
       name={this.state.persons[1].name}
       age={this.state.persons[1].age}/>
      </div>
    );
  }
}

export default App;
