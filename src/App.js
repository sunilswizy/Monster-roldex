import './App.css';
import React from 'react';
import { CardList } from './component/card-list/card-list-component';
import {SearchBar} from './component/search/search.component';

class App extends React.Component{

  constructor(){
    super();
    this.state={
      monster:[],
      searchfield:''
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((value)=>this.setState({monster:value}))
    .catch((err)=>console.log("Error "+err))
}

handlechange=(e)=>{
    return this.setState({searchfield:e.target.value})
}
  render(){
    const {monster,searchfield}=this.state;
    const filtermonster=monster.filter((monsters)=> 
    monsters.name.toLowerCase().includes(searchfield.toLowerCase()))
    
    return(
    <div className="App">
      <h1 className="heading">Monster Rolodex</h1>
      <SearchBar 
      placeholder="Search Monster"
      HandleChange={this.handlechange}
    />
      <CardList monsters={filtermonster}>
        </CardList>
    </div>
    )
  }
}
export default App;