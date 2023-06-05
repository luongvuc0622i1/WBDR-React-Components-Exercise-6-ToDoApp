// import logo from './logo.svg';
// import './App.css';

import { Component } from "react";
import Todo from "./components/Todo";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
const list = []

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list
    };
  }

  add = () => {
    let val = document.getElementById("value").value;
    list.push(val);
    console.log(list);
    this.setState({ list: list });
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <h1>Todo List</h1>
          <input type="text" id="value" />
          <button onClick={this.add}>Add</button>
        </div>
        <div>
          <Todo list={this.state.list} />
        </div>
      </div>
    );
  }
}

export default App;