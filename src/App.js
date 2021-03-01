import REACT, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
        isClicked: false,
        inputValue: "",
        listOfTodos: []
      }
  }

  handleChange = (event) => {
    this.setState({inputValue: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({listOfTodos:[...this.state.listOfTodos, this.state.inputValue]})
    this.setState({inputValue: ""})
  }
  handleRemove = (event) => {
    let thisIndex = event.target.attributes.index.value
    let list = this.state.listOfTodos
    list.splice(thisIndex, 1)
    this.setState({listOfTodos:[...list]})
  }

  render () {
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
  
          <form onSubmit={this.handleSubmit}>
            <input type ='text' value={this.state.inputValue} onChange={this.handleChange} ></input>
            <button type="submit">Submit</button>
          </form>

          <ol>{this.state.listOfTodos.map((item, index) => {

            return <div key={index} className="lidiv"> 
                      <li>{item}</li>
                      <button index={index} onClick={this.handleRemove}>Completed</button>
                    </div>

          })}</ol>

          <a>
            {this.props.name}
          </a>
          
        </header>
      </div>
   );
  }
}

  

export default App;
