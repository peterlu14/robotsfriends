import React , {Component} from 'react';
import CardList from '../components/CardList'; 
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
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
    var myrequest = new Request('https://jsonplaceholder.typicode.com/users',{mod:'no-cors'});
    fetch(myrequest)
    .then(response => response.json())
    .then(users => this.setState({robots:users}));
    //this.setState({robots:robots})
  }
  
  onSearchChange=(event) => {
    this.setState({searchfield:event.target.value});
    
    //console.log(filterRobots);
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