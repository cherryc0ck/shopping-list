import { Component } from 'react';
import './app.css';
import Menus from './components/menus';
import Navbar from './components/navbar';

class App extends Component {

  state = {
    items: [
      {id: 1, count:0},
      {id: 2, count:0},
      {id: 3, count:0},
      {id: 4, count:0},
      {id: 5, count:0},
      {id: 6, count:0},
    ],
  };

  render() {
    return (
      <>
      <Navbar 
        totalCount={this.state.items.filter(item=>
          item.count > 0).length}
      />
      <Menus 
        items={this.state.items}
      />
      </>
    );
  }
}

export default App;
