import React , {Component} from 'react';
import CardList from '../components/CardList'; 
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import {robots} from '../Robots.js';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots:[],
      searchfield:''
    }
  }

  componentDidMount(){
    //fetch way
    fetch('https://jsonplaceholder.typicode.com/users',{mod:'cors'})
    .then(response => response.json())
    .then(users => this.setState({robots:users}));
    //file way
    //this.setState({robots:robots})
  }
  
  onSearchChange=(event) => {
    this.setState({searchfield:event.target.value});
  }

  render(){
    const {robots,searchfield} = this.state;
    const filterRobots = (robots.filter(robot=> {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    }))
    return !robots.length ?
    <h1>Loading</h1> :
    (
      <div className='tc'>
      <h1 className='f1'>robotfriend</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <Scroll>
        <CardList robots={filterRobots}/>
      </Scroll>
      </div>
    );
  }
}

export default App;