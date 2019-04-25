import React , {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList'; 
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import {robots} from '../Robots.js';
import './App.css';

import { setSearchField } from '../actions'

const mapStateToProps = state => {
  console.log(state);
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots:[]
      //searchfield:''
    }
  }

  componentDidMount(){
    //fetch way
    /*fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots:users}));*/
    //file way
    this.setState({robots:robots})
  }
  
  /*
  onSearchChange=(event) => {
    this.setState({searchfield:event.target.value});
  }
  */

  render(){
    const { robots/*,searchfield*/} = this.state;
    const { searchField, onSearchChange } = this.props;
    const filterRobots = (robots.filter(robot=> {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    }))
    return !robots.length ?
    <h1>Loading</h1> :
    (
      <div className='tc'>
      <h1 className='f1'>robotfriend</h1>
      <SearchBox searchChange={onSearchChange}/>
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filterRobots}/>
        </ErrorBoundry>
      </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);