import React, { Component } from 'react';
import classez from './App.css';
import classed from'./Person/Person.css';
import Person from './Person/Person';




class App extends Component {
  state = {
    persons: [
      {id: "bla1", name: 'Dan', age: 33},
      { id: "bla2", name: 'Emily', age: 28}
    ],
    showPersons: false
  }

deletePersonHandler = (personIndex) => {
    const people = [...this.state.persons]
    people.splice(personIndex, 1);
    this.setState({persons: people})
}

nameChangedHandler = (event, id) => {
const personIndex = this.state.persons.findIndex(p => {
  return p.id === id;
});

const human = {
  ...this.state.persons[personIndex]
};

human.name = event.target.value;

const aliens = [...this.state.persons];
aliens[personIndex] = human;

  this.setState({persons: aliens})
}

togglePersonHandler = () => {
    let doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
    
}



  render() {

    

    let persons = null;
    let btnClass = classez.myButt;

    if (this.state.showPersons) {

      persons = (
        <div>
          {this.state.persons.map((myArray, index) => {
            
            return<Person
            click={() => this.deletePersonHandler(index)}
            name = {myArray.name}
            age = {myArray.age}
            key = {myArray.id}
            changed = {(event) => this.nameChangedHandler(event, myArray.id)}
            id={classed[myArray.id]}
          />
            
          })}
          
          </div>
      );

      btnClass=classez.Red;

      
      }

    


    

    let classes = [];
    if (this.state.persons.length <= 1){
      classes.push(classez.red); //we dont push strings as classes anymore now we are using modular css
    }
    if (this.state.persons.length === 0 ){
      classes.push(classez.bold);
    }

  

    return (
      <div className={classez.App}>
       <h1>Hi, I'm a React App</h1>
       <p className={classes.join(' ')}>This is working also</p>
       <button className = {btnClass}
       onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
        
          
    
       
      </div>
    );
  }
}

export default App;
