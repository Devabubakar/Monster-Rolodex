import { Component } from 'react';
import './App.css';
import Search from './components/searchbox.component/searchbox';

import Cardlist from './components/cardlist.components/Cardlist';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFields: '',
    };

    this.componentDidMount = () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => this.setState({ monsters: users }));
    };
  }

  handleChange = (e) => {
    this.setState({ searchFields: e.target.value });
  };

  render() {
    const { monsters, searchFields } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFields)
    );
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <Search
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />
        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
