import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },

    ]
  }
  constructor() { // this is the good opertunity to initialise the properties.
    super();
    console.log('App-constructor');
    // do not use this.setstate() in this func becasue this can be used 
    //only when a component has already showed in browsers' dom.
  }
  componentDidMount() { // this func is called, after a component rendered into a dom
    // perfect place to make Ajax calls to get data from server.
    //Ajax calls
    console.log('App - Mounted');

  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];//modify the state derectly.
    // counters[0].value++;
    //clone counter in given location. then we have a different object from state.
    //need deep clone.
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters);
    console.log(counters);
    this.setState({ counters });
  }
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];//modify the state derectly.
    // counters[0].value++;
    //clone counter in given location. then we have a different object from state.
    //need deep clone.
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  }
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
    console.log('Event Handler Called', counterId);
  };
  render() {
    console.log('App - Rendered');
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="continer">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          ></Counters>
        </main>
      </React.Fragment>
    );

  }
}
export default App;
