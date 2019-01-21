import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots }  from './robots';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    onSeachChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }
    render() {
        const filterRobots = this.state.robots.filter( robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div>
                <h1>RoboFriends</h1>
                <SearchBox seachChange = { this.onSeachChange }/>
                <CardList robots={ filterRobots }/>
            </div>
        )
    }
}

export default App;